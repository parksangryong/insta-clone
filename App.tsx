/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Activity from './screens/Activity';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Search from './screens/Search';
import Status from './screens/Status';
import FriendProfile from './screens/FriendProfile';
import EditProfile from './screens/EditProfile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {RootStackParamList} from './types/types';
import Login from './screens/login/Login';
import store from './screens/reducers/store';
import {NewLogin} from './screens/login/NewLogin';
import {Provider} from 'react-redux';

const stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App = () => {
  const BottomTabScreen = ({route}: any) => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 70,
          }, //키 숨기기 설정 및 라벨 끄기 및 스타일 설정
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesomeIcon
                  icon={faHouse}
                  size={30}
                  style={{color: focused ? 'deeppink' : ''}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size={30}
                  style={{color: focused ? 'deeppink' : ''}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesomeIcon
                  icon={faHeart}
                  size={30}
                  style={{color: focused ? 'deeppink' : ''}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <FontAwesomeIcon
                  icon={faUser}
                  size={30}
                  style={{color: focused ? 'deeppink' : ''}}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
      // 각 탭의 이름 및 컴포넌트 설정, 아이콘 설정
    );
  };
  //하단 탭바(Tab.Navi는 탭 묶음 / Tab.Screen은 각 탭 설정 )

  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator
          initialRouteName="login"
          screenOptions={{headerShown: false}}>
          <stack.Screen name="login" component={Login} />
          <stack.Screen name="new" component={NewLogin} />
          <stack.Screen name="Bottom" component={BottomTabScreen} />
          <stack.Screen name="Status" component={Status} />
          <stack.Screen name="FriendProfile" component={FriendProfile} />
          <stack.Screen name="EditProfile" component={EditProfile} />
        </stack.Navigator>
      </NavigationContainer>
      {/* 네비 설정 = 현재 위에서 설정한 하단 탭이 기본 배치 되어 있음 */}
    </Provider>
  );
};

export default App;
