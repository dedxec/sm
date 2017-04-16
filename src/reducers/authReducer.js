/**
 * Created by taranjeetsingh on 16/04/17.
 */
const Initial_State = { mobile : null,password : null };
export default (state = Initial_State,action) => {
    switch (action.type){
     case 'authPropsChanged' :
     return { ...state,[action.payload.props] : action.payload.value};
     default :
     return state;
     }
};