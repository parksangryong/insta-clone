import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity, Image} from 'react-native';

//navigation
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//package
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

const ActivityRecommend = ({data}: any) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [follow, setFollow] = useState(data.item.follow);
  const [close, setClose] = useState(false);

  const styles = StyleSheet.create({
    closeView: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    closeTouch: {flexDirection: 'row', alignItems: 'center', maxWidth: '64%'},
    closeImg: {width: 45, height: 45, borderRadius: 100, marginRight: 10},
    Names: {width: '100%'},
    names1: {fontSize: 14, fontWeight: 'bold'},
    names2: {fontSize: 14, opacity: 0.6},
    followView: {flexDirection: 'row', alignItems: 'center'},
    followTouch: {width: follow ? 90 : 68},
    ffView: {
      width: '100%',
      height: 30,
      borderRadius: 5,
      backgroundColor: follow ? 'white' : '#3493d9',
      borderWidth: follow ? 1 : 0,
      borderColor: '#DEDEDE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ffText: {color: follow ? 'black' : 'white'},
    xbtn: {paddingHorizontal: 10},
    xfont: {opacity: 0.8},
  });

  return (
    <View>
      {close ? null : (
        <View style={styles.closeView}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('FriendProfile', {
                  name: data.item.name,
                  accountName: data.item.accountName,
                  profileImage: data.item.profileImage,
                  follow: follow,
                  post: data.item.posts,
                  followers: data.item.followers,
                  following: data.item.following,
                })
              }
              style={styles.closeTouch}>
              <Image source={data.item.profileImage} style={styles.closeImg} />
              <View style={styles.Names}>
                <Text style={styles.names1}>{data.item.name}</Text>
                <Text style={styles.names2}>{data.item.accountName}</Text>
                <Text style={styles.names2}>회원님을 위한 추천</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.followView}>
            {follow ? (
              <TouchableOpacity
                onPress={() => setFollow(!follow)}
                style={styles.followTouch}>
                <View style={styles.ffView}>
                  <Text style={styles.ffText}>
                    {follow ? 'following' : 'follow'}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => setFollow(!follow)}
                  style={styles.followTouch}>
                  <View style={styles.ffView}>
                    <Text style={styles.ffText}>
                      {follow ? 'following' : 'follow'}
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setClose(true)}
                  style={styles.xbtn}>
                  <FontAwesomeIcon
                    icon={faXmark}
                    size={14}
                    style={styles.xfont}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ActivityRecommend;
