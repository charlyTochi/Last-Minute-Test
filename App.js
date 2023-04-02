import React from 'react';
import {SecondUI} from './src/pages/SecondUI';
import {FirstUI} from './src/pages/FirstUI';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BudgetProvider} from './src/contexts/BudgetContext';
import {SquadContext, SquadProvider} from './src/contexts/SquadContext';
import { ThirdUI } from './src/pages/ThirdUI';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SquadProvider>
      <BudgetProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: 'center',
              headerTitle: props => (
                <View style={styles.center}>
                  <Text style={styles.title}>{props.children}</Text>
                </View>
              ),
            }}>
            <Stack.Screen name="Draft Your Squad" component={FirstUI} />
            <Stack.Screen
              name="Add Player"
              component={SecondUI}
              options={{
                headerRight: () => (
                  <TouchableOpacity>
                    <Image
                      source={require('./src/assets/images/search.png')}
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
            <Stack.Screen name="Draft your Squad" component={ThirdUI} />
          </Stack.Navigator>
        </NavigationContainer>
      </BudgetProvider>
    </SquadProvider>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
});
export default App;
