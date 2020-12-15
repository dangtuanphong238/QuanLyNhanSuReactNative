import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  ToastAndroid,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';

export default class AddStaff extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      tennv: '',
      ngaysinh: '',
      sdt: '',
      cmnd: '',
      quequan: '',
      chucvu: '',
      photo: '',
    };
  }

  handleChoosePhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then((image) => {
        this.setState({photo: image.path})
      console.log(image.path);
    });
  };

  uploadImage = () => {
    const task = storage().ref(`/ImageFood/${this.state.tennv}/`).putFile(this.state.photo);
    task.on('state_changed', snapshot => {
      console.log("snapshot: "+snapshot)
    });
    task.then(() => {
      alert("Thêm nhân viên thành công!"),
      this.setState({photo: ''})
    });
   
  }

  ThemNhanVien = async() => {
    const {tennv, ngaysinh, sdt, cmnd, quequan, chucvu, photo} = this.state;

    if(tennv != '' && ngaysinh != '' && sdt != '' && cmnd != '' 
      && quequan != '' && chucvu != '' && photo != '')
      {
        const ref = database().ref(`QuanLyNhanSu/NhanVien/${tennv}`);
        await ref
          .set({
            tennv: this.state.tennv,
            ngaysinh: this.state.ngaysinh,
            sdt: this.state.sdt,
            cmnd: this.state.cmnd,
            quequan: this.state.quequan,
            chucvu: this.state.chucvu,
            photo: this.state.tennv,
          })
          .then(() => console.log('Data seted'));
    
        await this.uploadImage()
      }
      else{
        alert("Vui lòng nhập đầy đủ các trường!");
      }
    
  };

  render() {
    const {photo} = this.state;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.centerView}>
          <Text style={styles.viewTieude}>THÊM NHÂN VIÊN</Text>
        </View>
        <View style={styles.view1}>
          <Text> Tên Nhân Viên : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({tennv: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Ngày Sinh : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ngaysinh: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Số Điện Thoại : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({sdt: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> CMND : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({cmnd: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Quê Quán : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({quequan: text})}
          />
        </View>
        <View style={styles.view1}>
          <Text> Chức Vụ : </Text>
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({chucvu: text})}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.view1}>
            <Text style={styles.view3}> Chọn hình : </Text>
          </View>
          <View style={styles.view3}>
            <TouchableOpacity onPress={this.handleChoosePhoto}>
             <Image source={require('../../assets/camera.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view3, {margin:20}}>
          {photo == '' ? <Image
            style={{marginHorizontal: 10}}
          /> : <Image
            source={{uri: this.state.photo}}
            style={{marginHorizontal: 10,width:200,height:200}}
          />}
        </View>


        <View>
          <View style={styles.view3}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.ThemNhanVien()}>
              <Image
                source={require('../../assets/add.png')}
                style={{marginHorizontal: 10}}
              />
              <Text style={styles.tieude1}>Thêm Nhân Viên</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#99ffff'},
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
    fontSize: 16,
    marginVertical: 10,
    color: '#FF0000',
  },
  tieude1: {
    fontSize: 16,
    marginVertical: 5,
    color: '#FF0000',
  },
  vuithoi: {
    marginHorizontal: 5,
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
