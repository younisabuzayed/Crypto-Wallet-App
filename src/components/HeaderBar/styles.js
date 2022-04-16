import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    container:
    {
        height: 100,
        paddingHorizontal: SIZES.radius,
        justifyContent: 'flex-end',
    },
    title:
    {
        color: COLORS.white,
        ...FONTS.largeTitle,
    }
});

export default styles;