import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const StrayAnimal = () => {
const navigation = useNavigation()

  return (
    <View style = {styles.container}>
         <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate("Dashboard")}>
          <AntDesign style={styles.icon} name="left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <Text>StrayAnimalScreen</Text>
    </View>
  );
};

export default StrayAnimal;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: StatusBar.currentHeight

    
},
});