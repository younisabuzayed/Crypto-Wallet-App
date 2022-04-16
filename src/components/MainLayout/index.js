import { View, Text, Animated } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import IconTextButton from '../IconTextButton';
import styles from './styles';
import { icons, SIZES } from '../../constants';

const MainLayout = ({children}) => {

  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const { isTradeModalVisible } = useSelector(state => state.tabReducer );
  // console.log(isTradeModalVisible);

  React.useEffect(() =>
  {
    if(isTradeModalVisible)
    {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
    else
    {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isTradeModalVisible]);
  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 280]
  })
  return (
    <View
      style={{ flex: 1,}}>
        {children}
        {/* Dim Background */}
        {isTradeModalVisible &&
          <Animated.View
            style={styles.dimBackground}
            opacity={modalAnimatedValue} />}
        {/* Modal */}
        <Animated.View
          style={{
            ...styles.modal,
            top: modalY,
            }}>
            <IconTextButton
              label="Transfer"
              icon={icons.send}
              onPress={() => console.log('Transfer')}/>
            <IconTextButton
              label="Withdraw"
              icon={icons.withdraw}
              onPress={() => console.log('Withdraw')}
              containerStyle={{marginTop: SIZES.base}}/>

        </Animated.View>
    </View>
  )
}

export default MainLayout