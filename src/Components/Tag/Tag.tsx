import cross from '../../assets/cross.png';
import './Tag.scss';

interface TagPropsInterface {
  name: string;
  community: boolean;
}

const Tag = (props: TagPropsInterface) => {
  return (
    <div className={`tag ${props.community ? "tag_community-tag" : ''}`}>
      <span className="tag__tag-name">{props.name}</span>
      <img src={cross} alt="" className="tag__cross" height="5" width="5"/>
    </div>
  )
}

export default Tag;