import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert,TouchableOpacity} from 'react-native';
import {
  FlatList,
} from 'react-native-gesture-handler';
import flatListData from '../../data/flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRowKey: null,
    };
  }

  render() {
    const swipeSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Aleft',
              'Bạn có chắc chắn muốn xóa?',
              [
                {
                  text: 'Không',
                  onPress: () => console.log('Đã hủy'),
                  style: 'cancel',
                },
                {
                  text: 'Có',
                  onPress: () => {
                    flatListData.splice(this.props.index, 1);
                    //refesh list:
                    this.props.parentFlatList.refeshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSettings}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: this.props.index % 2 == 0 ? 'orange' : 'green',
          }}>
          <Image
            source={{uri: this.props.item.imageUrl}}
            style={{width: 100, height: 100, margin: 5}}
          />
          <View style={{flexDirection: 'column', flex: 1}}>
            <Text style={styles.flatListItem}>{this.props.item.tenphong}</Text>
            <Text style={styles.flatListItem}>
              {this.props.item.soluongnguoi}
            </Text>
          </View>
        </View>
        <View style={{height: 1, backgroundColor: 'white'}}></View>
      </Swipeout>
    );
  }
}

export default class ListRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteRowKey: null,
    };
  }

  refeshFlatList = (deleteKey) => {
    this.setState((prevState) => {
      return {
        deleteRowKey: deleteKey,
      };
    });
  };

  _onPressAdd() {
    alert('Add');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          {/* <Text style={styles.tieude1}>DANH SÁCH PHÒNG BAN</Text> */}
          <TouchableOpacity
            style={{marginRight: 10}}
            underlayColor="tomato"
            onPress={()=>this._onPressAdd()}>
            <Image
              style={{width: 35, height: 35}}
              source={require('../../assets/ic_add_24.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={flatListData}
            renderItem={({item, index}) => {
              return (
                <FlatListItem item={item} index={index} parentFlatList={this} />
              );
            }}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },
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
    backgroundColor: 'tomato',
    height: 64,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
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
    marginVertical: 10,
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
