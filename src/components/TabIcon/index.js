import React from 'react';
import { View, Text, Image } from 'react-native';
import { COLORS, FONTS } from '../../constants';
import styles from './styles';

const TabIcon = ({
  focused, icon, iconStyle,
  label, isTrade,
}) => {
  if (isTrade)
  {
    return (
      <View
        style={styles.containerIsTrade}>
          <Image
            source={icon}
            style={{
              ...styles.icon,
              tintColor: COLORS.white,
              ...iconStyle
              }} />
          <Text
            style={{color: COLORS.white}}>{label}</Text>
    </View>
    )
  }
  else
  {
    return(
      <View
        style={styles.container}>
          <Image
            source={icon}
            resizeMode="contain"
            style={{
              ...styles.icon,
              tintColor: focused ? COLORS.white : COLORS.secondary,
              ...iconStyle,
            }} />
          <Text
            style={{
              color: focused ? COLORS.white: COLORS.secondary ,
              ...styles.label,
              ...FONTS.h4,
              }}>
              {label}
          </Text>
    </View>
    )
  }
}

export default TabIcon