import React, { Component } from 'react'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput
} from 'react-native';

import AddChild1 from '../actions/AddChild1';
import AddChild2 from '../actions/Addchild2';
import AddAllItems from '../actions/AddAllItems';


import { connect } from 'react-redux';
import Child from './Child';

class Container extends Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", marginLeft: 20 }}>
                            <Text style={styles.txtHello}>Họ và Tên: </Text>
                            <Text style={styles.txtHello}>MSSV:</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                            <TouchableOpacity style={styles.buttonGreen} onPress={this.props.onAddAllItems}></TouchableOpacity>
                            <Text style={styles.textValue}>{this.props.parent}</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Child value={this.props.child1} onAddAboard={this.props.onAddChild2} onAddInside={this.props.onAddChild1}  />
                            <Child value={this.props.child2} onAddAboard={this.props.onAddChild1} onAddInside={this.props.onAddChild2}  />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        buttonGreen: {
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: "green",
            marginRight: 5,
            marginLeft: 5
        },
        container:
        {
            flex: 1,
        },
        header:
        {
            flex: 3,
            padding: 20

        },
        content:
        {
            flex: 6,
            justifyContent: 'space-between',
            alignItems: 'center'
        },

        txtHello: {
            fontSize: 25,
        },
        txtY: {
            fontSize: 30,
            borderWidth: 1,
            width: 200,
            paddingLeft: 10,
            borderRadius: 10,
        },
        img: {
            width: 130,
            height: 150

        },
        textValue: {
            fontSize: 150
        }

    }
)



const mapDispatchToProps = dispatch => {
    return {
      onAddAllItems: () => dispatch(AddAllItems),
      onAddChild1: () => dispatch(AddChild1),
      onAddChild2: () => dispatch(AddChild2),
      dispatch
    }
  }
export default connect(
    state =>  state
    , mapDispatchToProps
)(Container);