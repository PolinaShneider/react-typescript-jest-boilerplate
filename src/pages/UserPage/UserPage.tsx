import React from 'react';
import UserProfile from '@components/UserProfile';

export const UserPage = () => {
  const handleClick = () => {
    alert('click!');
  };
  return <UserProfile handleClick={handleClick} userBio="A Programmer" userName="Jack" />;
};
