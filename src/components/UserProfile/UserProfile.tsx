import React from 'react';
import style from './index.scss';

interface UserProfileProps {
  userName: string;
  userBio: string;
  handleClick: () => void;
}

export const UserProfile = ({ userBio, userName, handleClick }: UserProfileProps) => {
  return (
    <div className={style.userProfile}>
      <h1>{userName}</h1>
      <p data-testid="user-text" onClick={handleClick}>
        {userBio}
      </p>
    </div>
  );
};
