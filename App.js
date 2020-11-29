import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import home from './pages/home/homes';
import about from './pages/regystre/regystres';
import dates from './pages/date/dates';

const Stack = createStackNavigator();

    function App() {

      return (
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="HOME" component = {home}/>
          <Stack.Screen name="REGYSTRE" component = {about}/>
          <Stack.Screen name="DATES" component = {dates}/>
          </Stack.Navigator>
        </NavigationContainer>
        
    );
}
export default App;

