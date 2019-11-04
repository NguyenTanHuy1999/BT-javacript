import React, { Component } from 'react'
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import AllReducer from './Reducer/AllReducer';
import Container from './Component/Container';

//Store

const store = createStore(AllReducer);

export default class ReduxProject extends Component {
    render() {
        return (
            <Provider store={store}>
                <Container/>
            </Provider>
        )
    }
}


