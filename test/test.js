import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sampleData from 'sampleData.js';

Enzyme.configure({ adapter: new Adapter() });

// test('replies is array', () => {
//   expect(Array.isArray(dataGenFunctions.generateReplies())).toBe(true);
// });
test('fake test should be true', () => {
  expect(2 + 2).toBe(4);
});
// test that comments render to the page
test('correct number of comments render to page', () => {
  const wrapper = shallow(<List list={sampleData} />);
  expect(wrapper.find(<Comment />)).toBe(4);
});

// test that comments show author name

// test that comments show creator logo if author is creator

// test that green line shows up if author is creator
// do this by using classNames

// test that body text is displayed

// test that profile picture is displayed

// test that page renders

// test that css renders

// test that html renders

// test that conditional rendering works correctly

// tests should make sure the user sees the things they should and also that they don't see things they shouldn't