import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Button = () => {
  return (
    <TouchableOpacity>
      <MaterialIcons name={'10k'} size={30} color={'black'} />
      <Text style={styles.text}>Button</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: 'Flappy Bird',
  },
});
export default Button;
