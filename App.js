import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: "#dba119" },
      sceneContainerStyle: { backgroundColor: "#dbc082" },
      drawerContentStyle: {backgroundColor: "#dbc082"},
      drawerActiveBackgroundColor: "#dba119" 
    }}>
      <Drawer.Screen
        name="AllCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => {
            return <Ionicons name="list" color={color} size={size}/>
          }
        }}
      />
      <Drawer.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({color, size}) => {
            return <Ionicons name="heart" color={color} size={size}/>
          }
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#dba119" },
            contentStyle: { backgroundColor: "#dbc082" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              headerShown:false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
