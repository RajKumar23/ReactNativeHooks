import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {MyContext} from './MyContextProvider'; // Import your context
import {Button} from 'react-native-paper';

const ComponentA = () => {
  const {setValue} = useContext(MyContext);
  const [PressCount, setPressCount] = useState(0);
  useEffect(() => {
    setValue('New Value ' + PressCount);
  }, [PressCount, setValue]);

  return (
    <View style={styles.componentStyle}>
      <Button
        // style={styles.buttonStyle}
        mode="contained"
        onPress={() => setPressCount(prevCount => prevCount + 1)}>
        Change Value
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  componentStyle: {
    justifyContent: 'center',
  },
});

export default ComponentA;
