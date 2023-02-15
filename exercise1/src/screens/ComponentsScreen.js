import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hello to you!</Text>;
    const name = "Daniel";

    return <View>
            <Text style ={styles.textStyle}>This is the components screen</Text>
            {greeting}
            <Text style ={styles.textStyle2}>Getting started with React Native!</Text>
            <Text style = {styles.textStyle3}>My name is {name}</Text>
        </View>
    
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize:30
    },
    textStyle3:{
        fontSize: 20
    }
});


export default ComponentsScreen;