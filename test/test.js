import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sampleData from './sampledata.js';
import List from '../client/src/components/List';
import App from '../client/src/components/App';
import Comment from '../client/src/components/Comment';
import Post from '../client/src/components/Post';
import Replies from '../client/src/components/Replies';
import Reply from '../client/src/components/Reply';

Enzyme.configure({ adapter: new Adapter() });

test('fakedata is array', () => {
  expect(Array.isArray(sampleData)).toBe(true);
});

test('fake test should be true', () => {
  expect(2 + 2).toBe(4);
});

// test that comments render to the page
describe('List component', () => {
  test('correct number of comments render to page', () => {
    const wrapper = mount(<List list={sampleData} />);
    expect(wrapper.find('Comment')).to.have.lengthOf(4);
  });
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