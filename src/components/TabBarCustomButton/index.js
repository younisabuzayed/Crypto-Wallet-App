import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const TabBarCustomButton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

export default TabBarCustomButton