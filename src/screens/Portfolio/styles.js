import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    // renderCurrentBalanceSection
    renderCurrentBalanceSection:
    {
        paddingHorizontal: SIZES.padding,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: COLORS.gray,
    },
    title:
    {
        marginTop: 50,
        color: COLORS.white,
        ...FONTS.largeTitle,
    },
    containerStyleBalanceInfo:
    {
        marginTop: SIZES.radius,
        marginBottom: SIZES.padding
    },
    // Chart
    containerStyleChart:
    {
        marginTop: SIZES.radius,
    },
    // Your Assets
    contentContainerStyle:
    {
        marginTop: SIZES.padding,
        paddingHorizontal: SIZES.padding,
    },
    sectionTitle:
    {
        color: COLORS.white,
        ...FONTS.h2,
    },
    headerLabelRow:
    {
        flexDirection: 'row',
        marginTop: SIZES.radius,
    },
    headerLabelText:
    {
        flex: 1,
        color: COLORS.lightGray3,
    },
    renderItemAssets:
    {
        flexDirection:'row',
        height: 55,
    },
    assetCoin:
    {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCoin:
    {
        width: 20,
        height: 20,
    },
    name:
    {
        color: COLORS.white,
        marginLeft: SIZES.radius,
        ...FONTS.h4,
    },
    priceContainer:
    {
        flex: 1,
        justifyContent: 'center',
    },
    current_price:
    {
        color: COLORS.white,
        ...FONTS.h4,
        textAlign: 'right',
        lineHeight: 15,
    },
    price_change_container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    iconArrow:
    {
        width: 10,
        height: 10,
        marginRight: 2
    },
    //Holdings
    holdings:
    {
        flex: 1,
        justifyContent: 'center',
    },
    holdingsTotal:
    {
        color: COLORS.white,
        ...FONTS.h4,
        textAlign: 'right',
        lineHeight: 15,
    },
    qtySymbolText:
    {
        color: COLORS.lightGray3,
        ...FONTS.body5,
        textAlign: 'right',
        lineHeight: 15,
    }
});

export default styles;