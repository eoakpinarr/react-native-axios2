import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import styles from './Pages.style'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import PostCard from '../../components/PostCard';

const Posts = () => {

    const { data, loading, error } = useFetch('https://dummyjson.com/posts');

    if (loading) { return <Loading /> }
    if (error) { return <Error /> }

    const renderPost = ({ item }) => <PostCard posts={item}/>

    return (
        <View style= {styles.container}>
            <View>
                <Text style= {styles.header_text}>DUMMY POSTS</Text>
            </View>
            <FlatList
                keyExtractor={item => item.id}
                renderItem={renderPost}
                data={data.posts}
            />
        </View>
    )
}

export default Posts