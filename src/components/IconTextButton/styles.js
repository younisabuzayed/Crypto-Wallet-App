import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    button:
    {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
    },
    icon:
    {
        height: 20,
        width: 20,
    },
    label:
    {
        marginLeft: SIZES.base,
        ...FONTS.h3,
    }
});

export default styles;