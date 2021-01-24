import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
import {Container, ListItem, Body, Right} from 'native-base';
import Card from '../Components/Parts/Card';
import Empty from '../Components/Parts/Empty';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector, useDispatch} from 'react-redux';
import {deleteTransaction} from '../store/actions/transactionAction';
import {styles} from './StartScreen/styles';
import LinearGradient from 'react-native-linear-gradient';
import Diagram from '../Components/Parts/Diagram';

function Item({title, id, price, type}) {
  const dispatch = useDispatch();

  return (
    <View
      style={{
        marginVertical: 3,
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: '#fff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
      }}>
      <ListItem>
        <TouchableOpacity>
          <Icon
            onPress={() => {
              dispatch(deleteTransaction(id));
            }}
            name="delete"
            size={30}
            color="tomato"
          />
        </TouchableOpacity>

        <Body>
          <Text style={{fontSize: 17, fontWeight: '700', marginLeft: 10}}>
            {title}
          </Text>
        </Body>

        <Right>
          <Text
            style={{
              fontFamily: 'Lato-Bold',
              fontSize: 14,
              fontWeight: '400',
              color: type === 'income' ? '#32CD32' : '#ff4500',
            }}>
            {price > 0 ? `${price} $` : `${Math.abs(price)} $`}
          </Text>
        </Right>
      </ListItem>
    </View>
  );
}

const Header = ({title}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.txt}>{title ?? 'Expense Tracker'}</Text>
    </View>
  );
};

export {Header};

const HomeScreen = ({navigation}) => {
  const {transactions} = useSelector((state) => state.transactions);
  console.log('Transaction is', transactions);
  return (
    <LinearGradient colors={['#bdc3c7', '#2c3e50']} style={styles.wholeView}>
      <Header />
      <Animated.View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Card navigation={navigation} />
        <Diagram />
      </Animated.View>

      <View style={{flex: 1, marginTop: 80}}>
        {transactions.length > 0 ? (
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={transactions}
            renderItem={({item}) => (
              <Item
                title={item.title}
                price={item.price}
                id={item.id}
                type={item.type}
              />
            )}
          />
        ) : (
          <Empty />
        )}
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
