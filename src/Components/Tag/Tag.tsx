import React from 'react';
import cross from '../../assets/cross.png';
import './Tag.scss';

interface TagPropsInterface {
  name: string;
  community: boolean;
}

const Tag = (props: TagPropsInterface) => {
  const { community, name } = props;
  return (
    <div className={`tag ${community ? 'tag_community-tag' : ''}`}>
      <span className="tag__tag-name">{name}</span>
      <img src={cross} alt="" className="tag__cross" height="5" width="5" />
    </div>
  );
};

export default Tag;
