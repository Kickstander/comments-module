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

describe('List component', () => {
  test('does the list component render', () => {
    const wrapper = shallow(<List list={sampleData} />);
    expect(wrapper.exists()).toBe(true);
  })
  test('correct number of comments render to page', () => {
    const wrapper = mount(<List list={sampleData} />);
    expect(wrapper.find(Comment).length).toBe(4);
  });
  test('does list component break when there are no comments', () => {
    const wrapper = shallow(<List list={[]} />);
    expect(wrapper.find(Comment).length).toBe(0);
  });
});


// test that comments show author name
describe('Comment component', () => {
  test('does the comment component render', () => {
    const wrapper = shallow(<Comment comment={sampleData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('does the author name render', () => {
    const wrapper = shallow(<Comment comment={sampleData[0]} />);
    expect(wrapper.find('.authorName')).toBeDefined();
  });
});

describe('Replies component', () => {
  test('does the replies component render', () => {
    const wrapper = shallow(<Replies replies={sampleData[0].replies} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('does replies component break when there are no replies', () => {
    const wrapper = shallow(<Replies replies={[]} />);
    expect(wrapper.find(Reply).length).toBe(0);
  });
});

describe('Reply component', () => {
  test('does the reply component render', () => {
    const wrapper = shallow(<Reply reply={sampleData[0].replies[0]} />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('App component', () => {
  test('does the app component render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Post component', () => {
  test('does the post component render', () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.exists()).toBe(true);
  });
});


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