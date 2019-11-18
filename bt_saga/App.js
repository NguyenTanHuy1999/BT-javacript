import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
}
    from 'react-native';
import TaskFlatList from './components/TaskFlatList';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga/DataSaga';
const sagaMiddleware = createSagaMiddleware();
import SelectedNumber from './components/SelectedNumber';

//Reducer
const taskListReducer=(state={data:[]},action)=>{
    let newTaskList=state.data;
    switch(action.type){
        case 'SELECT':
            {
                if(newTaskList[action.atIndex].isSelected=!newTaskList[action.atIndex].isSelected){
                    newTaskList[action.atIndex].isSelected=1;
                    return {...state,data:[...newTaskList]};
                }
                else
                {
                    newTaskList[action.atIndex].isSelected=0;
                    return {...state,data:[...newTaskList]};
                }
            }
        case "FETCH_SUCCEEDED":
                let newdata = action.receivedData;
                return { ...state, data: newdata };
        case "FETCH_FAILED":
                return state;
    }
    return state;
}

//Store

const store =createStore(taskListReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TaskFlatList />
                </View>
                <View style={styles.footer}>
                  <SelectedNumber/>
                </View>
            </View>
            </Provider>          
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin:20
    },     
    header:{
        flex: 2
    },
    footer:{
        flex:0.5,
        marginTop:20,
        borderWidth:2,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    }

});