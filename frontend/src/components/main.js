import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import axios from "axios";

function Main() {
  const [list, setList] = useState([]);

  let api = "http://0.0.0.0:5004/backend/stores";

  const handleGet = async (action) => {
    try {
      let getList = await axios.get(api);
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
      <h2>This is main!!!!</h2>
      <SearchBar list={list.stores} />
    </div>
  );
}

export default Main;
