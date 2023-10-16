import {faLocationArrow, faSquarePlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {StatusBar} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  FlatList,
} from 'react-native';
//safeareaview는 상단바와 겹치지 않게 하는 데 사용\\

import Stories from './homes/Stories';
import Posts from './homes/Posts';

const Styles = StyleSheet.create({
  insta: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  instaText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'deeppink',
    marginTop: 10,
  },
  instaIconview: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
});

const Home = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {/* 상단 바 변경 */}
      <View style={Styles.insta}>
        <Text style={Styles.instaText}>Instagram</Text>
        <View style={Styles.instaIconview}>
          <FontAwesomeIcon
            icon={faSquarePlus}
            size={24}
            style={{paddingHorizontal: 15, marginRight: 10}}
          />
          <FontAwesomeIcon icon={faLocationArrow} size={24} />
        </View>
      </View>
      {/* 상단 메뉴 */}
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
      {/* 가로스크롤 스토리 + 세로스크롤 피드 */}
    </SafeAreaView>
  );
};

export default Home;
