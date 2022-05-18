import React from 'react';

interface UserProfileProps {
  userName: string;
  userBio: string;
  handleClick: () => void;
}

export const UserProfile = ({ userBio, userName, handleClick }: UserProfileProps) => {
  return (
    <div>
      <h1>{userName}</h1>
      <p data-testid="user-text" onClick={handleClick}>
        {userBio}
      </p>
    </div>
  );
};
