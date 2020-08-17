import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native'
const goalInput = (props) => {
    return (
        <Modal visible={props.visible}>
            <View style={styles.innerContainer}>
                <TextInput
                    style = {styles.inputText}
                    placeholder="enter goals h"
                    onChangeText={(newText) => props.changeHandler(newText)}
                    
                />
                <View style={styles.button}>
                <Button
                    color='red'
                    title="CLOSE"
                    onPress={props.removeModel}
                />
                <Button
                    title="ADD"
                    onPress={props.handleClick}
                />
            </View>
            </View>
        </Modal>

    );
}

const styles = StyleSheet.create({
    innerContainer: {
        justifyContent: "center",
        flex: 1,
        alignItems: "center"
    },
    inputText: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        width: "80%",
        marginBottom: 10
    },
    button : {
        flexDirection:'row',
        justifyContent: 'space-around',
        width: '60%'
    }
})
export default goalInput;

