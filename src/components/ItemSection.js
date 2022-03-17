import React from 'react';
import {View, StyleSheet} from 'react-native';

const ItemSection = props => {
  return <View style={styles.viewStyle}>{props.children}</View>;
};

const styles = StyleSheet.create({
  viewStyle: {
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
});

export default ItemSection;
