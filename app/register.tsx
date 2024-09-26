import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useThemeColor } from "@/hooks/useThemeColor";
import { View, Text, TextInput, TouchableOpacity , StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import GoogleModal from "@/components/LogInPage/GoogleModal";
import { useRouter } from "expo-router";


const register = () => {

    const textinputcolor : string = useThemeColor({ 'dark': Colors.dark.text, 'light': Colors.light.text, }, "text");
    const textbuttoncolor : string = useThemeColor({ 'dark': 'black', 'light': Colors.light.text, }, "text");
    const buttonbackground : string = useThemeColor({ 'dark': Colors.dark.buttonBackground, 'light': Colors.light.buttonBackground, }, "background");
    const hintText : string = useThemeColor({ 'dark' : Colors.dark.tint, 'light': Colors.light.tint }, 'text');

    const [modalVisible , setModalVisible] = useState(false);

    const navigation = useRouter();


    return (
        <ThemedView style={styles.container}>

            {/* <TouchableOpacity style={styles.arrow} onPress={() => { navigation.navigate('/')}}>
                <AntDesign name="arrowleft" size={24} color={hintText} />
            </TouchableOpacity> */}

            <ThemedText type="title">
                Sign Up
            </ThemedText>

            <ThemedText type="hint" style={styles.hint}>
               Already have an account? <ThemedText type="hint" style={{ color: hintText }} onPress={() => { navigation.push('/')}}>Sign in</ThemedText>
            </ThemedText>

            <ThemedText type="default" style={styles.label}>
                Full name
            </ThemedText>

            <TextInput
                style={[styles.input, { color: textinputcolor }]}
                focusable={true}
                placeholder="John Smith"
                autoFocus={false}
                textAlign="left"
            />

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
                Phone Number
            </ThemedText>

            <TextInput
                style={[styles.input, { color: textinputcolor }]}
                focusable={true}
                placeholder="123456789"
                autoFocus={false}
                textAlign="left"
                keyboardType={'phone-pad'}
            />

            <ThemedText type="default" style={styles.label}>
                Password
            </ThemedText>

            <TextInput
                style={[styles.input, { color: textinputcolor }]}
                focusable={true}
                placeholder="Password"
                autoFocus={false}
                textAlign="left"
                secureTextEntry={true}
            />

            <TouchableOpacity style={[styles.button, { backgroundColor: buttonbackground}]} onPress={() => { console.log('Sign-in clicked')}}>
                <ThemedText type="default" style={[styles.buttonText, { color: textbuttoncolor}]}>Sign Up</ThemedText>
            </TouchableOpacity>

            <View style={styles.or}>
                <View style={[styles.line, { marginRight: 10 }]}/>
                <ThemedText type="hint">OR</ThemedText>
                <View style={[styles.line, { marginLeft: 10 }]}/>
            </View>

            <TouchableOpacity style={[styles.button, { flexDirection: 'row', backgroundColor: buttonbackground }]} onPress={() => {setModalVisible(true)}}>
                <AntDesign name="google" size={24} color={textbuttoncolor} style={{ paddingHorizontal: 10 }} />
                <ThemedText type="default" style={[styles.buttonText, { color: textbuttoncolor}]}>Sign Up with Google</ThemedText>
            </TouchableOpacity>

            <GoogleModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        top: 0,
        
    },
    arrow: {
        top: 0,
        left: 0,
        alignSelf: 'baseline',
        marginBottom: 70,
    },
    hint: {
        marginTop: 12,
    },
    label: {
        marginTop: 12,
    },
    input: {
        marginTop: 8,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '100%',
        padding: 10,
        borderRadius: 8,
        fontSize: 18,
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
});

export default register;