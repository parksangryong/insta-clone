import React from 'react';
import {FlatList} from 'react-native';
import PostItem from './PostItem';

const Posts = () => {
  const postInfo = [
    {
      postTitle: 'John',
      postPersonImage: require('./images/person1.jpg'),
      postImage: require('./images/post1.jpg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'Tommy',
      postPersonImage: require('./images/person2.jpg'),
      postImage: require('./images/post2.jpg'),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: 'Piter',
      postPersonImage: require('./images/person3.jpg'),
      postImage: require('./images/post3.jpg'),
      likes: 253,
      isLiked: false,
    },
    {
      postTitle: 'Jack',
      postPersonImage: require('./images/person4.jpg'),
      postImage: require('./images/post4.jpg'),
      likes: 651,
      isLiked: false,
    },
    {
      postTitle: 'Kellin',
      postPersonImage: require('./images/person5.jpg'),
      postImage: require('./images/post5.jpg'),
      likes: 888,
      isLiked: true,
    },
    {
      postTitle: 'Winter',
      postPersonImage: require('./images/person6.jpg'),
      postImage: require('./images/post6.jpg'),
      likes: 2050,
      isLiked: false,
    },
  ];

  return (
    <FlatList
      scrollEnabled={false}
      data={postInfo}
      renderItem={data => <PostItem data={data} />}
      keyExtractor={data => data.postTitle}
    />
  );
};

export default Posts;
