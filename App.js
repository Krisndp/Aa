import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Categories from './screen/Categories';
import Category from './screen/Category';


const AppNavigator = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {
      title: 'Categories',
      headerTitleStyle: {
      }

    },
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('Name')
      }
    }
  },
}, {
    initialRouteName: 'Categories',

  });

export default createAppContainer(AppNavigator);