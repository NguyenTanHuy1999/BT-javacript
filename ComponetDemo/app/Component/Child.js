
import React, { Component } from 'react'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput
} from 'react-native';


export default class Child extends Component {
    render() {
        return (
            <View style={styles.component}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.buttonBlue} onPress={this.props.onAddInside}></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRed} onPress={this.props.onAddAboard}></TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 25 }}>{this.props.value}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create(
    {
        component:
        {
            width: 200,
            height: 200,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }, 
        buttonBlue: {
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: "blue",
            marginRight: 5,
            marginLeft: 5
        },
        buttonRed: {
            width: 70,
            height: 70,
            borderRadius: 100,
            backgroundColor: "red",
            marginRight: 5,
            marginLeft: 5
        }
    }
)