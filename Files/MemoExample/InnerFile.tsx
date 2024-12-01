/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useMemo, useEffect, memo} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

interface PropsInterface {
  countValue: number;
  updateCount(countValue: number): void;
  dummyValue: number;
  updateDummyValue(countValue: number): void;
}

// Memoize the entire component to avoid re-renders if only dummyValue changes
const InnerFile = memo(({ countValue, updateCount, dummyValue, updateDummyValue }: PropsInterface) => {
  // Simulate an expensive computation
  const computedValue = useMemo(() => {
    console.log('Expensive computation for countValue:', countValue);
    return countValue * 2; // Replace this with real logic if needed
  }, [countValue]);

  useEffect(() => {
    console.log('dummyValue changed:', dummyValue);
  }, [dummyValue]);

  console.log('Component re-rendered!');

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'blue'} />
      <Text>Hello World</Text>
      <Text>Computed Value: {computedValue}</Text>
      <Text>dummyValue: {dummyValue}</Text>

      <Button
        style={styles.buttonStyle}
        onPress={() => {
          updateCount(countValue + 1);
          updateDummyValue(dummyValue + 1);
        }}
      >
        Add 1
      </Button>

      <Button
        style={styles.buttonStyle}
        onPress={() => {
          updateCount(countValue);
          console.log('Button Press:', countValue);
        }}
      >
        Just Print
      </Button>

      <Button
        style={styles.buttonStyle}
        onPress={() => updateCount(countValue - 1)}
      >
        Sub 1
      </Button>

      <Button
        style={styles.buttonStyle}
        onPress={() => updateDummyValue(dummyValue - 1)}
      >
        Sub 1 from dummy
      </Button>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 32,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default InnerFile;
