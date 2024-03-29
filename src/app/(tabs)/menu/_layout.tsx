import { Stack } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";


export default function MenuStack () {
    const colorScheme = useColorScheme();
    return (
        <Stack screenOptions={{
            headerRight: () => (
                <Link href="/cart" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="shopping-cart"
                        size={25}
                        color={Colors.light.tint}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              ),
        }}> 
            <Stack.Screen name="index" options={{
                title: "Menu",
            }} />
            <Stack.Screen name="[id]" options={{
                title: "Product",
            }} />
            </Stack>
    )
}