import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const updateUser = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
