import React, { useEffect, useState } from "react";
import axios from "axios";
import AutoComplete from "./autoComplete.js";
function Main() {
  const [list, setList] = useState([]);

  //   let api = process.env.REACT_APP_URL || "http://localhost:5004/backend/stores";
  let api = "http://localhost:5004/backend/stores";
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
    <div>
      <AutoComplete suggest={list.stores} />
    </div>
  );
}

export default Main;
