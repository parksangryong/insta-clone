import {useEffect, useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
// react - react native 순서
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StatusBar} from 'native-base';
// 그외

// ?

// 컴포넌트

const Login = () => {
  useEffect(() => {
    AsyncStorage.getItem('id', (err, data) => {
      if (data !== null) {
        navigation.navigate('Bottom');
      }
      //console.log(data);
    });
  }, []);

  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const loginclick = () => {
    // console.log(id, pwd)
    if (id === 'admin') {
      if (pwd === '1234') {
        AsyncStorage.setItem('id', JSON.stringify({id: 'admin', pwd: '1234'}));
        navigation.navigate('Bottom');
      } else {
        Alert.alert('패스워드가 틀렸습니다.');
      }
    } else {
      Alert.alert('아이디가 틀렸습니다.');
    }
  };

  const styles = StyleSheet.create({
    white: {
      backgroundColor: 'white',
    },
    instaHeader: {
      fontSize: 50,
      color: 'deeppink',
    },
    headerview: {
      width: '100%',
      height: 200,
      justifyContent: 'center',
      alignItems: 'center',
    },
    idView: {
      flexDirection: 'row',
      width: '90%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    idText: {
      width: '40%',
      textAlign: 'center',
      fontSize: 18,
    },
    idInput: {
      backgroundColor: 'lightgray',
      width: '60%',
      textAlign: 'center',
      fontSize: 18,
      paddingRight: 15,
    },
    pwdView: {
      flexDirection: 'row',
      width: '90%',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    pwdText: {
      width: '40%',
      textAlign: 'center',
      fontSize: 18,
    },
    pwdInput: {
      backgroundColor: 'lightgray',
      width: '60%',
      textAlign: 'center',
      fontSize: 18,
      paddingRight: 15,
    },
    btnView: {
      width: '100%',
      height: 100,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 100,
    },
    btnTouch: {
      width: '50%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn1: {
      width: 80,
      height: 40,
      textAlign: 'center',
      fontSize: 18,
      borderColor: 'deeppink',
      borderBottomWidth: 5,
      color: 'black',
    },
    btn2: {
      width: 80,
      height: 40,
      textAlign: 'center',
      fontSize: 18,
      borderColor: 'darkblue',
      borderBottomWidth: 5,
      color: 'black',
    },
  });

  return (
    <SafeAreaView style={styles.white}>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.headerview}>
        <Text style={styles.instaHeader}>Instagram</Text>
      </View>
      <View>
        <View style={styles.idView}>
          <Text style={styles.idText}>아이디 : </Text>
          <TextInput
            style={styles.idInput}
            value={id}
            placeholder={'id'}
            onChangeText={text => setId(text)}
          />
        </View>
        <View style={styles.pwdView}>
          <Text style={styles.pwdText}>비밀번호 : </Text>
          <TextInput
            style={styles.pwdInput}
            value={pwd}
            placeholder="password"
            onChangeText={text => setPwd(text)}
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity onPress={loginclick} style={styles.btnTouch}>
          <Text style={styles.btn1}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('new')}
          style={styles.btnTouch}>
          <Text style={styles.btn2}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
