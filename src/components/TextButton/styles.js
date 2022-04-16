import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 15,
        backgroundColor: COLORS.gray1,
    },
    label:
    {
        color: COLORS.white,
        ...FONTS.h3,
    }
});

export default styles;