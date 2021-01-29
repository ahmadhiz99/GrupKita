import {combineReducers} from 'redux'
const initialState = {
    name:'ahmad',
};

const initialStateRegister={
    form:{
        fullName:'',
        email:'asdsfghjk',
        password:''
    },
    title :'page register',
    desc:'ini adalah desc reg'
};

const RegisterReducer = (state = initialStateRegister, action) =>{
    if (action.type === 'SET_TITLE') {
        return{
            ...state,
            title: 'Register Ganti title',
        };
    }
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
               [action.inputType]:action.inputValue
            },
        }
    }
    return state;
};

const initialStateLogin = {
    info:'this login page',
    form:{
        fullName:'',
        email:'asdsfghjk',
        password:''
    },
};

const LoginReducer= (state=initialStateLogin,action)=>{
    if (action.type === 'SET_FORM') {
        return{
            ...state,
            form:{
                ...state.form,
               [action.inputType]:action.inputValue
            },
        }
    }
    return state
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer
})

export default reducer;