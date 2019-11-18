import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
}
    from 'react-native';
import { connect } from 'react-redux';
class TaskFlatList extends Component {
    renderItem = ({ item, index }) => {
        const { onSelected } = this.props;
        let clickColor = "white";
        if (item.isSelected == 1) {
            clickColor = "red"
        }
        return (
            <TouchableOpacity style={[styles.item, { backgroundColor: clickColor }]} onPress={() => onSelected(index)}>
                <Text style={styles.name}>{item.label}</Text>
            </TouchableOpacity>
        );
    }
    render() {
        const { data } = this.props.listData;
        return (
            <FlatList style={styles.styleFlatList}
                data={data}
                extraData={this.props}
                horizontal={false}
                numColumns={4}
                keyExtractor={(item) => `${item.id}`}
                renderItem={this.renderItem}
            />
        );
    }
}
const styles = StyleSheet.create({
    item: {
        borderWidth: 2,
        padding: 10,
    },
    styleFlatList: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 20
    },
    item: {
        borderWidth: 5,
        padding: 10,
        borderRadius: 30,
        marginVertical: 10,
        marginHorizontal: 10,
        width: 60,
        height: 60,
        alignItems: "center",
    },
    name: {
        fontSize: 20
    }
});

//Action
const selectedTask=(index)=>{
    return{
        type:'SELECT',
        atIndex:index
    }
}

export default connect(
    state => {
        return {
            listData: state
        }
    },
    dispatch=>{
        return{
            onSelected:(index)=>dispatch(selectedTask(index))
        }
    }
)(TaskFlatList);