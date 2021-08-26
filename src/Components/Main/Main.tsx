import './Main.scss';
import React, { useState } from 'react';
import StatusLine from '../StatusLine/StatusLine';
import List from '../List/List';
import Header from '../Header/Header';

const Main = () => {
  const [status, setStatus] = useState<string>('Active');
  const statusChanger = (message: string) => {
    setStatus(message);
  };

  return (
    <main className="main">
      <Header />
      <StatusLine status={status} />
      <List statusChanger={statusChanger} />
    </main>
  );
};

export default Main;
