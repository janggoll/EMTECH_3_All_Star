import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const clearText = useRef();

  function handleLogin(){
const username = enteredGoalText;
const Password = enteredGoalText;


  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoalText.trim() === '') {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { id: Math.random().toString(), value: enteredGoalText },
    ]);
    clearText.current.clear();
  }

  function removeGoalHandler(goalId) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.id !== goalId)
    );
  }

  return (
    <ImageBackground
      source={require('./assets/Manggahan.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Barangay</Text>
          <Text style={styles.headerText}>Manggahan</Text>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder='Enter Username'
            style={styles.textInput}
            onChangeText={goalInputHandler}
            ref={clearText}
          />
           <Text style={styles.label}>Password</Text>
  <TextInput
    placeholder='Enter Password'
    style={styles.textInput}
    onChangeText={goalInputHandler}
    ref={clearText}
    />
     <Button title='Login' onPress={handleLogin}style={styles.loginButton}/>
        </View>

        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => removeGoalHandler(itemData.item.id)}
            >
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.value}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    
  },
  loginButton: {
    marginTop: 50, 
},
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'skyblue',
    
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 5,
    paddingHorizontal: 80,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  goalItem: {
    backgroundColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    
  },
  goalText: {
    fontSize: 18,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%', // Cover the entire width of the screen
    height: '100%', // Cover the entire height of the screen
  },
});