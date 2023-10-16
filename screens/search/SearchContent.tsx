import React from 'react';
import {StyleSheet} from 'react-native';
import {View, TouchableOpacity, Image} from 'react-native';

const SearchContent = ({getData}: any) => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../homes/images/p1.jpg'),
        require('../homes/images/p2.jpg'),
        require('../homes/images/p3.jpg'),
        require('../homes/images/p4.jpg'),
        require('../homes/images/p5.jpg'),
        require('../homes/images/p6.jpg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../homes/images/p7.jpg'),
        require('../homes/images/p8.jpg'),
        require('../homes/images/p9.jpg'),
        require('../homes/images/p10.jpg'),
        require('../homes/images/p11.jpg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../homes/images/p12.jpg'),
        require('../homes/images/p13.jpg'),
        require('../homes/images/p14.jpg'),
        require('../homes/images/p15.jpg'),
      ],
    },
  ];

  const styles = StyleSheet.create({
    view0: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
    },
    touch33: {paddingBottom: 2, width: '33%'},
    img100: {width: '100%', height: 150},
    img100h: {width: '100%', height: 300},
    view1: {flexDirection: 'row', justifyContent: 'space-between'},
    view66: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '66.5%',
    },
    touch50: {paddingBottom: 2, width: '49.5%'},
    touch66: {paddingBottom: 2, width: '66.5%'},
    view2: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      width: '33%',
    },
    touch100: {paddingBottom: 2, width: '100%'},
    img100s: {width: '100%', height: 100},
  });

  return (
    <View>
      {searchData.map((data, index) => {
        return (
          <View key={index}>
            {data.id === 0 ? (
              <View style={styles.view0}>
                {data.images.map((imgData, imgIndex) => {
                  return (
                    <TouchableOpacity
                      key={imgIndex}
                      style={styles.touch33}
                      onPress={() => getData(imgData)}>
                      <Image source={imgData} style={styles.img100} />
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            {data.id === 1 ? (
              <View style={styles.view1}>
                <View style={styles.view66}>
                  {data.images.slice(0, 4).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.touch50}
                        onPress={() => getData(imgData)}>
                        <Image source={imgData} style={styles.img100} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <TouchableOpacity
                  style={styles.touch33}
                  onPress={() => getData(data.images[4])}>
                  <Image source={data.images[4]} style={styles.img100h} />
                </TouchableOpacity>
              </View>
            ) : null}
            {data.id === 2 ? (
              <View style={styles.view1}>
                <TouchableOpacity
                  style={styles.touch66}
                  onPress={() => getData(data.images[0])}>
                  <Image source={data.images[0]} style={styles.img100h} />
                </TouchableOpacity>
                <View style={styles.view2}>
                  {data.images.slice(1, 4).map((imgData, imgIndex) => {
                    return (
                      <TouchableOpacity
                        key={imgIndex}
                        style={styles.touch100}
                        onPress={() => getData(imgData)}>
                        <Image source={imgData} style={styles.img100s} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
