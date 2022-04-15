import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { COLORS, icons } from '../../constants'

const BalanceInfo = ({title, displayAmount, changePct, containerStyle}) => {
  return (
    <View
      style={{
          ...styles.container,
          ...containerStyle}}>
        <Text
          style={styles.title}>{title}</Text>
        <View
          style={styles.figuresContainer}>
            <Text
              style={styles.currencyType}>$</Text>
            <Text
              style={styles.displayAmountText}>{displayAmount.toLocaleString()}</Text>
            <Text
              style={styles.currencyType}>USD</Text>
        </View>
        <View
          style={styles.changePct}>
            {
                changePct != 0 &&
                <Image
                  source={icons.upArrow}
                  style={{
                    ...styles.icons,
                    tintColor: (changePct > 0) 
                     ? COLORS.lightGreen
                     : COLORS.red,
                    transform: (changePct > 0) 
                     ? [{rotate: '45deg'}]
                     : [{rotate: '125deg'}],
                }} />
            }
            <Text
              style={{
                ...styles.changePctText,
                color: 
                  (changePct === 0 )
                    ? COLORS.lightGray3
                    : (changePct > 0) 
                    ? COLORS.lightGreen
                    : COLORS.red
                }}>{changePct.toFixed(2)}%</Text>
            <Text
              style={styles.dayChangeText}>7d change</Text>
        </View>
    </View>
  )
}

export default BalanceInfo