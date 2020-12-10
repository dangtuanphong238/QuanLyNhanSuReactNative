import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import ListRoom from '../screens/Room/ListRoom';
import AddRoom from '../screens/Room/AddRoom';
import Splash from '../screens/Splash/Splash';

const Stack = createStackNavigator();

export default class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={!this.state.token ? 'SplashScreen' : 'SignInScreen'}> */}
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'Splash'}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ListRoom" component={ListRoom} />
          <Stack.Screen name="AddRoom" component={AddRoom} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
