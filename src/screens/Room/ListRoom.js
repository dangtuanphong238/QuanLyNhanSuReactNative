import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class ListRoom extends Component{
    render() {
        return (
            <View style = {styles.container}>
                <View style={styles.centerView}>
                <Text style={styles.tieude1}>DANH SÁCH PHÒNG BAN</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#99ffff'},
    view1: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginVertical: 5,
    },
    view2: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textInput: {
        marginHorizontal: 20,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    tieude: {
        fontSize: 16,
        marginVertical: 10,
        color: '#FF0000',
    },
    tieude1: {
        fontSize: 16,
        marginVertical: 5,
        color: '#FF0000',
    },
    vuithoi : 
    {
        marginHorizontal : 5,
        marginVertical: 5,
    },
    viewTieude: {
        color: '#FF0000',
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginTop: 20,
      },
});