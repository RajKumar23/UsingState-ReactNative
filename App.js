import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Raj');
  const [person, setPerson] = useState({name: "Siva", age: 25})

  const clickHandler = () =>{
    setName("Rajkumar");
    setPerson({name: "Mani", age: 24})
  }

  const undoSateClickHandler = () =>{
    setName("Raj");
    setPerson({name: "Siva", age: 25})
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler}></Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="undo state" onPress={undoSateClickHandler}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop:20
  }
});
