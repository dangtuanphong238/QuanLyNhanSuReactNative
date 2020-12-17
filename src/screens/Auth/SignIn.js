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
import AlertSuccess from '../../shared/components/AlertSuccess';
import AlertFailed from '../../shared/components/AlertFailed';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isSuccess: false,
      isFailed: false,
    };
  }

  // componentDidMount() {
  //   this.getData();
  // }

  //get User + pass
  getData = async () => {
    await database()
      .ref('/QuanLyNhanSu/TaiKhoan/'+ this.state.username)
      .once('value')
      .then((snapshot) => {
        console.log('User data: ', snapshot.val());
        // this.setState({data:snapshot.val()})
        if (
          snapshot.val() != '' &&
          this.state.username != '' &&
          this.state.password != ''
        ) {
          if (
            snapshot.val().username == this.state.username &&
            snapshot.val().password == this.state.password
          ) {
            this.toggleIsSuccess()
            setTimeout(() => {
              this.toggleIsSuccess()
              this.props.navigation.replace('ListRoom')
            },2000)
          } else {
            this.toggleIsFailed()
            setTimeout(()=>{
              this.toggleIsFailed()
            },2000)
            console.log('failed');
          }
        }
      });
  };

  toggleIsSuccess = () => {
    this.setState({isSuccess: !this.state.isSuccess})
  }

  toggleIsFailed = () => {
    this.setState({isFailed: !this.state.isFailed})
  }

  render() {
    //khai bao
    const navigation = this.props.navigation;

    return (
      <View style={styles.container}>
        <AlertSuccess isVisible={this.state.isSuccess} text="Login Success" />
        <AlertFailed isVisible={this.state.isFailed} text="Login Failed" />

        <View style={styles.centerView}>
          <Text style={{fontSize: 30, marginVertical: 30}}>Đăng Nhập</Text>
        </View>
        <View style={styles.view1}>
          <Text>Tài khoản:</Text>
          <View style={styles.textInput}>
            <Image
              source={require('../../assets/user_icon.png')}
              style={{marginStart: 20}}
            />
            {/* textInput */}
            <TextInput
              style={{width: '90%'}}
              onChangeText={(user) => this.setState({username: user})}
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

            {/* textInput */}
            <TextInput
              style={{width: '90%'}}
              secureTextEntry={true}
              onChangeText={(pass) => this.setState({password: pass})}
            />
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.getData()}>
            <Text>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.centerView}>
          <Text>Bạn chưa có tài khoản? </Text>
          <Text
            onPress={() => navigation.navigate('SignUp')}
            style={{color: 'blue'}}>
            Đăng ký
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
