import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

//Components
import { BalanceInfo, Chart, IconTextButton, MainLayout } from '../../components';

//Styles
import { COLORS, dummyData, icons, SIZES } from '../../constants';
import styles from './styles';

//State Managments
import { getCoinMarket, getHoldings } from '../../redux/actions/marketAction';

const Home = () => {

    const dispatch = useDispatch();

    const { myHoldings, coins, error } = useSelector(state => state.marketReducer);
    const [selectedCoin, setSelectedCoin] = React.useState(null);

    useFocusEffect(
        React.useCallback(() =>
        {
            dispatch(getHoldings(holdings= dummyData.holdings));
            dispatch(getCoinMarket())
        }, [])
    );

    let totalWallet = myHoldings.reduce((a, b) => a + (b.total || 0), 0);
    let valueChange = myHoldings.reduce((a, b) => a + (b.holding_value_change_7d || 0), 0);
    let percChange = valueChange / (totalWallet - valueChange ) * 100;
    
    const renderWalletInfoSetion = () =>
    {
        return (
            <View
              style={styles.walletInfoSetionContainer}>
                <BalanceInfo
                  title="Your Wallet"
                  displayAmount={totalWallet.toLocaleString('en-IN')}
                  changePct={percChange}
                  containerStyle={{
                      marginTop: 50
                  }} />
                <View
                  style={styles.buttonContainer}>
                    <IconTextButton
                      label="Transfer"
                      icon={icons.send}
                      containerStyle={{
                        ...styles.button,
                        marginRight: SIZES.radius,
                    }}
                      onPress={() => console.log('Transfer')} />
                    <IconTextButton
                      label="Withdraw"
                      icon={icons.withdraw}
                      containerStyle={styles.button}
                      onPress={() => console.log('Transfer')} />

                </View>
            </View>
        )
    }
    const ListHeaderComponent = () =>
    {
      return (
        <View
          style={styles.innerListHeaderComponent}>
          <Text
            style={styles.titleFlatlist}>Top Cryptocurrency</Text>
        </View>
      )
    }
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
          style={styles.renderItemButton}
          onPress={() => setSelectedCoin(item)}>
            {/* Logo */}
            <View
              style={{width: 35}}>
                <Image
                  source={{uri: item.image}}
                  style={styles.iconCrypto} />
            </View>
            {/* Name */}
            <View
              style={{flex: 1}}>
                <Text
                  style={styles.renderItemName}>{item.name}</Text>
            </View>
            {/* Figures */}
            <View>
                <Text
                  style={styles.current_price}>${item.current_price}</Text>
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
        </TouchableOpacity>
      )
    }
    return (
        <MainLayout>
            <View
              style={styles.container}>
                {/* Header - Wallet Info */}
                {renderWalletInfoSetion()}
                {/* Charts */}
                <Chart
                  containerStyle={{
                      marginTop: SIZES.padding * 2
                  }}
                  chartPrices={selectedCoin ? selectedCoin?.sparkline_in_7d?.price : coins[0]?.sparkline_in_7d?.price} />
                <FlatList
                  data={coins}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={styles.contentContainerStyle}
                  ListHeaderComponent={ListHeaderComponent()}
                  renderItem={renderItem} />
            </View>
        </MainLayout>
    )
}

export default Home;