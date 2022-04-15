import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {

    },
    title:
    {
        color: COLORS.lightGray3,
        ...FONTS.h3
    },
    figuresContainer:
    {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    currencyType:
    {
        color: COLORS.lightGray3,
        ...FONTS.h3
    },
    displayAmountText:
    {
        color: COLORS.white,
        ...FONTS.h2,
        marginLeft: SIZES.base,
    },
    icons:
    {
        width: 10,
        height: 10,
        alignSelf: 'center',
    },
    changePct:
    {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    changePctText:
    {
        marginLeft: SIZES.base,
        alignSelf: 'flex-end',
        ...FONTS.h4,
    },
    dayChangeText:
    {
        marginLeft: SIZES.radius,
        alignSelf: 'flex-end',
        color: COLORS.lightGray3,
        ...FONTS.h5
    }
});

export default styles;