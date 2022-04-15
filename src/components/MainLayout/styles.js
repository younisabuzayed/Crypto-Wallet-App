import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    modal:
    {
        position: 'absolute',
        left: 0,
        width: '100%',
        padding: SIZES.padding,
        backgroundColor: COLORS.primary,
    },
    dimBackground:
    {
        position: 'absolute',
        backgroundColor: COLORS.transparentBlack,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});

export default styles;