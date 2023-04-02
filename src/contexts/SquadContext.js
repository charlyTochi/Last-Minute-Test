import React, {createContext, useState} from 'react';
export const SquadContext = createContext();

export const SquadProvider = ({children}) => {
  const [squad, setSquad] = useState({});
  const [selectedPlayer, setSelectedPlayer] = useState();

  return (
    <SquadContext.Provider
      value={{squad, selectedPlayer, setSelectedPlayer, setSquad}}>
      {children}
    </SquadContext.Provider>
  );
};
