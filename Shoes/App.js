/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Image, TouchableOpacity} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {icons, COLORS, SIZES} from './src/constants/index';
import Home from './src/screens/Home';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'SHOE SELECTOR',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: COLORS.lightGray,
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16,
              textAlign: 'center',
              color: COLORS.gray,
            },
            headerLeft: ({onPress}) => (
              <TouchableOpacity
                style={{marginLeft: SIZES.padding}}
                onPress={onPress}>
                <Image
                  source={icons.menu}
                  resizeMode="contain"
                  style={{
                    width: SIZES.withMedium,
                    height: SIZES.heightMedium,
                  }}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{marginRight: SIZES.padding}}
                onPress={() => console.log('Pressed')}>
                <Image
                  source={icons.search}
                  resizeMode="contain"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return <App />;
};
