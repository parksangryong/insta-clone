import {
  faBookmark,
  faComment,
  faEllipsisVertical,
  faHeart,
  faLocationArrow,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

const PostItem = ({data}: any) => {
  const [like, setLike] = useState(data.item.isLiked);
  const [save, setSave] = useState(false);

  //console.log({data});

  const styles = StyleSheet.create({
    main: {
      paddingBottom: 10,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.3,
    },
    top: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
    },
    topicon: {flexDirection: 'row', alignItems: 'center'},
    topimg: {width: 40, height: 40, borderRadius: 100},
    topTitleview: {paddingLeft: 5},
    toptitle: {fontSize: 15, fontWeight: 'bold'},
    mainImgs: {width: '100%', height: 300},
    mid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 15,
    },
    mdeView: {flexDirection: 'row', alignItems: 'center'},
    fonts: {marginRight: 10},
    text1: {fontWeight: '700', fontSize: 14, paddingVertical: 2},
    text2: {opacity: 0.4, paddingVertical: 2, marginTop: 5, marginBottom: 5},
    bottom: {paddingHorizontal: 15},
    btbt: {flexDirection: 'row', justifyContent: 'space-between'},
    btbtView: {flexDirection: 'row', alignItems: 'center'},
    btbtimg: {
      width: 25,
      height: 25,
      borderRadius: 100,
      backgroundColor: 'orange',
      marginRight: 10,
    },
    btbttext: {opacity: 0.5},
    bt2view: {flexDirection: 'row', alignItems: 'center'},
    bt2text: {color: 'blue', opacity: 0.8},
  });

  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <View style={styles.topicon}>
          <Image source={data.item.postPersonImage} style={styles.topimg} />
          <View style={styles.topTitleview}>
            <Text style={styles.toptitle}>{data.item.postTitle}</Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisVertical} size={20} />
      </View>
      <View>
        <Image source={data.item.postImage} style={styles.mainImgs} />
      </View>
      <View style={styles.mid}>
        <View style={styles.mdeView}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            {like ? (
              <FontAwesomeIcon
                icon={faHeart}
                color="deeppink"
                size={20}
                style={styles.fonts}
              />
            ) : (
              <FontAwesomeIcon
                icon={faHeart}
                color="black"
                size={20}
                style={styles.fonts}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faComment} size={20} style={styles.fonts} />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faLocationArrow} size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setSave(!save)}>
          {save ? (
            <FontAwesomeIcon icon={faBookmark} color="blue" size={20} />
          ) : (
            <FontAwesomeIcon icon={faBookmark} color="black" size={20} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <Text>좋아요 {like ? data.item.likes + 1 : data.item.likes} 개</Text>
        <Text style={styles.text1}>게시글 설명글 입니다.</Text>
        <Text style={styles.text2}>댓글 모두 보기</Text>
        <View style={styles.btbt}>
          <View style={styles.btbtView}>
            <Image source={data.item.postPersonImage} style={styles.btbtimg} />
            <TextInput placeholder="댓글 달기 ..." style={styles.btbttext} />
          </View>
          <View style={styles.bt2view}>
            <Text style={styles.bt2text}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
