import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MyContext} from './MyContextProvider'; // Import your context

const ComponentB = () => {
  const {value} = useContext(MyContext);

  return (
    <View style={styles.viewStyle}>
      <Text>Value from Context: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {marginTop: 50},
});

export default ComponentB;
