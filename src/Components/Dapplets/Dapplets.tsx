import './Dapplets.scss';
import React, { useState } from 'react';
import dyson from '../../assets/dyson.png';
import Tag from '../Tag/Tag';

const Dapplet = () => {
  const [installed, setInstalled] = useState<boolean>(true);
  return (
    <div className="dapplet">
      <div className="dapplet__drag-point">
        <div className="dapplet__drag-drop"></div>
      </div>
      <img src={dyson} alt="" className="dapplet__image" height="50" width="50"/>
      <div className="dapplet__caption">
        <div className="dapplet__name">Ethereum Contracts Example</div>
        <div className="dapplet__code">0xC12B5EE8F74BDE56B82EDD9D196D4653DA8E3836</div>
      </div>
      <div className="dapplet__some-text">Feature adds tweets to Ethereum contract</div>
      <div className="dapplet__user">debra.holt</div>
      <div className="dapplet__tags">
        <div className="dapplet__tags-top-row">
          <div className="dapplet__tag-container">
            <Tag name="Social Media " community={false}/>
          </div>
          <div className="dapplet__tag-container">
            <Tag name="Finances " community={false}/>
          </div>
        </div>
        <div className="dapplet__tags-bottom-row">
          <div className="dapplet__tag-container">
            <Tag name="Twitter " community={false}/>
          </div>
          <div className="dapplet__tag-container">
            <Tag name="Top 100 " community={true}/>
          </div>
        </div>
      </div>
      <div className={`dapplet__install-button ${(installed) ? "dapplet__install-button_installed" : 
      "dapplet__install-button_uninstalled"}`}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        setInstalled(!installed);
        }}>{(installed) ? 'installed' : 'install'}</div>
    </div>
  )
}

export default Dapplet;