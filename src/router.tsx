import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import Home from "./screens/Home";
import Details from "./screens/Details";

export type AppStackParamsList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: "Home",
    component: Home,
    options: {
      title: "ALUGUE",
      headerTitleStyle: {
        fontFamily: "Montserrat_700Bold",
      },
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Feather name="shopping-bag" size={24} color="#000" />
        </TouchableOpacity>
      ),
    },
  },
  {
    name: "Details",
    component: Details,
    options: {
      title: "Detalhe",
      headerTitleStyle: {
        fontFamily: "Montserrat_700Bold",
      },
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 15 }}>
          <Feather name="shopping-bag" size={24} color="#000" />
        </TouchableOpacity>
      ),
    },
  },
];

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {routes.map((routeConfig) => (
          <Stack.Screen
            key={routeConfig.name}
            options={routeConfig.options}
            {...routeConfig}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
