import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.black,
    },
    // Tab Bar
    renderTabBar:
    {
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray,
    },
    //Tabs
    tabsContainer:
    {
        flexDirection: 'row',
    },
    titleTabsContainer:
    {
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    titleTabs:
    {
        ...FONTS.h3,
        color: COLORS.white,
    },
    //render Buttons
    renderButtons:
    {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
    },
    // render List 
    renderItem:
    {
        flex: 1,
        width: SIZES.width,
    },
    renderItemCoins:
    {
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        marginBottom: SIZES.radius,
    },
    coins:
    {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon:
    {
        height: 25,
        width: 25,
    },
    name:
    {
        marginLeft: SIZES.radius,
        color: COLORS.white,
        ...FONTS.h3,
    },
    lineChart:
    {
        flex: 1,
        alignItems: 'center',
    },
    figures:
    {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    current_price:
    {
        color: COLORS.white,
        ...FONTS.h4,
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