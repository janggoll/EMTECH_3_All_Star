import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import welcome from '../assets/images/WelcomeLogo.png'

const WelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}> <Image style={styles.image} source={welcome} /></View>
            <View style={styles.formContainer}>

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("register")}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EADCC1',

    },
    imageContainer:{
    flex:2,
    alignItems:'center',
    justifyContent:'center',
    },
    image: {
        height: 400,
        width: 300,
    },
    formContainer: {
        flex: 2,
        width:'100%',
        alignItems:'center',
    },
    buttonContainer: {
        backgroundColor: 'white',
        width: '50%',
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 40,
        elevation: 500,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        

    },



});
