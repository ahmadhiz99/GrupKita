// https://enappd.com/blog/redux-in-react-native-app/92/
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect, Provider } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as countActions from './actions/counts';
// import * as showActions from './actions/show';

import {store} from './redux'
import Login from './pages/Login'
import Register from './pages/Register'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './router'


const Stack = createStackNavigator();

class App extends Component {

  render() {
    return (
      <Provider store = { store }>
        <NavigationContainer>
          {/* <Stack.Navigator>
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator> */}
        <Router />
        </NavigationContainer>
      </Provider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter:{
    textAlign :'center'
  }
});

// const mapStateToProps = state => ({
//   test: state.test.test,
//   text: state.test.text,
// });

// const ActionCreators = Object.assign(
//   {},
//   countActions,
//   showActions,
// );

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(ActionCreators, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App


