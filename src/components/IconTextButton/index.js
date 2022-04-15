import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const IconTextButton = ({label, icon, containerStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button,{
        ...containerStyle,
      }]}
      onPress={onPress}>
        <Image
          source={icon}
          style={styles.icon}
          resizeMode='contain' /> 
        <Text
          style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

export default IconTextButton