import React from "react";
import {
    TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens";
import { COLORS, icons } from "../constants";
import { TabIcon, TabBarCustomButton } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setTradeModalVisibility } from "../redux/actions/tabAction";


const Tab = createBottomTabNavigator()

const Tabs = () => {

    const dispatch = useDispatch();
    const { isTradeModalVisible } = useSelector(state => state.tabReducer )
    console.log(isTradeModalVisible);
    const onPressVisibile = () =>
    {
        dispatch(setTradeModalVisibility(!isTradeModalVisible))
    }
    return (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 140,
                backgroundColor: COLORS.primary,
                borderTopColor: "transparent",
            }
            }} >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({focused}) =>
                {
                    if (!isTradeModalVisible)
                    return (
                        <TabIcon
                          focused={focused}
                          icon={icons.home}
                          label="Home" />
                    )
                },
                }} 
              listeners={{
                  tabPress: e => {
                    if (isTradeModalVisible)
                    e.preventDefault()
                }
              }}/>
            <Tab.Screen
              name="Portfolio"
              component={Portfolio}
              options={{
                tabBarIcon: ({focused}) =>
                {
                    if (!isTradeModalVisible)
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.briefcase}
                            label="Portfolio" />
                    )
                }
              }}
              listeners={{
                tabPress: e => {
                    if (isTradeModalVisible)
                    e.preventDefault()
                }
              }} />
            <Tab.Screen
              name="Trade"
              component={Home}
              options={{
                tabBarIcon: ({focused}) =>
                {
                    return (
                        <TabIcon
                            focused={focused}
                            icon={isTradeModalVisible ? icons.close : icons.trade}
                            iconStyle={ isTradeModalVisible ? {
                                height: 15,
                                width: 15,
                            } : null}
                            label="Trade"
                            isTrade={true} />
                    )
                },
                tabBarButton: (props) =>
                {
                    return (
                        <TabBarCustomButton
                          {...props}
                          onPress={onPressVisibile} />
                    )
                }
            }} />
            <Tab.Screen
              name="Market"
              component={Market}
              options={{
                tabBarIcon: ({focused}) =>
                {
                    if (!isTradeModalVisible)
                    {
                        return (
                            <TabIcon
                                focused={focused}
                                icon={icons.market}
                                label="Market" />
                        )
                    }
                }
              }}
              listeners={{
                tabPress: e => {
                    if (isTradeModalVisible)
                    e.preventDefault()
                }
              }} />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({focused}) =>
                {
                    if (!isTradeModalVisible)
                    return (
                        <TabIcon
                            focused={focused}
                            icon={icons.profile}
                            label="Profile" />
                    )
                }
              }}
              listeners={{
                tabPress: e => {
                    if (isTradeModalVisible)
                    e.preventDefault()
                }
              }} />
        </Tab.Navigator>
    )
}

export default Tabs;