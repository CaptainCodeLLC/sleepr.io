import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
        placeholder = "Wake up time"
        style = {{height:50, alignItems:'center', width:100}}
        >
        </TextInput>
        <Text style={styles.text}>Eddy cant hang</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69447F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#2FB5A2',
    fontSize: 16
  },
});
