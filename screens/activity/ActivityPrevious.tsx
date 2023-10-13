import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity, Image } from 'react-native'

//navigation
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ActivityPrevious = ({data} : any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [follow, setFollow] = useState(data.follow);

    const styles = StyleSheet.create({
        main: {width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 15},
        touch64: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', maxWidth: '64%'},
        img: {width:45,height:45, borderRadius:100, marginRight: 10},
        text1: {fontSize:15},
        text2: {fontWeight: 'bold'},
        btnTouch: {width: follow ? 72: 68},
        btnView: {width: '100%', height: 30, borderRadius: 5, backgroundColor: follow ? 'white' : '#3493d9', borderWidth: follow? 1:0, borderColor: follow? '#3493d9' : 'white', justifyContent: 'center', alignItems: 'center'},
        btnText: {color: follow? 'black' : 'white'}
    });

    return(
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {name: data.name, accountName:data.accountName, profileImage: data.profileImage, follow: follow, post: data.posts, followers: data.followers, following: data.following})} style={styles.touch64}>
                <Image source={data.profileImage} style={styles.img} />
                <Text style={styles.text1}><Text style={styles.text2}>{data.name}</Text>의 사진 및 동영상을 보려면 팔로우 하세요.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFollow(!follow)} style={styles.btnTouch}>
                <View style={styles.btnView}>
                    <Text style={styles.btnText}>{follow ? 'Following' : 'Follow'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ActivityPrevious