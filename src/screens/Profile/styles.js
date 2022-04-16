import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.black,
    },
    emailUserStatus:
    {
        flexDirection: 'row',
        marginTop: SIZES.radius,
    },
    emailID:
    {
        flex: 1,  
    },
    email:
    {
        color: COLORS.white,
        ...FONTS.h4,
    },
    userid:
    {
        color: COLORS.lightGray3,
        ...FONTS.body4,
    },
    statusContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconVerified:
    {
        height: 25,
        width: 25,
    },
    textVerified:
    {
        color: COLORS.lightGreen,
        ...FONTS.body4,
        marginLeft: SIZES.base,
    }
});

export default styles;