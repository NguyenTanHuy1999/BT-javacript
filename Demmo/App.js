import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TextInput,
    TouchableOpacity,
    Alert
}
    from 'react-native';
import { tsThisType } from '@babel/types';
const FlatListDeMo = [
    {
        key: 1,
        Value: 1,
    },
    {
        key: 2,
        Value: 10,
    },
    {
        key: 3,
        Value: 4,
    },
    {
        key: 4,
        Value: 4,
    },
    {
        key: 5,
        Value: 5,
    },
];
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        }

        this.onPress = this.onPress.bind(this)
    }
    onOpen() {
        this.setState({ activeRowKey: this.props.item.key });
    }

    onPress() {
        Alert.alert(
            'Alert',
            'Are you sure want to delete ?',
            [
                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                {
                    text: 'Yes', onPress: () => {
                        const { onDelete } = this.props;
                        onDelete && onDelete();
                    }
                },
            ],
        );
    }
    render() {
        return (
            <View style={styles.item}>
                <Text style={styles.name}>{this.props.value}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.buttonGreen} onPress={this.props.onAdd}></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonBlue} onPress={this.props.onAddItem}></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRed} onPress={this.onPress} ></TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '1',
            data: [...FlatListDeMo],
            deletedRowKey: null,
        };
    }
    onDeleteItem = (itemIndex) => {
        this.setState((prevState) => {
            const { data } = prevState;
            data.splice(itemIndex, 1);
            return {
                data: [...data]
            };
        })
    }
    onAdd = (index, step) => {
        const newData=[...this.state.data]
        newData[index].Value+=step;
        this.setState({newData});
    }
    onAddItem = (prevIndex) => {
        this.setState((prevState) => {
            const { data } = prevState;
            const builtKey = data.length + 1;
            const newData = [...data];
            newData.splice(prevIndex + 1, 0, { 
                key: builtKey,
                Value: 0
            });
            return {
                data: newData
            }
        })
    }

    render() {
        const { data } = this.state;
        let toTol = 0;
        data.forEach((item) => {
            toTol += item.Value;
        })
        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <View style={styles.styleHeader1}>
                        <Image resizeMode='contain' style={{ width: 100, height: 98, borderWidth: 1 }} source={require('./imgs/ppp.jpg')} />
                        <View>
                            <Text style={styles.textHeader1}>Họ và Tên:</Text>
                            <Text style={styles.textHeader1}>MSSV:</Text>
                        </View>
                    </View>
                    <View style={styles.styleHeader2}>
                        <TextInput style={styles.textInput} onChangeText={(text) => this.setState({ text })}
                            value={this.state.text} />
                        <Text style={{ fontSize: 30 }}>Total: {toTol} </Text>
                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    <FlatList style={styles.styleFlatList}
                        data={data}
                        keyExtractor={(item) => `${item.key}`}
                        renderItem={({ item, index }) => (
                            <Item
                                value={item.Value}
                                onDelete={() => this.onDeleteItem(index)}
                                onAdd={() => this.onAdd(index, Number(this.state.text))}
                                onAddItem={() => this.onAddItem(index)}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 20,
    },
    header: {
        height: 200,
        flexDirection: "column"
    },
    styleHeader1: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    styleHeader2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textHeader1: {
        fontSize: 25,
        marginLeft: 20
    },
    styleFlatList: {
        flex: 1,
        borderWidth: 1
    },
    item: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center"
    },
    name: {
        fontSize: 32
    },
    buttonGreen: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "green",
        marginRight: 5,
        marginLeft: 5
    },
    buttonBlue: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "blue",
        marginRight: 5,
        marginLeft: 5
    },
    buttonRed: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "red",
        marginRight: 5,
        marginLeft: 5
    },
    textInput: {
        width: 150,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 30
    }
});