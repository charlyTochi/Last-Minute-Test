import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Home} from '../src/Home';

it('check function and state test case', () => {
  let HomeData = renderer.create(<Home />).getInstance();
  console.log(HomeData);
  expect(HomeData.change(2)).toEqual(20);
});
