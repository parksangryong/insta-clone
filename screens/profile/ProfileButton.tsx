import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

//package
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type profiles = {
  id: number;
  name?: string;
  accountName?: string;
  profileImage?: any;
};

const ProfileButton = (props: profiles) => {
  const [follow, setFollow] = useState(false);
  const {id, name, accountName, profileImage} = props;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const styles = StyleSheet.create({
    view0: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingVertical: 5,
    },
    width100: {width: '100%'},
    width40: {width: '42%'},
    modifyView: {
      width: '100%',
      height: 35,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#dedede',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modifyText: {
      color: 'black',
      fontSize: 14,
      fontWeight: 'bold',
      letterSpacing: 1,
      opacity: 0.8,
    },
    followView: {
      width: '100%',
      height: 35,
      borderRadius: 5,
      backgroundColor: follow ? 'white' : '#3493d9',
      borderWidth: follow ? 1 : 0,
      borderColor: '#dedede',
      justifyContent: 'center',
      alignItems: 'center',
    },
    followText: {color: follow ? 'black' : 'white'},
    msgView: {
      width: '42%',
      height: 35,
      borderWidth: 1,
      borderColor: '#dedede',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    iconView: {
      width: '10%',
      height: 35,
      borderWidth: 1,
      borderColor: '#dedede',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  });

  return (
    <>
      {id === 0 ? (
        <View style={styles.view0}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('EditProfile', {
                name: name,
                accountName: accountName,
                profileImage: profileImage,
              })
            }
            style={styles.width100}>
            <View style={styles.modifyView}>
              <Text style={styles.modifyText}>프로필 수정</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.view0}>
          <TouchableOpacity
            onPress={() => setFollow(!follow)}
            style={styles.width40}>
            <View style={styles.followView}>
              <Text style={styles.followText}>
                {follow ? '팔로잉' : '팔로우'}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.msgView}>
            <Text>메시지</Text>
          </View>
          <View style={styles.iconView}>
            <FontAwesomeIcon icon={faChevronDown} size={20} />
          </View>
        </View>
      )}
    </>
  );
};

export default ProfileButton;
