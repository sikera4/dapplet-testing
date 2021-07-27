import './StatusLine.scss';
import cloud from '../../assets/clarity_cloud-network-line.png';
import settings from '../../assets/carbon_settings-adjust.png';

interface StatusLinePropsInterface {
  status: string;
}

const StatusLine = (props: StatusLinePropsInterface) => {
  return (
    <div className="status-line">
      <div className="status-line__extension-state">
        <img src={cloud} alt="" className="status-line__cloud" height="16" width="18"/>
        <span className="status-line__state">Extension state: </span>
        <span className={`status-line__status ${props.status === 'Active' ? '': 'status-line__status_not-active'}`}>{props.status}</span>
      </div>
      <div className="status-line__settings">
        <img src={settings} alt="" className="status-line__settings-icon" width="20" height="18"/>
        <span className="status-line__settings-caption">Settings</span>
      </div>
    </div>
  )
}

export default StatusLine;