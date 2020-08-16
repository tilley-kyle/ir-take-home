import React from 'react';

const SystemDetails = ({ status }) => {
  if (!status.Status.UserInterface.ContactInfo) {
    return <div></div>
  }
  console.log(status)
  return (
    <div className="sys-det-container">
      <div className="conatct-box">
        <p className="">{status.Status.UserInterface.ContactInfo.Name}</p>
      </div>
    </div>
  )
}

export default SystemDetails;