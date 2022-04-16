import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
const styles = StyleSheet.create({
    yAxisLabel:
    {
        position:'absolute',
        left: SIZES.padding,
        top: 0,
        bottom: 0,
        justifyContent: 'space-between',
    },
    yAxisLabelText:
    {
        color: COLORS.lightGray3,
        ...FONTS.body5,
    },
    chartDotInfo:
    {
        position: 'absolute',
        left: -35,
        width: 80,
        alignItems: 'center',
        backgroundColor: COLORS.transparentBlack1,
    },
    dot:
    {
        alignItems: 'center',
        justifyContent: 'center',
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: COLORS.white,
    },
    innerDot:
    {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: COLORS.lightGreen
    },
    chartYLabel:
    {
        color: COLORS.white,
        ...FONTS.body5,
    },
    chartXLabel:
    {
        marginTop: 3,
        color: COLORS.lightGray3,
        ...FONTS.body5,
        lineHeight: 15,
    }
});

export default styles;