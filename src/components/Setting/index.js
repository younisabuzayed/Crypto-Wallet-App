import { 
    View, 
    Text,
    TouchableOpacity,
    Image,
    Switch,
 } from 'react-native'
import React from 'react'
import styles from './styles'
import { icons } from '../../constants'

const Setting = ({ title, value, type, onPress }) => {

    if (type === 'button')
    {
        return (
            <TouchableOpacity
              style={styles.button}
              onPress={onPress}>
                <Text
                  style={styles.title}>{title}</Text>
                <View
                  style={styles.valueAndIcon}>
                    <Text
                      style={styles.value}>{value}</Text>
                    <Image
                      source={icons.rightArrow}
                      style={styles.iconRightArrow} />
                </View>
            </TouchableOpacity>
        )
    }
    if (type === 'switch')
    {
      return (
        <View
          style={styles.button}>
            <Text
              style={styles.title}>{title}</Text>
            <Switch
              value={value}
              onValueChange={(value) => onPress(value)} />
        </View>
      )
    }
    else
    {
        return null
    }
}

export default Setting