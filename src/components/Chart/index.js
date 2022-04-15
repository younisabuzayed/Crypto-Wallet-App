import { View, Text } from 'react-native';
import React from 'react';
import moment from 'moment'
import { ChartDot, ChartPath, ChartPathProvider, ChartXLabel, ChartYLabel, monotoneCubicInterpolation } from '@rainbow-me/animated-charts';
import { COLORS, FONTS, SIZES } from '../../constants';
import styles from './styles';
const Chart = ({containerStyle, chartPrices}) => {

  let startUnixTimesTamp= moment().subtract(7, 'day').unix();
  let data = chartPrices ? chartPrices?.map((item, index) =>
  {
      return {
          x: startUnixTimesTamp +(index + 1) * 3600,
          y: item,
      }
  }): [];

  let points = monotoneCubicInterpolation({data, range:40});
  const formatUSD =(value) =>
  {
    'worklet'
    if (value === '')
    {
      return '';
    };

    return `$${Number(value).toFixed(2)}`
  }

  const formatDateTime =(value) =>
  {
    'worklet'
    if (value === '')
    {
      return '';
    };
    var selectedDate = new Date(value * 1000);
    let date =`0${selectedDate.getDate()}`.slice(-2);
    let month =`0${selectedDate.getMonth()}`.slice(-2);

    return `${date} / ${month}`


  }

  const formatNumber = (value, roundingPoint) =>
  {
    if (value > 1e9)
    {
      return `${(value / 1e9).toFixed(roundingPoint)}B`;
    }
    else if (value > 1e6)
    {
      return `${(value / 1e6).toFixed(roundingPoint)}M`;
    }
    else if (value > 1e3)
    {
      return `${(value / 1e3).toFixed(roundingPoint)}K`;
    }
    else
    {
      return value.toFixed(roundingPoint);
    }
  }
  const getYAxisLabelValues = () =>
  {
    if (chartPrices !== undefined)
    {
      let minValue = Math.min(...chartPrices);
      let maxValue = Math.max(...chartPrices);

      let midValue = (minValue + maxValue) / 2;

      heigherMidValue = (maxValue + midValue) / 2;
      lowerMidValue = (minValue + midValue ) / 2;

      const roundingPoint = 2;

      return [
        formatNumber(maxValue, roundingPoint),
        formatNumber(heigherMidValue, roundingPoint),
        formatNumber(midValue, roundingPoint),
        formatNumber(lowerMidValue, roundingPoint),
        formatNumber(minValue, roundingPoint),
      ]

    }
    else {
      return []
    }
  }
  return (
    <View
      style={{...containerStyle}}>
        <View
          style={styles.yAxisLabel}>
            {getYAxisLabelValues().map((item, index) =>
            {
              return (
                <Text
                  key={index}
                  style={styles.yAxisLabelText}>{item}</Text>
              )
            })}
        </View>
        {
            data.length > 0 &&
            <ChartPathProvider
              data={{
                points,
                smoothingStrategy: 'bezier',
              }}>
                <ChartPath
                  height={150}
                  width={SIZES.width}
                  stroke={COLORS.lightGreen}
                  strokeWidth={2} />
                <ChartDot>
                    <View
                      style={styles.chartDotInfo}>
                        <View
                          style={styles.dot}>
                            <View
                              style={styles.innerDot} />
                        </View>
                        <ChartYLabel
                          format={formatUSD}
                          style={styles.chartYLabel} />
                        <ChartXLabel
                          format={formatDateTime}
                          style={styles.chartXLabel} />
                    </View>
                </ChartDot>
                
            </ChartPathProvider>
        }
    </View>
  )
}

export default Chart;