import React from 'react';
import renderer from 'react-test-renderer';

import { UserProfile } from '@components/UserProfile/UserProfile';

describe('UserPage component', () => {
  test('should render component properly', () => {
    // given
    const dummyComponentProps = {
      userName: 'Vasua Pupkin',
      userBio: 'coder',
      handleClick: () => console.log(123),
    };

    // when
    const componentRenderer = renderer.create(<UserProfile {...dummyComponentProps} />);
    const tree = componentRenderer.toJSON();

    // then
    expect(tree).toMatchSnapshot();
  });
});
