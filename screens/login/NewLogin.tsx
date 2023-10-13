import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type StatusProps = NativeStackScreenProps<RootStackParamList, 'new'>;

export const NewLogin = ({navigation}: StatusProps) => {
  const styles = StyleSheet.create({
    main: {width: '100%', height: '100%', backgroundColor: 'white'},
    top: {
      flexDirection: 'row',
      height: 30,
      alignItems: 'center',
      marginTop: 15,
    },
    topback: {marginHorizontal: 15},
    topbackText: {fontWeight: 'bold', fontSize: 14},
    topText: {
      marginLeft: 113,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'deeppink',
    },
    imgs: {
      width: 80,
      height: 80,
      borderWidth: 2,
      borderRadius: 100,
      borderColor: 'gray',
      backgroundColor: 'lightgray',
      opacity: 0.5,
    },
    imgbox: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    imgText: {
      position: 'absolute',
      marginTop: 10,
      color: 'gray',
      fontSize: 30,
    },
    inputView: {padding: 10},
    inputname: {opacity: 0.5, marginLeft: 5},
    inputs: {
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: '#cdcdcd',
    },
    btn: {
      alignItems: 'flex-end',
      marginRight: 10,
    },
    btnText: {
      color: 'red',
      fontSize: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'red',
    },
  });

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.top}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.topback}>
          <Text style={styles.topbackText}>취소</Text>
        </TouchableOpacity>
        <Text style={styles.topText}>회원가입</Text>
      </View>
      <KeyboardAwareScrollView>
        <View>
          <TouchableOpacity style={styles.imgbox}>
            <View style={styles.imgs}></View>
            <Text style={styles.imgText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>이름</Text>
            <TextInput placeholder="이름" style={styles.inputs} />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>사용자 이름</Text>
            <TextInput placeholder="사용자 이름" style={styles.inputs} />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>비밀번호</Text>
            <TextInput
              placeholder="비밀번호"
              secureTextEntry={true}
              style={styles.inputs}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.inputView}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
