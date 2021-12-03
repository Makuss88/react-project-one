import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge }
      ];
    });
  }

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
