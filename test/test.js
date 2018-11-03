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
  test('does the background div styles render', () => {
    const wrapper = shallow(<List list={sampleData} />);
    expect(wrapper.find('.backgroundDiv').exists()).toBe(true);
  });
});


describe('Comment component', () => {
  test('does the comment component render', () => {
    const wrapper = shallow(<Comment comment={sampleData[0]} />);
    expect(wrapper.exists()).toBe(true);
  });
  test('does the author name render', () => {
    const wrapper = shallow(<Comment comment={sampleData[0]} />);
    expect(wrapper.find('.authorName')).toBeDefined();
  });
  test('does the green bar render on creator comments', () => {
    const wrapper = shallow(<Comment comment={sampleData[2]} />);
    expect(wrapper.find('.greenbar').exists()).toBe(true);
  });
  test('does the green bar render on non-creator comments', () => {
    const wrapper = shallow(<Comment comment={sampleData[1]} />);
    expect(wrapper.find('.greenbar').exists()).toBe(false);
  });
  test('does the creator logo render on creator comments', () => {
    const wrapper = shallow(<Comment comment={sampleData[2]} />);
    expect(wrapper.find('.creatorLogo').exists()).toBe(true);
  });
  test('does the creator logo render on non-creator comments', () => {
    const wrapper = shallow(<Comment comment={sampleData[1]} />);
    expect(wrapper.find('.creatorLogo').exists()).toBe(false);
  });
  test('does the profile picture render', () => {
    const wrapper = shallow(<Comment comment={sampleData[0]} />);
    expect(wrapper.find('.profilePicture').exists()).toBe(true);
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
  test('does the author name render', () => {
    const wrapper = shallow(<Reply reply={sampleData[0].replies[0]} />);
    expect(wrapper.find('.authorName').exists()).toBe(true);
  });
  test('does the green bar render on creator comments', () => {
    const wrapper = shallow(<Reply reply={sampleData[0].replies[0]} />);
    expect(wrapper.find('.greenbar').exists()).toBe(true);
  });
  test('does the green bar render on non-creator comments', () => {
    const wrapper = shallow(<Reply reply={sampleData[2].replies[0]} />);
    expect(wrapper.find('.greenbar').exists()).toBe(false);
  });
  test('does the creator logo render on creator comments', () => {
    const wrapper = shallow(<Reply reply={sampleData[0].replies[0]} />);
    expect(wrapper.find('.creatorLogo').exists()).toBe(true);
  });
  test('does the creator logo render on non-creator comments', () => {
    const wrapper = shallow(<Reply reply={sampleData[2].replies[0]} />);
    expect(wrapper.find('.creatorLogo').exists()).toBe(false);
  });
  test('does the profile picture render', () => {
    const wrapper = shallow(<Reply reply={sampleData[0].replies[0]} />);
    expect(wrapper.find('.profilePicture').exists()).toBe(true);
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
