import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    FlatList,
    Image,
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderBar, MainLayout, TabIndicator, TextButton } from '../../components';
import { COLORS, constants, icons, SIZES } from '../../constants';
import { getCoinMarket } from '../../redux/actions/marketAction';
import styles from './styles';

const marketTabs = constants.marketTabs.map((marketTab) =>
({
    ...marketTab,
    ref: React.createRef(),
}));

const Tabs = ({ scrollX, onMarketTabOnPress }) =>
{
    const [measureLayout, setMeasureLayout] = React.useState([]);
    const containerRef = React.useRef();

    React.useEffect(() =>
    {
        let ml = [];
        marketTabs.forEach((marketTab) => {
            marketTab?.ref?.current?.measureLayout(
                containerRef.current,
                (x, y, width, height) =>
                {
                    ml.push({ x, y, width, height });

                    if (ml.length === marketTabs.length )
                    {
                        setMeasureLayout(ml);
                    }
                }
            )
        })
    } ,[containerRef.current])
    return (
        <View
          style={styles.tabsContainer}
          ref={containerRef}>
            {measureLayout.length > 0 && 
              <TabIndicator
                measureLayout={measureLayout}
                scrollX={scrollX}
                data={marketTabs} />
            }
            {marketTabs.map((item, index) =>
            {
                return(
                    <TouchableOpacity
                      key={`MarketTab-${index}`}
                      style={{ flex: 1 }}
                      onPress={() => onMarketTabOnPress(index)}>
                        <View
                          ref={item.ref}
                          style={styles.titleTabsContainer}>
                            <Text
                              style={styles.titleTabs}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
const Market = () => {

    const disptach = useDispatch();
    const { coins } = useSelector(state => state.marketReducer);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const marketTabScrollViewRef = React.useRef();

    const onMarketTabOnPress = React.useCallback((marketTanIndex)=>{
        marketTabScrollViewRef?.current?.scrollToOffset({
            offset: marketTanIndex * SIZES.width
        })
    })
    React.useEffect(() =>
    {
        disptach(getCoinMarket())
    },[]);

    const renderTabBar = () =>
    {
        return (
            <View
              style={styles.renderTabBar}>
                <Tabs
                  scrollX={scrollX}
                  onMarketTabOnPress={onMarketTabOnPress} />
            </View>
        )
    };

    const renderButtons = () =>
    {
        return (
            <View
              style={styles.renderButtons}>
                <TextButton
                  label="USD" />
                <TextButton
                  label="% (7d)"
                  containerStyle={{
                      marginLeft: SIZES.base,
                  }} />
                <TextButton
                  label="Top"
                  containerStyle={{
                      marginLeft: SIZES.base,
                  }} />

            </View>
        )
    }

    const renderList = () =>
    {
        const renderItem= ({item, index}) =>
        {
            renderItemCoins= ({item, index}) =>
            {
                let priceColor = 
                    (item.price_change_percentage_7d_in_currency === 0) 
                        ? COLORS.lightGray3
                        : (item.price_change_percentage_7d_in_currency > 0)
                        ? COLORS.lightGreen
                        : COLORS.red;
                return (
                    <View
                      style={styles.renderItemCoins}>
                        {/* Coins */}
                        <View
                          style={styles.coins}>
                            <Image
                              source={{uri: item.image}}
                              style={styles.icon} />
                            <Text
                              style={styles.name}>{item.name}</Text>
                        </View>
                        {/* Line Chart */}
                        <View
                          style={styles.lineChart}>
                            <LineChart
                              withVerticalLabels={false}
                              withHorizontalLabels={false}
                              withDots={false}
                              withInnerLines={false}
                              withVerticalLines={false}
                              withOuterLines={false}
                              data={{
                                  datasets:[
                                    {
                                        data: item.sparkline_in_7d.price,
                                    }
                                  ]
                              }} 
                              width={100}
                              height={60}
                              chartConfig={{
                                  color: () => priceColor
                              }}
                              bezier
                              style={{ paddingRight: 0,}} />
                        </View>
                        {/* Figures */}
                        <View
                          style={styles.figures}>
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
                    </View>
                )
            }
            return (
                <View
                  style={styles.renderItem}>
                    <FlatList
                      data={coins}
                      keyExtractor={(item) => item.id}
                      renderItem={renderItemCoins} />
                </View>
            )
        }
        return (
            <Animated.FlatList
              ref={marketTabScrollViewRef}
              data={marketTabs}
              contentContainerStyle={{
                  marginTop: SIZES.padding
              }}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              onScroll={
                  Animated.event([
                      {nativeEvent: {contentOffset: {x: scrollX}}}
                  ],{
                      useNativeDriver: false,
                  })
              }
              renderItem={renderItem} />
        )
    }
    return (
        <MainLayout>
          <View
            style={styles.container}>
              {/* Header Bar */}
              <HeaderBar
                title="Market" />
              {/* Tab Bar */}
              {renderTabBar()}
              {/* Buttons */}
              {renderButtons()}
              {/* Market List */}
              {renderList()}
          </View>
        </MainLayout>
    )
}

export default Market;