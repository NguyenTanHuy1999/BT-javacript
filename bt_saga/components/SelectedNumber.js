import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View
}
    from 'react-native';
import {connect}from 'react-redux';
class SelectedNumber extends Component {
    render() {
        const { data } = this.props
        let values= data.filter(item => item.isSelected == 1).map(item=> item.label);
        return (
            <View style={styles.selectContainer}>
                <Text style={{fontSize:20}}>Selected number: {values.toString()}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    selectContainer: {
        height:100,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'black'
    }
});

export default connect(
    state => state
)(SelectedNumber)