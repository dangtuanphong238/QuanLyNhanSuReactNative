import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

export default class AddRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tenPhong: '',
      soLuongNguoi: '',
    };
  }

  ThemPhong = () =>{
    const ref = database().ref('QuanLyNhanSu/PhongBan/').push();
    ref
      .set({
        tenphong: this.state.tenPhong,
        soluongnguoi: this.state.soLuongNguoi,
      })
      .then(() => console.log('Data seted'));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Text style={styles.tieude}>THÊM PHÒNG BAN</Text>
        </View>
        <View style={styles.view1}>
          <Text> Tên Phòng : </Text>
        </View>
        <View>
          <TextInput 
            style={styles.textInput} 
            onChangeText = {(text) => this.setState({tenPhong:text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Số Lượng Người : </Text>
        </View>
        <View>
          <TextInput 
            style={styles.textInput}
            onChangeText = {(text) => this.setState({soLuongNguoi:text})}
            />
        </View>
        <View>
          <View style={styles.view3}>
            <TouchableOpacity style={styles.button} onPress={ () => this.ThemPhong()}>
              <Image
                source={require('../../assets/add.png')}
                style={{marginHorizontal: 10}}
              />
              <Text>Thêm Phòng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
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
    justifyContent: 'center',
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
    fontSize: 30,
    marginVertical: 30,
    color: '#FF0000',
  },
});
