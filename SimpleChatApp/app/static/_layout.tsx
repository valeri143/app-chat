import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/app/shared/components/navigation/tab-bar-icon.component';
import { Colors } from '@/app/shared/constants/colors.constant';
import { useColorScheme } from '@/app/shared/hooks/use-color-scheme.hook';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Chat',
          tabBarItemStyle: { display: 'none' },
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
