import React from 'react'
import { View, Text, TouchableOpacity, Image,StyleSheet } from 'react-native'
import { FriendProfiledata } from './Database'
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ActivityThisWeek =  (props : any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const styles = StyleSheet.create({
        matinTitle : {fontWeight: "bold"},
        contents : {paddingVertical: 10},
        imgs : {width:45, height:45, position: 'absolute', borderRadius: 100, opacity: 0.8, left: 5},
        text: {marginLeft: 60, paddingVertical: 15},
    })

    return(
        <View>
            <Text style={styles.matinTitle}>이번 주</Text>
            <View style={styles.contents}>
                {FriendProfiledata.slice(0,3).map((data,index) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('FriendProfile', {name: data.name, accountName:data.accountName, profileImage: data.profileImage, follow: data.follow, post: data.posts, followers: data.followers, following: data.following})} key={index}>
                            <Image source={data.profileImage}  style={styles.imgs}/>
                            <Text style={styles.text}>{data.name} 님이 팔로우 하기 시작했습니다.</Text>
                        </TouchableOpacity>
                    );
                })}
                <Text></Text>
            </View>
        </View>
    )
}

export default ActivityThisWeek