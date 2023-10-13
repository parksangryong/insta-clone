import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Stories = () => {
    const storyInfo = [
        {id:1, name: '나의 스토리', image: require('./images/story1.jpg')},
        {id:2, name: '동물의 숲', image: require('./images/story2.png')},
        {id:3, name: '삼겹살 데이', image: require('./images/story3.jpg')},
        {id:4, name: '여행가자', image: require('./images/story4.jpg')},
        {id:5, name: '작년 여행', image: require('./images/story5.jpg')},
        {id:6, name: '나의 소울푸드', image: require('./images/story6.jpg')},
    ];
    //스토리 배열

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    //페이지 이동 및 데이터 넘기는 네비게이션

    const styles = StyleSheet.create({
        main: {paddingVertical: 20},
        storyview : {flexDirection: 'column', paddingHorizontal: 6, position: 'relative'},
        plusview : {position: 'absolute', bottom: 15, right: 10, zIndex: 10},
        plusicon : {backgroundColor: "white", borderRadius: 10, overflow: "hidden"},
        imgview : {width: 68, height: 68, backgroundColor: "white", borderWidth: 1.8, borderRadius: 100, justifyContent: "center", alignItems: 'center', borderColor: 'pink'},
        imgs : {resizeMode: 'cover', width: '92%', height: '92%', borderRadius: 100, backgroundColor: 'orange'},
        names: {textAlign: 'center', fontSize: 10, opacity: 0.6}
    })

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.main}>
            {/* horizontal이 true면 가로 / false면 세로 */}
            {storyInfo.map((data, index) => {
                return (
                <TouchableOpacity key={index} onPress={() =>{
                     navigation.navigate('Status', {name: data.name, image: data.image})
                     }}>
                        <View style={styles.storyview}>
                            {data.id === 1 ? 
                            (<View style={styles.plusview}>
                                <FontAwesomeIcon icon={faCirclePlus} color="skyblue" style={styles.plusicon} size={20}  /></View>)
                                : 
                                null}
                            <View style={styles.imgview}>
                                <Image source={data.image} style={styles.imgs} />
                            </View>
                            <Text style={styles.names}>{data.name}</Text>
                        </View>
                </TouchableOpacity>
                )
                })}
        </ScrollView>
    )
    // map 사용해서 위에 만들어둔 배열을 이용해 스토리 생성
}

export default Stories