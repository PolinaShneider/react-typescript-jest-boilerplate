import React from 'react';
import { UserProfile } from '@components/UserProfile/UserProfile';
import { render, fireEvent } from '@testing-library/react';

describe('UserPage component handlers specs', () => {
  describe('initialComponentProps', () => {
    test('should call closeRightSection callback', () => {
      const handleClick = jest.fn();

      const { getByTestId } = render(<UserProfile handleClick={handleClick} userBio="coder" userName="Vasya" />);

      fireEvent.click(getByTestId('user-text'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
