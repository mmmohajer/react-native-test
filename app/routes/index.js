import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";

import Icon from "BaseComponents/Icon";

import Home from "Screens/Home";
import Products from "Screens/Products";

import { ProductNav } from "./stackRoutes";
import { LoginRegisterNav } from "./stackRoutes";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  return (
    <>
      {isAuthenticated?.authenticated ? (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              // tabBarActiveBackgroundColor: "tomato",
              tabBarActiveTintColor: "dodgerblue",
              // tabBarInactiveBackgroundColor: "gray",
              // tabBarInactiveTintColor: "white",
              tabBarItemStyle: {
                //   borderRadius: 5,
              },
              tabBarStyle: {
                height: 95,
              },
              tabBarLabelStyle: {
                marginBottom: 10,
                marginTop: 5,
                fontSize: 12,
              },
              tabBarIconStyle: {
                marginTop: 10,
              },
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                title: "Home",
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="AddProduct"
              component={Products}
              options={{
                title: "Add Products",
                tabBarLabelStyle: { display: "none" },
                tabBarItemStyle: {
                  backgroundColor: "transparent",
                },
                tabBarIconStyle: {
                  width: 70,
                  backgroundColor: "tomato",
                  height: 95,
                  borderRadius: 95,
                  top: -10,
                },
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={50} color={"white"} />
                ),
              }}
            />
            <Tab.Screen
              name="ProductStack"
              component={ProductNav}
              options={{
                title: "Products",
                tabBarIcon: ({ size, color }) => (
                  <Icon name="email" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarItemStyle: {
                display: "none",
              },
              tabBarStyle: {
                display: "none",
              },
              tabBarLabelStyle: {
                display: "none",
              },
              tabBarIconStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          >
            <Tab.Screen name="LoginStack" component={LoginRegisterNav} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Routes;
