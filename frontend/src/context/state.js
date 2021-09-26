import React, { useState } from "react";
export const SettingContext = React.createContext();

function SettingsProvider(props) {
  const [getTag, setGetTag] = useState("");
  const [related, setRelated] = useState([]);
  const [input, setInput] = useState("");

  const state = {
    getTag,
    related,
    input,
    changeTag: setGetTag,
    changeRelated: setRelated,
    changeInput: setInput
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  );
}

export default SettingsProvider;
