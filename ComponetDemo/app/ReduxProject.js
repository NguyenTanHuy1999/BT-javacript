import React, { Component } from 'react'
import {
    View, Text, Image, StyleSheet, TouchableOpacity, FlatList, TextInput
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AddReducer from '../app/reducer/AddReducer';
import Container from './Component/Container';

//Store

const store = createStore(AddReducer);

export default class ReduxProject extends Component {
    render() {
        console.log(store.getState());
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        )
    }
}


