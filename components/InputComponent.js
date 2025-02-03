import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function InputComponent(props) {
    const [enteredTxt, setTxt] = useState('');
    return (
        <React.Fragment>
            <View style={{ width: '80%' }}>
                <TextInput style={styles.inputTxt} placeholderTextColor="#ffffff" placeholder="Enter task" onChangeText={txt => setTxt(txt)} />
                <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-around' }}>
                    <Button onPress={{}} title="Add task" color="#800080" />
                    <Button onPress={{}} title="Cancel" color="#800080"/>
                </View>
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    inputTxt: {
        borderWidth: 1,
        borderColor: '#ff6347',
        padding: 12,
        color: '#ffffff',
        borderRadius: 5
    }
})