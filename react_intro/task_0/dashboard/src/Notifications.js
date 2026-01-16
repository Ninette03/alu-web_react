import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        style={{
          position: 'absolute',
          right: '10px',
          top: '10px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
        onClick={handleClose}
      >
        <img src={closeIcon} alt="close icon" style={{width: '15px', height: '15px', margin: '10px'}}/>
      </button>

      <p>Here is the list of notifications</p>

      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        />
      </ul>
    </div>
  );
}

export default Notifications;