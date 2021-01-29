    import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
// import {Login, Register} from '../pages'
import {Login, Register} from '../pages'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
const Stack = createStackNavigator();

const Router =()=>{
    
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown:false
                }}
            />
            <Stack.Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown:false
                }}
            />
            {/* <Stack.Screen 
                name="Splash"
                component={Splash}
                options={{
                    headerShown:false
                }}
            /> */}
        </Stack.Navigator>
    )
}

export default Router;