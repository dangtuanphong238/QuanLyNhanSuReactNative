import React, { Component } from 'react'
import { View, StyleSheet, ImageBackground , Text} from 'react-native'
export default class Splash extends Component{
    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.replace("SignIn");
        }, 1500)
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textTitle}>Quản lý nhân sự</Text>
                <ImageBackground source={require('../../assets/splash_icon.png')} style={styles.imgBackground}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center', 
        alignItems:'center', 
        backgroundColor:'#Fe8b58', 
        flex:1
    },
    textTitle:{
        flex:2, 
        marginTop:50, 
        fontSize:30
    },
    imgBackground:{
        flex:4,
        width:150,
        height:150
    }
})