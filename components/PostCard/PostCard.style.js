import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    content_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    header_text: {
        fontSize: 21,
        color: 'black',
        fontWeight: 'bold'
    },
    body_text: {
        fontSize: 19,
        fontStyle: 'italic',
        color: 'gray'
    },
    tag_text: {
        textAlign: 'right',
        fontSize: 17,
        margin: 5,
        fontWeight: 'bold'
    },
    inner_container: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})