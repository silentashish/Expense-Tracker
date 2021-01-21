import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {secondaryColor} from '../Utils';

export default (props) => {
  const {onPress, children, id, check, status} = props;
  const styles = _styles(props);

  const success = check && status ? true : false;
  const failure = check && id === check && !status ? true : false;

  return (
    <TouchableOpacity
      disabled={check}
      style={[
        styles.button,
        success && styles.success,
        failure && styles.failure,
      ]}
      onPress={onPress}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  );
};

const _styles = ({full}) => {
  return ScaledSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20@vs',
      // borderTopRightRadius: '0@ms',
      borderRadius: '10@ms',
      paddingRight: '20@ms',
      paddingLeft: '20@ms',
      borderColor: secondaryColor,
      borderWidth: 2,
      minWidth: full ? '100%' : '46%',
      maxWidth: full ? '100%' : '46%',
      paddingTop: '8@ms',
      paddingBottom: '8@ms',
      alignSelf: 'center',
    },
    txt: {
      color: secondaryColor,
      fontWeight: 'bold',
      fontSize: '18@ms',
      maxWidth: '100%',
      textAlign: 'center',
    },
    success: {
      backgroundColor: 'green',
    },
    failure: {
      backgroundColor: 'red',
    },
  });
};
