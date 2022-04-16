import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    button:
    {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    title:
    {
        flex: 1,
        color: COLORS.white,
        ...FONTS.h3,
    },
    valueAndIcon:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    value:
    {
        color: COLORS.lightGray3,
        marginRight: SIZES.radius,
        ...FONTS.h3,
    },
    iconRightArrow:
    {
        width: 15,
        height: 15,
        tintColor: COLORS.white,
    }
});

export default styles;