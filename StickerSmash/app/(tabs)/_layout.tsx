import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#FF4500",
      headerStyle: {
        backgroundColor: '#1C1C1C'
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#1C1C1C',
      },
    }}
    >

      <Tabs.Screen name="index"
        options={{
          headerTitle: "Sticker Smash",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen name="+not-found"
        options={{
        }}
      />
    </Tabs>
  );
}
