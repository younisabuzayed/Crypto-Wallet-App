import React from 'react'
import { useFocusEffect } from '@react-navigation/native';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BalanceInfo, Chart, MainLayout } from '../../components';
import { COLORS, dummyData, icons } from '../../constants';
import { getHoldings } from '../../redux/actions/marketAction';
import styles from './styles';

const Portfolio = () => {
    const dispatch = useDispatch();
    const { myHoldings, error } = useSelector(state => state.marketReducer);
    const [selectedCoin, setSelectedCoin] = React.useState(null);

    useFocusEffect(
        React.useCallback(() =>
        {
            dispatch(getHoldings(holdings= dummyData.holdings));
        }, [])
    );
    let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
    let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0);
    let percChange = valueChange / (totalWallet - valueChange ) * 100;

    const renderCurrentBalanceSection = () =>
    {
        return (
            <View
              style={styles.renderCurrentBalanceSection}>
                <Text
                  style={styles.title}>Portfolio</Text>
                <BalanceInfo
                  title="Current Balance"
                  displayAmount={totalWallet}
                  changePct={percChange}
                  containerStyle={styles.containerStyleBalanceInfo} />
            </View>
        )
    }
    const ListHeaderComponent = () =>
    {
        return (
            <View>
                {/* Section Title */}
                <Text
                  style={styles.sectionTitle}>Your Assets</Text>
                {/* Header Label */}
                <View
                  style={styles.headerLabelRow}>
                    <Text
                      style={styles.headerLabelText}>Asset</Text>
                    <Text
                      style={{
                        ...styles.headerLabelText,
                        textAlign: 'right'
                        }}>Price</Text>
                    <Text
                      style={{
                        ...styles.headerLabelText,
                        textAlign: 'right'
                        }}>Holdings</Text>
                </View>
            </View>
        )
    };
    const renderItem = ({item}) =>
    {
        let priceColor = 
        (item.price_change_percentage_7d_in_currency === 0) 
            ? COLORS.lightGray3
            : (item.price_change_percentage_7d_in_currency > 0)
            ? COLORS.lightGreen
            : COLORS.red;
        return (
            <TouchableOpacity
              style={styles.renderItemAssets}
              onPress={() => setSelectedCoin(item)}>
                {/* Assets */}
                <View
                  style={styles.assetCoin}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.iconCoin} />
                    <Text
                      style={styles.name}>{item.name}</Text>
                </View>
                {/* Price */}
                <View
                  style={styles.priceContainer}>
                    <Text
                      style={styles.current_price}>${item.current_price.toLocaleString()}</Text>
                    <View
                      style={styles.price_change_container}>
                        {
                        item.price_change_percentage_7d_in_currency !== 0 &&
                        <Image
                            source={icons.upArrow}
                            style={{
                            ...styles.iconArrow,
                            tintColor: priceColor,
                            transform: item.price_change_percentage_7d_in_currency > 0 ? [{rotate: '45deg'}] : [{rotate: '125deg'}],
                            }} />
                        }
                        <Text
                        style={{
                            ...styles.price_change_percentage,
                            color: priceColor,
                            }}>{item.price_change_percentage_7d_in_currency.toFixed(2)}%</Text>
                    </View>
                </View>
                {/* Holdings */}
                <View
                  style={styles.holdings}>
                    <Text
                      style={styles.holdingsTotal}>$ {item.total.toLocaleString()}</Text>
                    <Text
                      style={styles.qtySymbolText}>{item.qty} {item.symbol.toUpperCase()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <MainLayout>
            <View
              style={styles.container}>
                {/* Header - Current Balance */}
                {renderCurrentBalanceSection()}

                {/* Chart */}
                <Chart
                  chartPrices={selectedCoin ? selectedCoin?.sparkline_in_7d?.value : myHoldings[0]?.sparkline_in_7d?.value}
                  containerStyle={styles.containerStyleChart} />
                {/* Your Assets */}
                <FlatList
                  data={myHoldings}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.contentContainerStyle}
                  ListHeaderComponent={ListHeaderComponent}
                  renderItem={renderItem} />
            </View>
        </MainLayout>
    )
}

export default Portfolio;