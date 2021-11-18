import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('Raj');
  const [person, setPerson] = useState({name: "Siva", age: 25})
  const [getFruit, setfruit] = useState('-');
  const [getDrink, setDrink] = useState('-');
  const [getAge, setAge] = useState('-');

  const clickHandler = () =>{
    setName("Rajkumar");
    setPerson({name: "Mani", age: 24})
  }

  const undoSateClickHandler = () =>{
    setName("Raj");
    setPerson({name: "Siva", age: 25})
    setfruit("-")
    setDrink("-")
    setAge("-")
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

      <Text>Enter fav fruit: {getFruit}</Text>
      <TextInput 
        style={styles.textBoxStyle}
        placeholder="e.g Apple"
        onChangeText={(value) => setfruit(value)}/>
      <Text>Enter fav drink: {getDrink}</Text>
      <TextInput 
        multiline
        style={styles.textBoxStyle}
        placeholder="e.g Milk"
        onChangeText={(value) => setDrink(value)}/>
      <Text>Enter age: {getAge}</Text>
      <TextInput 
        keyboardType="numeric"
        style={styles.textBoxStyle}
        placeholder="e.g 30"
        onChangeText={(value) => setAge(value)}/>
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
  },
  textBoxStyle:{
    borderWidth:2,
    borderColor:'FF0000',
    padding:5,
    margin:10,
    width:200
  }
});
