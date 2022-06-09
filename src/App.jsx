import React from "react";

import "./index.scss";

import UserForm from "./UserForm.jsx";

const App = () => {

  const createUser = (user) => {
    console.log(user);
  }

  return <UserForm onSubmit={createUser} />;
};

export default App;
