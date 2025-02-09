import React, { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

export default function InputComponent(props) {
    const [enteredTask, setEnteredTxt] = useState('');

    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTxt('');
    }

    return (
        <React.Fragment>
            <Modal animationType="slide" visible={props.modalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={styles.inputTxt}
                            placeholderTextColor="#272727"
                            placeholder="Enter task"
                            onChangeText={txt => setEnteredTxt(txt)} value={enteredTask} />
                        <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-around' }}>
                            <Button onPress={addTaskHandler} title="Add task" />
                            <Button onPress={props.modalClose} title="Cancel" />
                        </View>
                    </View>
                </View>
            </Modal>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    inputTxt: {
        borderWidth: 1,
        width: 320,
        borderColor: 'grey',
        padding: 12,
        borderRadius: 5
    },
    modalContainer: {
        backgroundColor: '#272727',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#fffaf0',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})