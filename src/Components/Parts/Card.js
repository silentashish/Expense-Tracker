import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';

const Balance = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);

  const prices = transactions.map((transaction) => transaction.price);

  const totalPrice = () => {
    let totalPrice = 0;
    transactions.map((transactions) => {
      if (transactions.type === 'income') {
        totalPrice += transactions.price;
      } else {
        totalPrice -= transactions.price;
      }
    });
    return totalPrice;
  };

  const income = () => {
    let totalIncome = 0;
    transactions.map((transactions) => {
      if (transactions.type === 'income') {
        totalIncome += transactions.price;
      }
    });
    return totalIncome;
  };

  const expense = () => {
    let totalexpense = 0;
    transactions.map((transactions) => {
      if (transactions.type === 'expense') {
        totalexpense += transactions.price;
      }
    });
    return totalexpense;
  };

  return (
    <LinearGradient colors={['#4ECDC4', '#556270']} style={styles.Box}>
      <View
        style={{width: '70%', alignItems: 'flex-start', alignSelf: 'center'}}>
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            fontFamily: 'Lato-Regular',
            fontWeight: '700',
          }}>
          Wallet
        </Text>
        <Text
          style={{
            fontFamily: 'Lato-Medium',
            fontSize: 32,
            color: '#fff',
            fontWeight: '700',
          }}>
          {totalPrice()} $
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          width: '30%',
          height: '100%',
        }}>
        <View style={{flex: 1}}>
          <Button
            light
            style={{
              padding: 7,
              paddingHorizontal: 25,
              borderWidth: 1,
              borderColor: '#fff',
              backgroundColor: '#19547b',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              navigation.navigate('Add');
            }}>
            <Text style={{color: '#fff', fontWeight: '700', fontSize: 15}}>
              Add
            </Text>
          </Button>

          <Text
            style={{
              marginTop: 17,
              color: '#fff',
              fontSize: 15,
              fontWeight: '700',
            }}>
            Expense
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}>
            {expense()} $
          </Text>
          <Text
            style={{
              marginTop: 17,
              color: '#fff',
              fontSize: 15,
              fontWeight: '700',
            }}>
            Income
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '700',
            }}>
            {income()} $
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
  },
});

export default Balance;
