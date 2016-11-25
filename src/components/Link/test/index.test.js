import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai';

jest.dontMock('../index');

import Avatar from '../index'

describe('<Avatar/>', function () {
  it('renders without crashing', () => {
    shallow(<Avatar />);
  })

  it('Should render Welcome', function () {
    const wrapper = shallow(<Avatar/>);
    expect(wrapper.find('.neco')).to.have.length(1);
  });
});