import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

export default class UpdateStaff extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.centerView}>
                    <Text style={styles.viewTieude}>SỬA NHÂN VIÊN</Text>
                </View>
                <View style={styles.view1}>
                    <Text> Tên Nhân Viên : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.view1}>
                    <Text> Ngày Sinh : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.view1}>
                    <Text> Số Điện Thoại : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.view1}>
                    <Text> CMND : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.view1}>
                    <Text> Quê Quán : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.view1}>
                    <Text> Chức Vụ : </Text>
                </View>
                <View>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.view1}>
                        <Text style={styles.view4}> Chọn hình : </Text>
                    </View>
                    <View style={styles.view3}>
                        <Image source={require('../../assets/camera.png')} style={{ marginHorizontal: 10}} />
                    </View>
                </View>
                <View style={styles.view3}> 
                <Image source={require('../../assets/picture.png')} style={{marginHorizontal:10}}/>
                </View>
                <View>
                    <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                        <View style={styles.vuithoi}>
                            <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/idea.png')}/>
                                <Text style={styles.tieude}>Sửa Nhân Viên</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginHorizontal : 5}, styles.view3}>
                            <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/clear.png')} />
                                <Text style={styles.tieude}>Xóa Nhân Viên</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >


        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#99ffff' },
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
    view4: {
        marginVertical :10,
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


