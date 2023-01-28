import React from 'react';

import SettingsHeader from './Header';
import Tabar from './Tabar';

import './Settings.scss';

const Settings = () => {
  return (
    <div className="settings-page">
      <SettingsHeader />
      <Tabar />
    </div>
  );
};

export default Settings;
