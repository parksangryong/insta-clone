import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    TextInput
  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faLocationArrow, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import {useNavigation, StackActions} from '@react-navigation/native'
//props 타입 설정


export type StatusProps = NativeStackScreenProps<RootStackParamList, 'Status'>;


const Status = ({route, navigation}: StatusProps) => {

    const {name, image} = route.params;

    useEffect(() => {
        const time = setInterval(() => {
            // navigation.navigate('Home');
            navigation.dispatch(StackActions.pop(1));
            //tab - stack 이동 시 사용
        },5000);

        return () => clearInterval(time);
    }, []);
    // 5초동안 가만히 두면 다시 홈으로 돌아가기

    const styles = StyleSheet.create({
        main: {backgroundColor: 'black', height: '100%', justifyContent: 'center'},
        whiteborder: {height: 3, width: '95%', borderWidth: 1, backgroundColor: 'gray', position: 'absolute', top: 18},
        top : {padding: 15, flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 12, left: 0, width: '90%' },
        topimgview: {borderRadius: 100, width: 30, height: 30, justifyContent: 'center', alignItems: 'center', marginTop: 10},
        topimg : {borderRadius: 100, backgroundColor: 'orange', resizeMode: 'cover', width: '92%', height: '92%',},
        toptextview : {justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginTop: 10 },
        toptext: {color: 'white', fontSize: 15, paddingLeft: 10},
        topfont: {marginTop: 10, opacity: 0.6},
        mainImg: {position: 'absolute', width: '100%', height: 450},
        inputview: {justifyContent: 'center', alignItems: 'center', width: '100%', paddingVertical: 10, position: 'absolute', top: '85%'},
        inputfont: {opacity: 0.7, position: 'absolute', zIndex: 1, right: 25, color: 'deeppink'},
        inputtext: {width: '94%', backgroundColor: 'lightgray', borderRadius: 10, alignItems: 'center', fontSize: 15, padding: 4, paddingLeft: 20},
    })

    return (
        <SafeAreaView style={styles.main}>
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={styles.whiteborder} />
            <View style={styles.top}>
                <View style={styles.topimgview}>
                    <Image source={image} style={styles.topimg} />
                </View>
                <View style={styles.toptextview}>
                    <Text style={styles.toptext}>{name}</Text>
                    <TouchableOpacity onPress={() => {if(navigation.canGoBack()){
                        navigation.goBack();
                    }else{
                        navigation.dispatch(StackActions.pop(1));
                    }}}>
                        <FontAwesomeIcon icon={faXmark} color="white" size={20} style={styles.topfont} />
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={image} style={styles.mainImg} />
            <View style={styles.inputview}>             
                <FontAwesomeIcon icon={faLocationArrow} size={18} style={styles.inputfont} />
                <TextInput placeholder='DM' placeholderTextColor="#909090" style={styles.inputtext} />
            </View>
            
        </SafeAreaView>
    )
}
// 받은 값의 name 과 image를 사용해 story 만들기

export default Status