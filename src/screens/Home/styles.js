import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    // Header - Wallet Info
    walletInfoSetionContainer:
    {
        paddingHorizontal: SIZES.padding,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.gray,
    },
    //Button Container
    buttonContainer:
    {
        flexDirection: 'row',
        marginBottom: -15,
        marginTop: 30,
        paddingHorizontal: SIZES.radius,
    },
    button:
    {
        flex: 1,
        height: 40,
    },
    // Top Coins
    contentContainerStyle:
    {
        marginTop: 30,
        paddingHorizontal: SIZES.padding,
        paddingBottom: 50
    },
    innerListHeaderComponent:
    {
        marginBottom: SIZES.radius,
    },
    titleFlatlist:
    {
        color: COLORS.white,
        ...FONTS.h3,
        fontSize: 18,
    },
    //Render Item
    renderItemButton:
    {
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCrypto:
    {
        width: 20,
        height: 20,
    },
    renderItemName:
    {
        color: COLORS.white,
        ...FONTS.h3,
    },
    current_price:
    {
        color: COLORS.white,
        ...FONTS.h4,
        textAlign: 'right',
    },
    price_change_container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    iconArrow:
    {
        height: 10,
        width: 10,
    },
    price_change_percentage:
    {
        marginLeft: 5,
        ...FONTS.body5,
        lineHeight: 15,
    }
});

export default styles;