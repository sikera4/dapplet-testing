import './Dapplet.scss';
import React, { useState, SyntheticEvent } from 'react';
import Tag from '../Tag/Tag';
import imageLoader from '../../assets/loading-gif.gif';
import defaultSource from '../../assets/not-found.png';
import downloadIcon from '../../assets/download.png';
import checkIcon from '../../assets/check-circle.png';
import { useEffect } from 'react';

export interface DappletPropsInterface {
  id: string;
  title: string;
  description: string;
  author: string;
  icon: string;
  address: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  text_5: string;
  text_6: string;
  text_7: string;
  text_8: string;
  text_9: string;
}

const Dapplet = (props: DappletPropsInterface) => {
  const [installed, setInstalled] = useState<boolean>(false);
  const [iconLoaded, setIconLoaded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const texts: string[] = [props.text_2, props.text_3, props.text_4, props.text_5, 
    props.text_6, props.text_7, props.text_8, props.text_9];
  const addDefaultSrc = (event: SyntheticEvent<HTMLImageElement>) => {
    const eTarget = event.target as HTMLImageElement;
    eTarget.src = defaultSource;
  }
  useEffect(() => {
    let data = localStorage.getItem(props.id);
    if (data) {
      setInstalled(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(props.id, JSON.stringify(installed));
  })

  return (
      <div className="dapplet" onClick={() => setIsOpen(!isOpen)}>
        <div className="dapplet__brief-view">
          <div className="dapplet__caption">
            <div className="dapplet__caption-constant-part">
              <img src={iconLoaded ? `https://dapplets-hiring-api.herokuapp.com/api/v1/files/${props.icon}` : imageLoader} 
              alt="" className="dapplet__image" height="50" width="50"
              onLoad={() => setIconLoaded(true)}
              onError={addDefaultSrc}/>
              <div className="dapplet__caption-inner-container">
                <div className="dapplet__name">{props.title.slice(0, 30)}</div>
                <div className="dapplet__code">{props.address}</div>
                <div className="dapplet__media-md-name">{props.author.slice(0, 32)}</div>
              </div>
            </div>
            <button className={`dapplet__media-xs-install-button ${installed ? 'dapplet__media-xs-install-button_installed':
              'dapplet__media-xs-install-button_uninstalled'}`}
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                setInstalled(!installed);
                }}><img src={installed ? checkIcon: downloadIcon} alt="" height="14" width="14"
                    className="dapplet__media-xs-install-button-icon" />
            </button>
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
            <button className={`dapplet__install-button ${(installed) ? "dapplet__install-button_installed" : 
            "dapplet__install-button_uninstalled"}`}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              setInstalled(!installed);
              }}>{(installed) ? 'installed' : 'install'}
              </button>
          </div>
        </div>
        <div className={`dapplet__additional-view ${isOpen ? 'dapplet__additional-view_open' : ''}`}>
          <div className="dapplet__info-1">
            <span className="dapplet__info-header">{props.text_1.slice(0, 5)}</span>
            <p className="dapplet__info-text">{props.text_1}</p>
          </div>
          <div className="dapplet__other-info">
            {texts.map((text, index) => {
              if (text) {
                return (
                  <div key={index} className={`dapplet__info ${`dapplet__info-${index + 2}`}`}>
                    <span className="dapplet__info-header">{text.slice(0, 5)}</span>
                    <p className="dapplet__info-text">{text}</p>
                  </div>
                )
              }
            })}
          </div>
        </div>
    </div>
  )
}

export default Dapplet;