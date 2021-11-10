import React from 'react';
import DefaultAvatar from '../../../img/avatar664.png';
import { AvatarProps } from './AvatarProps';
import './Avatar.scss';

const Avatar = (props: AvatarProps): JSX.Element => {
    const { image } = props;
    return <img className="avatar" src={image ? image : DefaultAvatar} />;
};

export default Avatar;
