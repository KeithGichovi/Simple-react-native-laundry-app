import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter, Link } from "expo-router";
import React, { useState } from "react";
import GoogleModal from "@/components/LogInPage/GoogleModal";

export default function Index() {

  const textinputcolor : string = useThemeColor({ 'dark': Colors.dark.text, 'light': Colors.light.text, }, "text");
  const textbuttoncolor : string = useThemeColor({ 'dark': 'black', 'light': Colors.light.text, }, "text");
  const buttonbackground : string = useThemeColor({ 'dark': Colors.dark.buttonBackground, 'light': Colors.light.buttonBackground, }, "background");
  const hintText : string = useThemeColor({ 'dark' : Colors.dark.tint, 'light': Colors.light.tint }, 'text');

  const [modalVisible , setModalVisible] = useState(false);
  const navigation = useRouter();


  return (
    
    <ThemedView style={styles.container}>

      <ThemedText type="title">
        Sign in to your Account
      </ThemedText>

      <ThemedText type="hint" style={styles.hint}>
        Enter your email and password to sign in to your account
      </ThemedText>

      <ThemedText type="default" style={styles.label}>
        Email
      </ThemedText>

      <TextInput
        style={[styles.input, { color: textinputcolor }]}
        focusable={true}
        placeholder="hello@example.com"
        autoFocus={false}
        textAlign="left"
      />

      <ThemedText type="default" style={styles.label}>
        Password
      </ThemedText>

      <TextInput
        style={[styles.input, { color: textinputcolor }]}
        focusable={true}
        placeholder="Password"
        textAlign="left"
        secureTextEntry={true}
        autoFocus={false}
      />

      <View style={styles.forgotPassword}>
        <ThemedText type="link" onPress={()=> { console.log('forgot button clicked') }} style={{ color: hintText }}>Forgot Password ?</ThemedText>
      </View>

      <TouchableOpacity style={[styles.button, { backgroundColor: buttonbackground}]} onPress={() => { console.log('Sign-in clicked')}}>
        <ThemedText type="default" style={[styles.buttonText, { color: textbuttoncolor}]}>Sign in</ThemedText>
      </TouchableOpacity>

      <View style={styles.or}>
        <View style={[styles.line, { marginRight: 10 }]}/>
        <ThemedText type="hint">OR</ThemedText>
        <View style={[styles.line, { marginLeft: 10 }]}/>
      </View>

      <TouchableOpacity style={[styles.button, { flexDirection: 'row', backgroundColor: buttonbackground }]} onPress={() => {setModalVisible(true)}}>
        <AntDesign name="google" size={24} color={textbuttoncolor} style={{ paddingHorizontal: 10 }} />
        <ThemedText type="default" style={[styles.buttonText, { color: textbuttoncolor}]}>Sign in with Google</ThemedText>
      </TouchableOpacity>

      <ThemedText type="hint" style={[styles.hint, styles.bottomlink]}>
        Don't have an account? <ThemedText type="link" style={{ color: hintText }} onPress={() => navigation.push('/register')}>Sign Up</ThemedText>
      </ThemedText>

      <GoogleModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'flex-start',
    padding: 20,
  },
  hint: {
    marginTop: 15,
  },
  label: {
    marginTop: 15,

  },
  input: {
    marginTop: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    borderRadius: 8,
    fontSize: 18,

  },
  forgotPassword: {
    marginTop: 15,
    alignSelf: 'flex-end',
  },  
  button: {
    marginTop: 18,
    padding: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  or: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line:{
    height: 0.8,
    backgroundColor: '#ccc',
    flex: 1,
    alignSelf: 'center',
  },
  bottomlink:{
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 0,
    marginTop: 20,
  }
});
