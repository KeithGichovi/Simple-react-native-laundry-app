import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";



export default function RootLayout() {

  const backgroundColor = useThemeColor({ 'dark': Colors.dark.background, 'light': Colors.light.background, }, "background");
  const textColor = useThemeColor({ 'dark': Colors.dark.text, 'light': Colors.light.text, }, "text");


  return (
    <Stack 
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="register"/>
    </Stack>
  );
}
