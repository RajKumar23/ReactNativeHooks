/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import InnerFile from './InnerFile';

const App = () => {
  const [count, setCount] = useState(0);
  const [dummyValue, setDummyValue] = useState(0);

  /* const computedValue = useMemo(() => {
    return console.log('count value updated ' + count);
  }, [count]); // Recalculates only when `data` changes

  useEffect(() => {
    console.log(
      '\nPrinting the new value of count from useEffect ',
      count,
    );
  }, [count]); */

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'blue'} />
      <InnerFile
        countValue={count}
        updateCount={(countValue: number) => {
          setCount(countValue);
        }}
        dummyValue={dummyValue}
        updateDummyValue={(countValue: number) => {
          setDummyValue(countValue);
        }}
      />
      {/* {computedValue} */}
    </SafeAreaView>
  );
};

export default App;
