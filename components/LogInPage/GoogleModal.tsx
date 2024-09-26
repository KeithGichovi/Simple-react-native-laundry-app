import React from "react";
import { Modal, TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "../ThemedView";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Colors } from "@/constants/Colors";
import AntDesign from '@expo/vector-icons/AntDesign';


// @ts-ignore
const GoogleModal = ({ modalVisible, setModalVisible }) => {
    
    const backgroundColor : string = useThemeColor({ 'dark': Colors.dark.buttonBackground, 'light': Colors.light.buttonBackground, }, "background");

    const handleClose = () => { 
        setModalVisible(!modalVisible);
    };
 

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleClose}
        >
            <ThemedView style={[styles.modalContainer, { backgroundColor: backgroundColor}]}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <ThemedText type="title" style={styles.modaltitle}>
                        Google Sign In
                    </ThemedText>
                    <TouchableOpacity onPress={handleClose} style={styles.modalexitbutton}>
                        <AntDesign name="close" size={30} color="black" />
                    </TouchableOpacity>   
                </View>
                
                <View style={styles.content}>
                    <Text>
                        Placeholder text for Google Sign In, this will be replaced with the Auth0 functionality.
                    </Text>
                </View>
                
            </ThemedView>
        </Modal>
    )

};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '70%',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        borderColor: 'black',
    },
    modalButton: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modaltitle:{
        fontSize: 30,
        marginTop: 10,
        marginRight: 10,
        color: 'black',
        alignSelf: 'flex-start'
    },
    modalexitbutton: {
        position: 'absolute',
        right: 0,
        top: 0,
        padding: 10,
    },
    content: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default GoogleModal;