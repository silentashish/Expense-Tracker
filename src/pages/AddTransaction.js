import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Picker,
  Header,
  Title,
} from 'native-base';
import {addTransaction} from '../store/actions/transactionAction';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Header as HeaderTop} from './HomeScreen';
import LinearGradient from 'react-native-linear-gradient';

const AddTransaction = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('income');

  const onSubmit = async () => {
    if (!title || !price) {
      return alert('Please fill all fields');
    }
    const id = Math.floor(Math.random() * 100000000);

    const newTransaction = {
      id,
      title,
      price: +price,
      type,
    };
    await dispatch(addTransaction(newTransaction));
    navigation.goBack();
  };

  return (
    <Container>
      <HeaderTop title="Add Expense /Income" />
      <Content>
        <LinearGradient colors={['#bdc3c7', '#2c3e50']} style={styles.form}>
          <Form>
            <Item style={{...styles.item}}>
              <Input
                placeholder="Title"
                onChangeText={(title) => setTitle(title)}
                placeholderTextColor="#fff"
              />
            </Item>
            <Item style={{...styles.item}}>
              <Input
                keyboardType="number-pad"
                placeholder="Price"
                onChangeText={(price) => setPrice(price)}
                placeholderTextColor="#fff"
              />
            </Item>
            <Item style={{...styles.item}}>
              <Picker
                note
                mode="dropdown"
                style={{width: 120, color: '#fff'}}
                selectedValue={type}
                onValueChange={(value) => setType(value)}>
                <Picker.Item label="Income" value="income" />
                <Picker.Item label="Expense" value="expense" />
              </Picker>
            </Item>
            <Button
              block
              onPress={() => onSubmit()}
              style={{marginHorizontal: 20}}>
              <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
                Add Transaction
              </Text>
            </Button>
          </Form>
        </LinearGradient>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 20,
    width: '90%',
  },
  form: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTransaction;
