import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from 'react-native';
import {StyleSheet} from 'react-native';

//components
import {RootStackParamList} from '../types/types';

//package
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {RootState} from './reducers/store';
import {instaPlus} from './reducers/plusAction';

export type StatusProps = NativeStackScreenProps<
  RootStackParamList,
  'EditProfile'
>;

const EditProfile = ({route, navigation}: StatusProps) => {
  const {name, accountName, profileImage} = route.params;
  const navi = useNavigation<NativeStackNavigationProp<any>>();

  // const dispatch = useDispatch();
  // const [imgs, setImgs] = useState(
  //   useSelector((state: RootState) => state.PlusReducers.imgs),
  // );

  const styles = StyleSheet.create({
    safeview: {width: '100%', backgroundColor: 'white'},
    topView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '96%',
      marginTop: 10,
      marginLeft: '2%',
    },
    modifyText: {fontWeight: 'bold', fontSize: 16},
    completeText: {color: '#3496d9'},
    imgView: {padding: 20, alignItems: 'center'},
    imgs: {width: 80, height: 80, borderRadius: 100},
    imgText: {color: '#3493d9', marginTop: 10},
    inputView: {padding: 10},
    inputname: {opacity: 0.5},
    inputs: {
      fontSize: 16,
      borderBottomWidth: 1,
      borderColor: '#cdcdcd',
    },
    blueText: {marginVertical: 5, padding: 5, color: '#3493d9'},
    redText: {marginVertical: 5, padding: 5, color: 'red'},
  });

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.topView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>취소</Text>
        </TouchableOpacity>
        <Text style={styles.modifyText}>프로필 수정</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.completeText}>완료</Text>
        </TouchableOpacity>
      </View>
      <KeyboardAwareScrollView>
        <View style={styles.imgView}>
          <Image source={profileImage} style={styles.imgs} />
          <Text style={styles.imgText}>프로필 사진 바꾸기</Text>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>이름</Text>
            <TextInput
              placeholder="이름"
              defaultValue={name}
              style={styles.inputs}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>사용자 이름</Text>
            <TextInput
              placeholder="사용자 이름"
              defaultValue={accountName}
              style={styles.inputs}
            />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>웹사이트</Text>
            <TextInput placeholder="웹사이트" style={styles.inputs} />
          </View>
        </View>
        <View style={styles.inputView}>
          <View>
            <Text style={styles.inputname}>소개</Text>
            <TextInput placeholder="소개" style={styles.inputs} />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <View>
        <Text style={styles.blueText}>프로패셔널 계정으로 전환</Text>
        <Text style={styles.blueText}>개인정보 설정</Text>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem('id'), navi.navigate('login');
          }}>
          <Text style={styles.redText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
