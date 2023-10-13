import React, {useState} from 'react';
import {FlatList, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import SearchContent from './search/SearchContent';
import SearchInput from './search/SearchInput';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEllipsisVertical,
  faHeart,
  faLocationArrow,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const [image, setImage] = useState(null);
  const [like, setLike] = useState(false);

  const getData = (data: any) => {
    setImage(data);
  };

  const searchData = [
    require('./homes/images/p1.jpg'),
    require('./homes/images/p2.jpg'),
    require('./homes/images/p3.jpg'),
    require('./homes/images/p4.jpg'),
    require('./homes/images/p5.jpg'),
    require('./homes/images/p6.jpg'),

    require('./homes/images/p7.jpg'),
    require('./homes/images/p8.jpg'),
    require('./homes/images/p9.jpg'),
    require('./homes/images/p10.jpg'),
    require('./homes/images/p11.jpg'),

    require('./homes/images/p12.jpg'),
    require('./homes/images/p13.jpg'),
    require('./homes/images/p14.jpg'),
    require('./homes/images/p15.jpg'),
  ];

  const styles = StyleSheet.create({
    main: {width: '100%', backgroundColor: 'white', position: 'relative'},
    modal: {
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(52,52,52,0.8)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalview: {
      position: 'absolute',
      backgroundColor: 'white',
      width: '90%',
      height: 465,
      borderRadius: 15,
      zIndex: 1,
    },
    mainImgs: {width: '100%', height: '80%'},
    topView: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    topImgs: {width: 30, height: 30, borderRadius: 100},
    toptextView: {paddingLeft: 8},
    topText: {fontSize: 12, fontWeight: '600'},
    fonts: {
      justifyContent: 'space-around',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
    },
  });

  return (
    <SafeAreaView style={styles.main}>
      {/* <FlatList
        ListHeaderComponent={<SearchInput />}
        data={searchData}
        renderItem={data => 
          <TouchableOpacity style={{width: '33.3%', height: 135}}>
            <Image source={data.item} style={{width: '100%', height: '100%'}} />
          </TouchableOpacity>}
        keyExtractor={data => data}
        horizontal={false}
        numColumns={3}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchInput />
        <SearchContent getData={getData} />
      </ScrollView>

      {image ? (
        <View style={styles.modal}>
          <StatusBar backgroundColor="black" barStyle="dark-content" />
          <View style={styles.modalview}>
            <View style={styles.topView}>
              <Image source={image} style={styles.topImgs} />
              <View style={styles.toptextView}>
                <Text style={styles.topText}>친구 아이디</Text>
              </View>
            </View>
            <Image source={image} style={styles.mainImgs} />
            <View style={styles.fonts}>
              <TouchableOpacity onPress={() => setLike(!like)}>
                {like ? (
                  <FontAwesomeIcon icon={faHeart} size={26} color="deeppink" />
                ) : (
                  <FontAwesomeIcon icon={faHeart} size={26} />
                )}
              </TouchableOpacity>
              <FontAwesomeIcon icon={faUser} size={26} />
              <FontAwesomeIcon icon={faLocationArrow} size={26} />
              <TouchableOpacity
                onPress={() => {
                  setImage(null), setLike(false);
                }}>
                <FontAwesomeIcon icon={faXmark} size={26} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default Search;
