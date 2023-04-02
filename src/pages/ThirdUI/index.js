import React, {useContext} from 'react';
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {SquadContext} from '../../contexts/SquadContext';
import {BudgetContext} from '../../contexts/BudgetContext';
import {styles} from './styles';

export const ThirdUI = ({navigation, route}) => {
  const {squad, setSelectedPlayer} = useContext(SquadContext);
  const {budget, setBudget} = useContext(BudgetContext);

  const handleAddPlayer = playerCost => {
    setBudget(budget - playerCost);
  };

  const handlePress = value => {
    setSelectedPlayer(value);
    navigation.navigate('Add Player');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>"FC Dream Squad"</Text>

      <View style={styles.budgetMainView}>
        <View style={styles.lineContainer}>
          <View style={styles.budgetContainer}></View>
          <Text style={styles.budgetAmnt}>${budget.toLocaleString()}</Text>
        </View>

        <Text style={styles.titleText}>
          Tap on a player position in order to add a new player
        </Text>
      </View>
      <View style={[styles.pitchContainer, {flex: 4.5}]}>
        <Image
          source={require('../../assets/images/pitch.png')}
          style={styles.pitch}
        />
        {/* Goalkeeper */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '3%', left: '43%'}]}
          onPress={() => handlePress(1)}>
          <View style={[styles.jerseyContainer, {top: '3%', left: '43%'}]}>
            {squad[1] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[1].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>

        {/* Defenders */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '32%', left: '5%'}]}
          onPress={() => handlePress(2)}>
          <View style={[styles.jerseyContainer, {top: '32%', left: '5%'}]}>
            {squad[2] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[2].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '40%', left: '30%'}]}
          onPress={() => handlePress(3)}>
          <View style={[styles.jerseyContainer, {top: '40%', left: '30%'}]}>
            {squad[3] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[3].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '40%', left: '57%'}]}
          onPress={() => handlePress(4)}>
          <View style={[styles.jerseyContainer, {top: '40%', left: '57%'}]}>
            {squad[4] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[4].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '32%', left: '78%'}]}
          onPress={() => handlePress(5)}>
          <View style={[styles.jerseyContainer, {top: '32%', left: '78%'}]}>
            {squad[5] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[5].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        {/* Midfielders */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '58%', left: '15%'}]}
          onPress={() => handlePress(6)}>
          <View style={[styles.jerseyContainer, {top: '58%', left: '15%'}]}>
            {squad[6] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[6].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '62%', left: '45%'}]}
          onPress={() => handlePress(7)}>
          <View style={[styles.jerseyContainer, {top: '62%', left: '45%'}]}>
            {squad[7] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[7].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '58%', left: '75%'}]}
          onPress={() => handlePress(8)}>
          <View style={[styles.jerseyContainer, {top: '58%', left: '75%'}]}>
            {squad[8] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[8].id}
              </Text>
            )}

            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        {/* Forwards */}
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '80%', left: '20%'}]}
          onPress={() => handlePress(9)}>
          <View style={[styles.jerseyContainer, {top: '80%', left: '20%'}]}>
            {squad[9] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[9].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '75%', left: '42%'}]}
          onPress={() => handlePress(10)}>
          <View style={[styles.jerseyContainer, {top: '75%', left: '42%'}]}>
            {squad[10] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[10].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '80%', left: '65%'}]}
          onPress={() => handlePress(11)}>
          <View style={[styles.jerseyContainer, {top: '80%', left: '65%'}]}>
            {squad[11] && (
              <Text style={(styles.jerseyContainer, {top: '10%'})}>
                {squad[11].id}
              </Text>
            )}
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={[styles.substituteContainer, {flex: 1}]}>
        <View style={styles._container}>
          <Text style={styles.header}>Benched Players</Text>
          <View style={styles.columnsContainer}>
            <TouchableWithoutFeedback onPress={() => handleAddPlayer(100000)}>
              <Image
                source={require('../../assets/images/sub.png')}
                style={styles._image}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleAddPlayer(100000)}>
              <View>
                <Image
                  source={require('../../assets/images/sub.png')}
                  style={styles._image}
                  resizeMode="contain"
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handleAddPlayer(100000)}>
              <View>
                <Image
                  source={require('../../assets/images/sub.png')}
                  style={styles._image}
                  resizeMode="contain"
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.dashContainer}>
            <View style={styles.leftDashed}>
              {squad[12] ? <Text>+</Text> : <Text>-</Text>}
            </View>
            <View style={styles.middleDashed}>
              {squad[13] ? <Text>+</Text> : <Text>-</Text>}
            </View>
            <View style={styles.rightDashed}>
              {squad[14] ? <Text>+</Text> : <Text>-</Text>}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
