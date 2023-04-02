import React, {useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {SquadContext} from '../../contexts/SquadContext';
import {BudgetContext} from '../../contexts/BudgetContext';
import {styles} from './styles';

export const FirstUI = ({navigation, route}) => {
  const {setSelectedPlayer} = useContext(SquadContext);
  const {budget} = useContext(BudgetContext);

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
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '32%', left: '82%'}]}
          onPress={() => handlePress(5)}>
          <View style={[styles.jerseyContainer, {top: '32%', left: '82%'}]}>
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
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '80%', left: '43%'}]}
          onPress={() => handlePress(10)}>
          <View style={[styles.jerseyContainer, {top: '80%', left: '43%'}]}>
            <Image
              source={require('../../assets/images/white-jersey.png')}
              style={styles.jersey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.jerseyContainer, {top: '80%', left: '65%'}]}
          onPress={() => handlePress(10)}>
          <View style={[styles.jerseyContainer, {top: '80%', left: '65%'}]}>
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
            <TouchableWithoutFeedback onPress={() => handlePress(13)}>
              <Image
                source={require('../../assets/images/sub.png')}
                style={styles._image}
                resizeMode="contain"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handlePress(14)}>
              <View>
                <Image
                  source={require('../../assets/images/sub.png')}
                  style={styles._image}
                  resizeMode="contain"
                />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => handlePress(15)}>
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
              <Text>-</Text>
            </View>
            <View style={styles.middleDashed}>
              <Text>-</Text>
            </View>
            <View style={styles.rightDashed}>
              <Text>-</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
