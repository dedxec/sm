/**
 * Created by taranjeetsingh on 16/04/17.
 */
import React,{ Component } from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import RouterComponent from './Router';
import ReduxThunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

class App extends Component{
    //provider can have only one provider
    render(){
        return (
            <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
                <RouterComponent />
            </Provider>
        )
    }
};
export default App;