import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        marginTop: SIZES.padding,
    },
    title:
    {
        color: COLORS.lightGray3,
        ...FONTS.h4,
    },
});

export default styles;