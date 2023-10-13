import {
  faChevronDown,
  faEllipsisVertical,
  faPlusSquare,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ProfileBody = (props: any) => {
  const {name, profileImage, post, followers, following, accountName} = props;
  const [big, setBig] = useState(false);

  const styles = StyleSheet.create({
    main: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    top: {flexDirection: 'row', alignItems: 'center'},
    topText: {fontSize: 18, fontWeight: 'bold'},
    topIcon: {paddingHorizontal: 5, opacity: 0.5},
    topIcons: {flexDirection: 'row', alignItems: 'center'},
    topIcon2: {paddingHorizontal: 15},
    bigview: {
      backgroundColor: 'black',
      width: '100%',
      position: 'absolute',
      height: '200%',
      zIndex: 1,
      top: 100,
      borderRadius: 50,
    },
    bitimgs: {width: '100%', height: '100%', borderRadius: 50},
    content: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 20,
    },
    contentview: {alignItems: 'center'},
    contentimg: {
      resizeMode: 'cover',
      width: 80,
      height: 80,
      borderRadius: 100,
    },
    text1: {paddingVertical: 5, fontWeight: 'bold'},
    text2: {fontWeight: 'bold', fontSize: 18},
  });

  return (
    <View>
      {accountName ? (
        <View style={styles.main}>
          <View style={styles.top}>
            <Text style={styles.topText}>{accountName}</Text>
            <FontAwesomeIcon
              icon={faChevronDown}
              size={20}
              style={styles.topIcon}
            />
          </View>
          <View style={styles.topIcons}>
            <FontAwesomeIcon
              icon={faPlusSquare}
              size={25}
              style={styles.topIcon2}
            />
            <FontAwesomeIcon icon={faEllipsisVertical} size={25} />
          </View>
        </View>
      ) : null}
      <View style={styles.content}>
        <View style={styles.contentview}>
          <TouchableOpacity
            onPressIn={() => setBig(true)}
            onPressOut={() => setBig(false)}>
            <Image source={profileImage} style={styles.contentimg} />
          </TouchableOpacity>
          <Text style={styles.text1}>{name}</Text>
        </View>
        <View style={styles.contentview}>
          <Text style={styles.text2}>{post}</Text>
          <Text>게시물</Text>
        </View>
        <View style={styles.contentview}>
          <Text style={styles.text2}>{followers}</Text>
          <Text>팔로워</Text>
        </View>
        <View style={styles.contentview}>
          <Text style={styles.text2}>{following}</Text>
          <Text>팔로잉</Text>
        </View>
      </View>

      {big ? (
        <View style={styles.bigview}>
          <Image source={profileImage} style={styles.bitimgs} />
        </View>
      ) : (
        ''
      )}
    </View>
  );
};

export default ProfileBody;
