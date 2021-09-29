import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { SettingContext } from "../context/state.js";

import AutoComplete from "./autoComplete.js";
import Related from "./related.js";

function Main() {
  const [list, setList] = useState([]);
  const context = useContext(SettingContext);
    let api = process.env.REACT_APP_URL || "http://localhost/backend/stores";
  // let api = "http://localhost:5004/backend/stores";
  
  const handleGet = async (action) => {
    try {
      let getList = await axios.post(api);
      let data = getList.data;
      action(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleGet((data) => setList(data));
  }, []);

  return (
    <>
      <AutoComplete suggest={list.stores} />
      {context.related.length > 0 ? <Related stores = {list.stores}/> : ""}
    </>
  );
}

export default Main;
