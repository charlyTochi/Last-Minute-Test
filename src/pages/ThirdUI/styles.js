import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  _container: {
    borderRadius: 10,
    backgroundColor: '#ace2bd',
    alignItems: 'center',
    justifyContent: 'center',
    width: 210,
  },
  columnsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dashContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginTop: 5,
  },
  _column: {
    alignItems: 'center',
    marginTop: -20,
  },
  middleDashed: {
    alignItems: 'center',
    marginRight: 20,
    marginTop: -20,
  },
  rightDashed: {
    alignItems: 'center',
    marginLeft: 20,
    marginTop: -20,
  },
  leftDashed: {
    alignItems: 'center',
    marginTop: -20,
    marginRight: 40,
  },
  _image: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
  pitchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pitch: {
    width: '100%',
    height: '100%',
  },
  jerseyContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
  },
  jersey: {
    width: 43,
    height: 43,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  substituteContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008738',
    height: 900,
  },
  lineContainer: {
    flex: 1,
    alignItems: 'center',
  },
  line: {
    width: '100%',
    height: 14,
    backgroundColor: 'blue',
  },
  lineText: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    fontSize: 12,
    color: 'black',
  },
  title: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: '#4fa090',
  },
  budgetContainer: {
    position: 'absolute',
    top: 25,
    marginRight: 2,
    width: '95%',
    height: 2,
    backgroundColor: '#dedfdf',
  },
  budgetAmnt: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    fontSize: 12,
    color: 'grey',
    marginTop: 17,
    fontWeight: 'bold',
  },
  budgetMainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.7,
  },
  titleText: {color: 'grey', fontSize: 12, marginBottom: 5},
});
