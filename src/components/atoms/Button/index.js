import React from 'react'
import {Button} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'

const Button = ({title}) => {
    return(
        <TouchableOpacity
            style={{
                backgroundColor:'silver',
                borderRadius:25,
                paddingVertical:'13'
            }}
        >
            <Text
                style={{
                    fontSize:12,
                    fontWeight:'bold',
                    color:'white',
                    textTransform: 'uppercase',
                    textAlign:'center'
                }}
            >

            </Text>
        </TouchableOpacity>
    )
}

export default Button;