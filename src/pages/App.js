import React from 'react';
import { Tabs } from "./Tabs";
import "./index.css";
import { Users } from './Users';
import { Posts } from './Posts';

function App() {
  const [currentTab, setCurrentTab] = React.useState(0);

  return (
    <div className="App">
      <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {currentTab ? <Posts/> : <Users/>}
    </div>
  );
}

export default App;
