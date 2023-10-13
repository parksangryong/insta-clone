import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import ActivityPrevious from './activity/ActivityPrevious';
import ActivityRecommend from './activity/ActivityRecommend';
import ActivityThisWeek from './activity/ActivityThisWeek';
import {FriendProfiledata} from './activity/Database';

const Activity = () => {
  const styles = StyleSheet.create({
    main: {width: '100%', backgroundColor: 'white', marginBottom: 45},
    mainText: {
      fontSize: 20,
      fontWeight: 'bold',
      borderBottomWidth: 0.5,
      borderBottomColor: '#DEDEDE',
      padding: 10,
    },
    scroll: {margin: 10},
  });

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.mainText}>활동</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
        <ActivityThisWeek />
        <Text style={{fontWeight: 'bold'}}>이전활동</Text>
        {FriendProfiledata.slice(3, 6).map((data, index) => {
          return <ActivityPrevious data={data} key={index} />;
        })}
        <Text style={{fontWeight: 'bold', paddingVertical: 10}}>
          회원님을 위한 추천
        </Text>
        <FlatList
          data={FriendProfiledata.slice(6, 15)}
          renderItem={data => <ActivityRecommend data={data} />}
          keyExtractor={data => data.name}
          scrollEnabled={false}
        />
        {/* {FriendProfiledata.slice(6, 15).map((data, index) => {
          return <ActivityRecommend data={data} key={index} />;
        })} */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Activity;
