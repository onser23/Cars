import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Item = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderBottomWidth: 0,
    shadowColor: 'black',
    shadowOffset: {with: 1, height: 1},
    shadowOpacity: 0.1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
});

export default Item;
