import './Dapplets.scss';
import dyson from '../../assets/dyson.png';
import cross from '../../assets/cross.png';

const Dapplet = () => {
  return (
    <div className="dapplet">
      <div className="dapplet__drag-point"></div>
      <img src={dyson} alt="" className="dapplet__image" height="50" width="50"/>
      <div className="dapplet__caption">
        <div className="dapplet__name">Ethereum Contracts Example</div>
        <div className="dapplet__code">0xC12B5EE8F74BDE56B82EDD9D196D4653DA8E3836</div>
      </div>
      <div className="dapplet__some-text">Feature adds tweets to Ethereum contract</div>
      <div className="dapplet__user">debra.holt</div>
      <div className="dapplet__tags">
        <div className="dapplet__tag">
          <span className="dapplet__tag-name">Social Media </span>
          <img src={cross} alt="" className="dapplet__cross" height="5" width="5"/>
        </div>
      </div>
    </div>
  )
}

export default Dapplet;