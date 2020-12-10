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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  
  }

  writeData = () => {
    database()
    .ref('/users/123')
    .set({
      name: 'Ada Lovelace',
      age: 31,
    })
    .then(() => console.log('Data set.'));
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
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
            <TextInput
              style={{width: '90%'}}
              onChangeText={(text) => this.setState({username: text})}
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
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity
            style={styles.button}
            // onPress={() => navigation.navigate('ListRoom')}>
            onPress={() => this.writeData()}>

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
