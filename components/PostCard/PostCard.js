import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './PostCard.style'
import Icon from 'react-native-vector-icons/AntDesign'

const PostCard = ({ posts }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>{posts.title}</Text>
      <Text style={styles.body_text}>{posts.body}</Text>
      <View style={styles.content_container}>
        <View style={styles.inner_container}>
          <Icon name='like2' size={20} />
          <Text style={styles.tag_text}>{posts.reactions}</Text>
        </View>
        <Text style={styles.tag_text}>#{posts.tags}</Text>
      </View>
    </View>
  )
}

export default PostCard

{/*
              

{
  "posts": [
    {
      "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "userId": 9,
      "tags": [
          "history",
          "american",
          "crime"
      ],
      "reactions": 2
    },
    {...},
    {...}
    // 30 items
  ],
  "total": 150,
  "skip": 0,
  "limit": 30
}
*/}