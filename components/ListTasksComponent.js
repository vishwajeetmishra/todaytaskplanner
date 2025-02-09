import React from "react";
import { useState } from "react";
import { FlatList, StyleSheet, View, Text, Button, Pressable } from "react-native";

export default function ListTasksComponent(props) {

  const Item = ({ title, id }) => (
    <Pressable
      android_ripple={{ color: '#dddddd' }}
      onPress={props.handleTaskDeletion.bind(this, id)}
      style={({pressed}) => pressed && {opacity:0.5}}
    >
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );

  return (
    <React.Fragment>
      <View style={styles.container}>
        <FlatList
          data={props.tasks}
          renderItem={({ item }) => <Item title={item.title} id={item.id} />}
          keyExtractor={item => item.id}
          alwaysBounceVertical={false}
        />
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    width: 380
  },
  item: {
    backgroundColor: '#FFBF00',
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: '#ff4500',
    borderWidth: 1
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#272727'
  },
})