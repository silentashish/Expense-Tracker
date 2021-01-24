import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import {PieChart} from 'react-native-chart-kit';

const Diagram = ({navigation}) => {
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
      <PieChart
        data={[
          {
            name: 'Income',
            population: income(),
            color: 'green',
            legendFontColor: 'white',
            legendFontSize: 15,
          },
          {
            name: 'Expense',
            population: expense(),
            color: 'red',
            legendFontColor: 'white',
            legendFontSize: 15,
          },
        ]}
        width={300}
        height={140}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor={'population'}
        backgroundColor={'transparent'}
        paddingLeft={'10'}
        // center={[10, 50]}
        absolute
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  Box: {
    width: '100%',
    height: 180,
    borderRadius: 15,
    flexDirection: 'row',
    padding: 22,
    marginTop: 15,
  },
});

export default Diagram;
