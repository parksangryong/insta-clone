import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ProfileBody from './profile/ProfileBody';
import ProfileButton from './profile/ProfileButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Profile = () => {
  let circles = [];
  let numberOfCircles = 10;
  const [alist, setAlist] = useState([]);

  useEffect(() => {
    //console.log(alist.length);
    const getData = async () => {
      try {
        const result = await axios.get(
          `https://dog.ceo/api/breeds/image/random/20
        `,
        );
        setAlist(result.data.message);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  const [openImg, setOpenImg] = useState(null);

  // console.log(openImg)

  const styles = StyleSheet.create({
    firview: {
      width: 60,
      height: 60,
      borderRadius: 100,
      borderWidth: 1,
      opacity: 0.7,
      marginHorizontal: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    otherview: {
      width: 60,
      height: 60,
      borderRadius: 100,
      borderWidth: 1,
      opacity: 0.1,
      marginHorizontal: 5,
      backgroundColor: 'black',
    },
    safeView: {width: '100%', backgroundColor: 'white'},
    main: {width: '100%', padding: 10},
    circles: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      width: '100%',
      height: 180,
    },
    margin15: {
      marginTop: 0,
      width: '100%',
      marginBottom: 'auto',
    },
    imgView: {
      width: '100%',
    },
    imgTouch: {width: '33.3%', marginBottom: 1.5, height: 137},
    imgs: {width: '100%', height: '100%', padding: 10},
    openView: {
      position: 'absolute',
      width: '100%',
      height: '100%',

      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'flex-start',
    },
    openImg: {
      width: '96%',
      height: 300,
      borderRadius: 20,
      borderWidth: 3,
      borderColor: 'black',
      resizeMode: 'cover',
    },
    ooView: {
      width: '92%',
      position: 'relative',
      bottom: 45,
      flexDirection: 'row',
      alignItems: 'center',
    },
    ooText: {color: 'black', backgroundColor: 'white', borderRadius: 100},
    ooxView: {
      position: 'relative',
      zIndex: 3,
      left: 170,
      bottom: 285,
    },
  });

  for (let index = 0; index < numberOfCircles; index++) {
    circles.push(
      <View key={index}>
        {index === 0 ? (
          <View style={styles.firview}>
            <FontAwesomeIcon icon={faPlus} size={40} />
          </View>
        ) : (
          <View style={styles.otherview}></View>
        )}
      </View>,
    );
  }

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.main}>
        <ProfileBody
          name={'Park'}
          accountName={'ParkSR'}
          profileImage={require('./homes/images/post5.jpg')}
          post={'300'}
          followers={'35'}
          following={'458'}
        />
        <ProfileButton
          id={0}
          name={'Park'}
          accountName="ParkSR"
          profileImage={require('./homes/images/post5.jpg')}
        />
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.circles}>
        {circles}
      </ScrollView>

      <FlatList
        data={alist} //axios로 받아온 alist를 데이터로 사용
        scrollEnabled={true} // 스크롤 기능 킴
        renderItem={item => (
          <TouchableOpacity
            style={styles.imgTouch}
            onPress={() => {
              setOpenImg(item.item);
            }}>
            <Image source={{uri: item.item}} style={styles.imgs} />
          </TouchableOpacity>
        )} // renderItem으로 컴포넌트 생성
        keyExtractor={index => index} // 구별할 수 있는 key 설정
        style={styles.margin15} // FlatList 스타일 설정
        numColumns={3} // 열 개수 설정
        horizontal={false} // 가로가 아닌 세로로 배열 설정 (즉 3열로 아래로 생성)
      />

      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.margin15}>
        <View style={styles.imgView}>
          {alist.map((data, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.imgTouch}
                onPressIn={() => {
                  setOpenImg(data);
                }}
                onPressOut={() => {
                  setOpenImg(null);
                }}>
                <Image source={{uri: data}} style={styles.imgs} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView> */}
      {openImg !== null ? (
        <View style={styles.openView}>
          <Image source={{uri: openImg}} style={styles.openImg} />
          <TouchableOpacity
            style={styles.ooxView}
            onPress={() => setOpenImg(null)}>
            <FontAwesomeIcon icon={faXmark} style={styles.ooText} size={20} />
          </TouchableOpacity>
        </View>
      ) : (
        ''
      )}
    </SafeAreaView>
  );
};

export default Profile;
