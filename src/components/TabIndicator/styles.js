import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        position: 'absolute',
        left: 0,
        height: '100%',
        width: (SIZES.width - (SIZES.radius * 2)) / 2,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray
    }
});

export default styles;