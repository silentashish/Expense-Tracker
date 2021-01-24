import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
/* Components */
import {HomeScreen, AddTransaction, StartScreen} from '../pages';

/* Store */
import store, {persistor} from '../store';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{
                title: 'Expense tracker App',
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Expense tracker App',
              }}
            />
            <Stack.Screen
              name="Add"
              component={AddTransaction}
              options={{title: 'Add expense'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
