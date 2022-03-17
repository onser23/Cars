import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.textStyling}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'gainsboro',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
  },
  textStyling: {
    fontSize: 22,
  },
});

export default Header;
