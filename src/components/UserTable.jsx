import React from 'react';

const UserTable = ({ users }) => {
  return (
    <div className="tables bg-white mt-2 w-[80%] ml-[5%] p-4 rounded-md">
      <div className="table-row font-semibold">
        <div className="table-cell p-2">Name</div>
        <div className="table-cell p-2">Username</div>
        <div className="table-cell p-2">Email</div>
        <div className="table-cell p-2">Website</div>
      </div>

      {users.map((user) => (
        <div key={user.id} className="table-row">
          <div className="table-cell p-2">{user.name}</div>
          <div className="table-cell p-2">{user.username}</div>
          <div className="table-cell p-2">{user.email}</div>
          <div className="table-cell p-2">{user.website}</div>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
