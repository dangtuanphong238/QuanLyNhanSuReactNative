import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Modal from 'react-native-modal';

export default class AlertSuccess extends Component {
    render() {
        const { isVisible, text } = this.props;
        return (
            <Modal
                animationIn='zoomIn'
                isVisible={isVisible}>
                <View style={styles.container}>
                    <AntDesign
                        name="checkcircle"
                        color={'#00C27F'}
                        size={30}
                    />
                    <Text style={styles.txt}>{text}</Text>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 50
    },
    txt: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
    }
});
