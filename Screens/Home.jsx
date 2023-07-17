import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // <ion-icon name="arrow-up-circle-outline"></ion-icon>;
          <ion-icon name="camera-outline"></ion-icon>;
          if (route.name === "PostsScreen") {
            iconName = focused ? "arrow-up-circle-outline" : "camera-outline";
          } else if (route.name === "CreatePostsScreen") {
            iconName = focused ? "create" : "ios-information-circle-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "people" : "ios-information-circle-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [{ display: "flex" }, null],
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostScreen}
        options={{
          title: "PostsScreen",
          headerStyle: {
            backgroundColor: "#4287f5",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="logout"
              color="#414c5e"
            />
          ),
        }}
      />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
