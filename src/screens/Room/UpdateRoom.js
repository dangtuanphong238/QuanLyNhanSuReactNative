import React, { Component} from 'react'
import { View, Text,StyleSheet, TouchableOpacity,Image} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class UpdateRoom extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.centerView}>
                <Text style={styles.tieude1}>SỬA NhÂN VIÊN</Text>
                </View>
                <View style={styles.view1}>
                <Text> Tên Phòng : </Text>
                </View>
               <View>
                   <TextInput style={styles.textInput}></TextInput>
               </View>
               <View style={styles.view1}>
                <Text> Số Lượng Người : </Text>
                </View>
               <View>
                   <TextInput style={styles.textInput}></TextInput>
               </View>
               <View>
                   <View style={{flexDirection : "row", marginHorizontal: 20, marginRight : 5}}>
                   <View style={styles.view3}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/idea.png')} style={{marginHorizontal:10}}/>
                        <Text style = {styles.tieude}>Sửa Phòng</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view3}>
                    <TouchableOpacity style={styles.button}>
                    <Image source={require('../../assets/clear.png')} style={{marginHorizontal:10}}/>
                        <Text style = {styles.tieude}>Xóa Phòng</Text>
                    </TouchableOpacity>
                </View>
                   </View> 
               </View>
            </View>
            
          
        )
    }
}
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#99ffff'},
    view1: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: 20,
      marginVertical: 20,
    },
    view2: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginHorizontal: 20,
    },
    view3: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
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
        marginHorizontal: 8,
      borderRadius: 20,
      borderColor: '#000',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 15,
    },
    tieude : {
        fontSize: 16,
        marginVertical: 10, 
        color:'#FF0000',
    },
    tieude1 : {
        fontSize: 30,
        marginVertical: 30, 
        color:'#FF0000',
    }
});

 
