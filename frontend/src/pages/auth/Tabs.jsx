import React, { useState } from 'react';
import './auth.css'

import LogIn from './LogIn'
import SignUp from './SignUP'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    if (activeTab === 'login') {
      return (
        <div>
          <LogIn/>
          {/* Your login form and logic here */}
        </div>
      );
    } else if (activeTab === 'signup') {
      return (
        <div>
          <SignUp/>
          {/* Your signup form and logic here */}
        </div>
      );
    }

    return null;
  };

  return (
    <div className='Tabs'>
      <div>
        <button onClick={() => handleTabChange('login')}>LogIn</button>
        <button onClick={() => handleTabChange('signup')}>SignUp</button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Tabs;
