import { 
    View,
    Text,
    Animated
 } from 'react-native'
import React from 'react'
import styles from './styles'
import { SIZES } from '../../constants'

const TabIndicator = ({ data ,measureLayout, scrollX}) => {

    const inputRange = data.map((item, i) =>  i * SIZES.width)
    const translateX = scrollX.interpolate({
        inputRange,
        outputRange: measureLayout.map(measure => measure.x),
    })
    return (
        <Animated.View
            style={{
                ...styles.container,
                transform: [{
                    translateX,
                }]
            }} />
    )
}

export default TabIndicator