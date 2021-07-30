import './Main.scss';
import StatusLine from "../StatusLine/StatusLine";
import List from '../List/List';
import Header from '../Header/Header';
import { useState } from 'react';

const Main = () => {
  const [status, setStatus] = useState<string>('Active');
  const statusChanger = (message: string) => {
    setStatus(message);
  }

  return (
    <main className="main">
      <Header/>
      <StatusLine status={status}/>
      <List statusChanger={statusChanger}/>
    </main>
  )
}

export default Main;