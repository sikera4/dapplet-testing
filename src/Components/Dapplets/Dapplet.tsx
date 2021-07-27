import './Dapplet.scss';
import React, { useState, useEffect } from 'react';
import Tag from '../Tag/Tag';
import imageLoader from '../../assets/loading-gif.gif';

export interface DappletPropsInterface {
  id: string;
  title: string;
  description: string;
  author: string;
  icon: string;
  address: string;
}

const Dapplet = (props: DappletPropsInterface) => {
  const [installed, setInstalled] = useState<boolean>(false);
  const [iconLoaded, setIconLoaded] = useState<boolean>(false);
  useEffect(() => {
    const fetchIcon = async () => {
      const response =await fetch(`https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.icon}`);
      return response;
    }
    fetchIcon().then((response) => {
      if (response.status === 200) {
        setIconLoaded(true);
      } else {
        setIconLoaded(false);
      }
    });
  }, [props.icon])
  return (
    <div className="dapplet">
      <div className="dapplet__drag-point">
        <div className="dapplet__drag-drop"></div>
      </div>
      <img src={iconLoaded ? `https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.icon}` : imageLoader} alt="" className="dapplet__image" height="50" width="50"/>
      <div className="dapplet__caption">
        <div className="dapplet__name">{props.title.slice(0, 35)}</div>
        <div className="dapplet__code">{props.address}</div>
      </div>
      <div className="dapplet__description">{props.description.slice(0, 35)}</div>
      <div className="dapplet__user">{props.author}</div>
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
      <div className="dapplet__button-container">
        <div className={`dapplet__install-button ${(installed) ? "dapplet__install-button_installed" : 
        "dapplet__install-button_uninstalled"}`}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          setInstalled(!installed);
          }}>{(installed) ? 'installed' : 'install'}
          </div>
      </div>
    </div>
  )
}

export default Dapplet;