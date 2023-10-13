import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

//package
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';

const FriendItem = (props: any) => {
  const {data, name} = props;
  const [isFollow, setIsFollow] = useState(false);
  const [close, setClose] = useState(false);

  const styles = StyleSheet.create({
    main: {
      width: 160,
      height: 200,
      margin: 3,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: '#DEDEDE',
      borderRadius: 2,
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    btnopacity: {opacity: 0.8},
    imgs: {
      width: 80,
      height: 80,
      borderRadius: 100,
      margin: 10,
    },
    name: {fontWeight: 'bold', fontSize: 16},
    accname: {fontSize: 12},
    followTouch: {width: '80%', paddingVertical: 10},
    followView: {
      width: '100%',
      height: 30,
      borderRadius: 5,
      backgroundColor: isFollow ? 'white' : '#3493D9',
      borderWidth: isFollow ? 1 : 0,
      borderColor: '#DEDEDE',
      justifyContent: 'center',
      alignItems: 'center',
    },
    followText: {color: isFollow ? 'black' : 'white'},
  });

  return (
    <View>
      {data.name === name || close ? null : (
        <View style={styles.main}>
          <TouchableOpacity
            onPress={() => setClose(true)}
            style={styles.closeBtn}>
            <FontAwesomeIcon icon={faClose} style={styles.btnopacity} />
          </TouchableOpacity>
          <Image source={data.profileImage} style={styles.imgs} />
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.accname}>{data.accountName}</Text>
          <TouchableOpacity
            onPress={() => setIsFollow(!isFollow)}
            style={styles.followTouch}>
            <View style={styles.followView}>
              <Text style={styles.followText}>
                {isFollow ? '팔로잉' : '팔로우'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FriendItem;
