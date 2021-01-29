import React, { Component } from 'react';
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
// import  {colors} from '../../utils' 
// import  {Input, Button} from '../../components'


const Register =()=>{
    // const RegisterReducer = useSelector(state=>state.RegisterReducer)
    const {form} = useSelector(state=>state.RegisterReducer)
    const dispatch = useDispatch();
    // const [form, setForm] = useState({
    //     fullName:'',
    //     email:'',
    //     password:''
    // });

    // useEffect(() => {
    //     console.log('global:', RegisterReducer);
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
            <TextInput 
                placeholder='masukan angka' 
                value={form.email}
                onChangeText={value=>onInputChange(value, 'email')}

            />
            <Button onPress={sendData} title='click' />
            <Text>
              Email: {form.email}
            </Text>

            <Button title='login grupkita' onPress={()=> navigation.navigate('Login')} />
        </View>
    )
}
export default Register