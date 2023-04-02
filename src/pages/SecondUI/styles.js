import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
    marginHorizontal: 16,
    borderColor: 'grey',
    borderWidth: 0.3,
    borderRadius: 6,
    elevation: 0.5,
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: 25,
    height: 25,
    left: 8,
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column',
  },
  playerName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  playerPosition: {
    fontSize: 12,
    color: 'ash',
    marginBottom: 8,
  },
  playerForm: {
    fontSize: 11,
    color: 'black',
  },
  playerPrice: {
    fontSize: 13,
    color: 'black',
  },
  playerGoals: {
    fontSize: 13,
    color: 'black',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    margin: 10,
  },
  column: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'green',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linearGradient: {
    height: 50,
    margin: 2,
    width: 123,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 12,
    marginHorizontal: 16,
  },

  lineContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#dedfdf',
  },
  lineText: {
    position: 'absolute',
    top: -10,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    fontSize: 12,
    color: 'black',
  },

  textWithIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },
});
