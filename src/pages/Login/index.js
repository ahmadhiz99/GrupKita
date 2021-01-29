import React from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TextInput
  } from 'react-native';
// import { View } from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {setForm} from '../../redux'
import {ActionButton} from './ActionButton'


const Login =({navigation})=>{
    // const LoginReducer = useSelector(state=>state.LoginReducer)
    const {form} = useSelector(state=>state.LoginReducer)
    const dispatch = useDispatch();
    // const [form, setForm] = useState({
    //     fullName:'',
    //     email:'',
    //     password:''
    // });

    // useEffect(() => {
    //     console.log('global:', LoginReducer);
    // }, [])

    const sendData =()=>{
        console.log('data yang akan dikirim', form)
    }

    const onInputChange = (value, inputType)=>{
        // setForm({
        //     ...form,
        //     [input]:value,
        // })
        // dispatch({type:'SET_FORM', inputType:input,inputValue:value})
        dispatch(setForm(inputType, value));
    }

    return (
        <View>
            <Text>Login form</Text>
            <TextInput 
                placeholder='masukan angka Login' 
                value={form.email}
                onChangeText={value=>onInputChange(value, 'email')}
            />
            <Button onPress={sendData} title='click' />
            <Text>
              Email: {form.email}
            </Text>

            <Button title='login' onPress={()=> navigation.navigate('Register')} />
            {/* <ActionButton title='Loginpage' desc='Login ke App' /> */}
        </View>
    )
}
export default Login