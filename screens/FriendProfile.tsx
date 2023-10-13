import React from 'react';
import {StyleSheet} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

//components
import ProfileBody from './profile/ProfileBody';
import ProfileButton from './profile/ProfileButton';
import FriendItem from './profile/FriendItem';
import {FriendProfiledata} from './activity/Database';
import {RootStackParamList} from '../types/types';

//package
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type StatusProps = NativeStackScreenProps<
  RootStackParamList,
  'FriendProfile'
>;

const FriendProfile = ({route, navigation}: StatusProps) => {
  const {name, profileImage, post, followers, following, accountName} =
    route.params;

  const styles = StyleSheet.create({
    main: {width: '100%', backgroundColor: 'white'},
    view1: {padding: 10},
    backbtn: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
    bottomText: {paddingVertical: 10, fontSize: 15, fontWeight: 'bold'},
    bottomscroll: {paddingTop: 10},
  });

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.view1}>
        <View style={styles.backbtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} />
          </TouchableOpacity>
        </View>
        <ProfileBody
          name={name}
          accountName={accountName}
          profileImage={profileImage}
          post={post}
          followers={followers}
          following={following}
        />
        <ProfileButton
          id={1}
          name={name}
          accountName={accountName}
          profileImage={profileImage}
        />

        <Text style={styles.bottomText}>회원님을 위한 추천</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.bottomscroll}>
          {name === FriendProfiledata[0].name
            ? null
            : FriendProfiledata.map((data, index) => {
                return <FriendItem key={index} data={data} name={name} />;
              })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default FriendProfile;
