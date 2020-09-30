import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion';
// enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
configure({ adapter: new Adapter() });



describe('Accordion componenet tests', () => {
  it('renders without crashing: smoke test', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion sections={[
      {
        title: 'First title',
        content: 'First Content'
      },
      {
        title: 'Second title',
        content: 'Second Content'
      },
      {
        title: 'Third title',
        content: 'Third Content'
      }
    ]} />, div)
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI without props supplies', () => {
    const tree = renderer
      .create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the UI without crashing with click being passed', () => {
    const tree = renderer
      .create(<Accordion sections={[
        {
          title: 'First title',
          content: 'First Content'
        },
        {
          title: 'Second title',
          content: 'Second Content'
        },
        {
          title: 'Third title',
          content: 'Third Content'
        }
      ]}
        expandedKey={0}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the UI without crashing with props', () => {
    const tree = renderer
      .create(<Accordion sections={[
        {
          title: 'First title',
          content: 'First Content'
        },
        {
          title: 'Second title',
          content: 'Second Content'
        },
        {
          title: 'Third title',
          content: 'Third Content'
        }
      ]}
      />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders buttons', () => {
    const wrapper = shallow(<Accordion sections={[{
      title: 'Third title',
      content: 'Third Content'
    }]} />)
    wrapper.find('button').simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})