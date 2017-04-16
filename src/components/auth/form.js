/**
 * Created by taranjeetsingh on 16/04/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,TextInput,Text,Image,StyleSheet } from 'react-native';
import { authPropsChanged } from '../../actions';

class Form extends Component{

 onMobileChange(text){
 this.props.authPropsChanged({ props : 'mobile',value : text });
 }
 onPasswordChange(text){
 this.props.authPropsChanged({ props:  'password',value : text });
 }


    render() {
     const { mobile,password } = this.props;
        return (
            <View>
                <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10 }}>
                    <TextInput
                        placeholder='Enter Mobile Number'
                        underlineColorAndroid='transparent'
                        style={{ fontSize : 14,backgroundColor : '#dae2e0',height : 50,paddingLeft : 15 }}
                        placeholderTextColor="green"
                        onChangeText={ mobile => this.onMobileChange(mobile) }
                        value={ mobile }
                    />
                </View>
                <View style={{ paddingTop:10,paddingLeft:10,paddingRight:10 }}>
                    <TextInput
                        placeholder='Enter Password'
                        underlineColorAndroid='transparent'
                        style={{ fontSize : 14,backgroundColor : '#dae2e0',height : 50,paddingLeft : 15}}
                        placeholderTextColor="green"
                        onChangeText={ text => this.onPasswordChange(text) }
                        value={ password }
                    />
                </View>
                <View>

                </View>
            </View>
        );
    }
}
function mapStateToProps(state) {
    const { mobile,password } = state;
    return { mobile,password };
}
export default connect(mapStateToProps,{ authPropsChanged })(Form);
