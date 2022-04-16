import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const TextButton = ({label, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
          ...styles.container,
          ...containerStyle,
        }}
      onPress={onPress}>
      <Text
        style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default TextButton