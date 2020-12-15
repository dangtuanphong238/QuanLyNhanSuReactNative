import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import database from '@react-native-firebase/database';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      repass: '',
    };
  }

  ThemTaiKhoan = async () => {
    const ref = database().ref('QuanLyNhanSu/TaiKhoan/' + this.state.username);
    ref
      .set({
        username: this.state.username,
        password: this.state.password,
      })
      .then(() => console.log('Data seted'));
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Text style={{fontSize: 30, marginVertical: 30}}>Đăng Ký</Text>
        </View>
        <View style={styles.view1}>
          <Text>Tài khoản:</Text>
          <View style={styles.textInput}>
            <Image
              source={require('../../assets/user_icon.png')}
              style={{marginStart: 20}}
            />
            <TextInput
              style={{width: '90%'}}
              onChangeText={(username) => this.setState({username: username})}
            />
          </View>
        </View>
        <View style={styles.view2}>
          <Text>Mật khẩu:</Text>
          <View style={styles.textInput}>
            <Image
              source={require('../../assets/pass_icon.png')}
              style={{marginStart: 20}}
            />
            <TextInput
              style={{width: '90%'}}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
        </View>
        <View style={styles.view1}>
          <Text>Nhập lại mật khẩu:</Text>
          <View style={styles.textInput}>
            <Image
              source={require('../../assets/pass_icon.png')}
              style={{marginStart: 20}}
            />
            <TextInput style={{width: '90%'}} secureTextEntry={true} />
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.ThemTaiKhoan()}>
            <Text>Đăng ký</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerView}>
          <Text>Bạn đã có tài khoản? </Text>
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={{color: 'blue'}}>
            Đăng nhập
          </Text>
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
  centerView: {flexDirection: 'row', justifyContent: 'center'},
  textInput: {
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
});
