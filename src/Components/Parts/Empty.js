import React from 'react';
import {View, Text} from 'react-native';

const Empty = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
        No Transaction Yet
      </Text>
    </View>
  );
};

export default Empty;
