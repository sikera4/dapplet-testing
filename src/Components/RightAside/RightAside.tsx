import React from 'react';
import './RightAside.scss';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Tag from '../Tag/Tag';

const RightAside = () => (
  <aside className="right-aside">
    <div className="righ-aside__arrow">
      <ArrowForwardIcon />
    </div>
    <h2 className="right-aside__settings-header">
      dapplet settings
    </h2>
    <div className="right-aside__new-list">
      <span className="right-aside__new-list-input-caption">
        Create new list
      </span>
      <div className="right-aside__new-list-input">
        <input type="text" className="right-aside__new-list-text-input" placeholder="List Name" />
        <button type="button" className="right-aside__new-list-create-button">create</button>
      </div>
    </div>
    <div className="right-aside__new-tag">
      <span className="right-aside__new-tag-input-caption">
        Create new tag
      </span>
      <div className="right-aside__new-tag-input">
        <input type="text" className="right-aside__new-tag-text-input" placeholder="Tag Name" />
        <button type="button" className="right-aside__new-tag-create-button">create</button>
      </div>
    </div>
    <h2 className="right-aside__tags-header">
      my tags
    </h2>
    <div className="right-aside__my-tags">
      <div className="right-aside__tag-container">
        <Tag name="Twitter" community={false} />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Social Media " community={false} />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Top 10 " community={false} />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Finances " community={false} />
      </div>
    </div>
    <h2 className="right-aside__community-tags-header">
      community tags
    </h2>
    <div className="right-aside__community-tags">
      <div className="right-aside__tag-container">
        <Tag name="Social " community />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Top 100 " community />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Testing " community />
      </div>
      <div className="right-aside__tag-container">
        <Tag name="Favourites " community />
      </div>
    </div>
    <h2 className="right-aside__working-on-header">
      working on
    </h2>
    <ul className="right-aside__working-on-list">
      <li className="right-aside__working-on-list-item">twitter.com</li>
      <li className="right-aside__working-on-list-item">twitter.com/randomusername</li>
      <li className="right-aside__working-on-list-item">facebook.com</li>
      <li className="right-aside__working-on-list-item">facebook.com/randomusername</li>
    </ul>
  </aside>
);

export default RightAside;
