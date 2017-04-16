/**
 * Created by taranjeetsingh on 16/04/17.
 */
import React,{ Component } from 'react';
import { AsyncStorage,TouchableOpacity,View,Text,Image } from 'react-native';
import { Scene,Router } from 'react-native-router-flux';
import Test from './components/test';

class RouterComponent extends Component{
    render() {
        return (
            <Router>
                <Scene key ="main">
                    <Scene key="first" hideNavBar="false" component={Test} initial></Scene>
                </Scene>
            </Router>
        );
    }
}
//export default connect(mapStateToProps,{ getData,startVisitSync,startOrderSync,fetchVisitors,networkChange })(RouterComponent);
export default RouterComponent;