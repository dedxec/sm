/**
 * Created by taranjeetsingh on 16/04/17.
 */
import axios from 'axios';
export const LoginUser = ({ mobile,password }) => {
    return (dispatch) => {
        axios.post('https://taranjeet-server.herokuapp.com/signup')
            .then((res) => {
            console.log(res.data);
            dispatch({
                type:'success',
                payload:"okay"
            });
            })
            .catch((error) => {
            console.log(error);
            });
    };
};
export const RegisterUser = ({ mobile,password }) => {
    return (dispatch) => {
        console.log("SDfdsfsd");
        axios.post("https://taranjeet-server.herokuapp.com/signup",{
            email : mobile,password
        })
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type:'success',
                    payload:"okay"
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
}

export const authPropsChanged = ({ props,value }) => {
    return ({
        type : 'authPropsChanged',
        payload : { props,value }
    });
}