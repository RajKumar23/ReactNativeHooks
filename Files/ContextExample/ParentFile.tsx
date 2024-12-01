import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {MyProvider} from './MyContextProvider'; // Import your context provider
import ComponentA from './ComponentA'; // Import Component A
import ComponentB from './ComponentB'; // Import Component B

const App = () => {
  return (
    <SafeAreaView>
      <MyProvider>
        <View style={style.viewStyle}>
          <ComponentB />
          <ComponentA />
        </View>
      </MyProvider>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  viewStyle: {alignItems: 'center'},
});

export default App;
