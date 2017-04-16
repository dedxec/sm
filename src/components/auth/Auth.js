/**
 * Created by taranjeetsingh on 16/04/17.
 */
import React, { Component } from 'react';
import { View,Text,TextInput } from 'react-native';
import { connect } from 'react-redux';
import Form from './form';
import { CommonButton } from '../comman';
import { LoginUser,RegisterUser } from '../../actions';
class Auth extends Component{
    constructor(props){
        super(props);
        this.state={
            loginForm : false
        };
    }
    onLoginSubmit(){
        let mobile = this.props.mobile;
        let password = this.props.password;
        this.props.LoginUser({ mobile : mobile,password:password});
    }
    onRegisterSubmit(){
        console.log("SDfdsfsdfsd");
        let mobile = this.props.mobile;
        let password = this.props.password;
        this.props.RegisterUser({ mobile : mobile,password:password});
    }
    renderButton(){
        console.log("the login form is",this.state.loginForm);
        if(this.state.loginForm){
            return(
                <View>
                    <View style={{ paddingTop : 10 }}>
                        <CommonButton name="Register now" color="black" callBack={ this.onRegisterSubmit.bind(this) } />
                    </View>
                    <View style={{ alignItems : 'center',paddingTop : 10 }}>
                        <Text style={{ fontSize:20,color:'black' }}>
                            Or
                        </Text>
                    </View>
                    <View style={{ paddingTop : 10 }}>
                        <CommonButton name="Login" color="black" callBack={ this.onLoginSubmit.bind(this) } />
                    </View>
                </View>
            );
        }else{
            return(
                <View>
                    <View style={{ paddingTop : 10 }}>
                        <CommonButton name="Login" color="black" callBack={ () => console.log("login now") } />
                    </View>
                    <View style={{ paddingTop : 10,alignItems:'center' }}>
                        <Text style={{ fontSize:20,color:'black' }}>
                            Or
                        </Text>
                    </View>
                    <View style={{ paddingTop : 10 }}>
                        <CommonButton name="Register now" color="black" callBack={ () => this.setState({ loginForm : true }) } />
                    </View>
                </View>
            );
        }
    }
    render(){
        return (
            <View>
                <Form />
                { this.renderButton() }
            </View>
        );
    }
}
function mapStateToProps(state) {
    const { mobile,password } = state.auth;
    return { mobile,password };
}
export default connect(mapStateToProps,{ LoginUser,RegisterUser })(Auth);