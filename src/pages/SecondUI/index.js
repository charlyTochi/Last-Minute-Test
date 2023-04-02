import React, {useContext} from 'react';
import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BudgetContext} from '../../contexts/BudgetContext';
import {SquadContext} from '../../contexts/SquadContext';
import {AllPlayers} from '../../constants';
import {styles} from './styles';

const Item = ({
  playerName,
  playerPosition,
  image,
  playerForm,
  playerGoals,
  playerPrice,
  onPress,
}) => (
  <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.item}>
    <View style={[styles.textContainer, {flex: 1.3}]}>
      <Image style={styles.image} source={image} />
    </View>
    <View style={[styles.textContainer, {flex: 4}]}>
      <Text style={styles.playerName}>{playerName}</Text>
      <Text style={styles.playerPosition}>{playerPosition}</Text>
    </View>
    <View style={{flex: 2.3}}>
      <Text style={styles.playerForm}>{playerForm}</Text>
    </View>
    <View style={{flex: 3}}>
      <Text style={styles.playerPrice}>{playerPrice}</Text>
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.playerGoals}>{playerGoals}</Text>
    </View>
  </TouchableOpacity>
);

export const SecondUI = ({navigation}) => {
  const {budget, setBudget} = useContext(BudgetContext);
  const {selectedPlayer, setSquad} = useContext(SquadContext);

  const addPlayer = item => {
    try {
      if (budget >= Number(item.playerPrice)) {
        setBudget(bgt => Number(bgt) - Number(item.playerPrice));
        setSquad(squ => ({...squ, [selectedPlayer]: item}));
        navigation.navigate('Draft your Squad');
      } else {
        Alert.alert('Insufficient Funds');
      }
    } catch (error) {}
  };
  const renderItem = ({item, index}) => (
    <Item
      playerName={item.playerName}
      playerPosition={item.playerPosition}
      playerForm={item.playerForm}
      playerPrice={item.playerPrice}
      playerGoals={item.playerGoals}
      image={item.image}
      key={index}
      onPress={() => addPlayer(item)}
    />
  );

  const CustomCardView = ({title, description, colors}) => {
    return (
      <>
        <LinearGradient
          colors={colors}
          style={styles.linearGradient}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </LinearGradient>
      </>
    );
  };

  return (
    <>
      <View style={styles.card}>
        <CustomCardView
          colors={['#3575a1', '#40959f', '#4ba39c']}
          title={'Postion'}
          description={'Forward'}
        />
        <CustomCardView
          colors={['#4aa49b', '#4aa49c', '#4ba39c']}
          title={'Price'}
          description={'$10 mil v'}
        />

        <CustomCardView
          colors={['#49a09d', '#3e8aa3', '#32769f']}
          title={'Clubs'}
          description={'All Clubs'}
        />
      </View>

      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.lineText}>Budget: ${budget.toLocaleString()}</Text>
      </View>

      <View style={styles.header}>
        <View style={[styles.textContainer, {flex: 2.8}]}>
          <Text style={styles.text}>Player</Text>
        </View>
        <View style={[styles.textContainer, {flex: 1.3}]}>
          <View style={styles.textWithIconContainer}>
            <Text style={[styles.text]}>Form</Text>
            <Image
              source={require('../../assets/images/down-arrow.png')}
              style={{height: 12, width: 10, marginTop: 3}}
            />
          </View>
        </View>
        <View style={[styles.textContainer, {flex: 1.3}]}>
          <View style={styles.textWithIconContainer}>
            <Text style={[styles.text]}>Price</Text>
            <Image
              source={require('../../assets/images/up-arrow.png')}
              style={{height: 10, width: 12}}
            />
          </View>
        </View>
        <View style={[styles.textContainer, {flex: 0.8}]}>
          <View style={styles.textWithIconContainer}>
            <Text style={[styles.text]}>Goals</Text>
            <Image
              source={require('../../assets/images/up-arrow.png')}
              style={{height: 10, width: 10}}
            />
          </View>
        </View>
      </View>
      <FlatList
        data={AllPlayers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={1}
      />
    </>
  );
};
