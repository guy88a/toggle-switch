import { useState } from 'react';
import './CSS/index.css';
import ToggleSwitch from './COMPONENTS/ToggleSwitch';

function App() {

  const [isChecked, setIsChecked] = useState(false);

  function onToggle() {
    setIsChecked(!isChecked);
  }

  return (
    <div id="ToggleSwitch" className="App">
      <div className="toggle-switch-app-container">
        <ToggleSwitch size={14} states={[isChecked, onToggle]} />
      </div>
      
    </div>
  );
}

export default App;
