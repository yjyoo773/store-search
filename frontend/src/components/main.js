import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import axios from "axios";
import Search from "./search";
import AutoComplete from "./autoComplete.js";
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

  //   const handlePost = async (item) => {
  //     try {
  //       await axios.post(api, item).then((res) => setList(res.data.stores));
  //       //   setList(newItem.data.stores);
  //       console.log("MAIN", list);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   const _addItem = async (item) => {
  //     handlePost(item, (newItem) => setList([...list, newItem]));
  //     console.log(list);
  //   };

  useEffect(() => {
    handleGet((data) => setList(data));
  }, []);
  let names;
  if(list) {
      console.log(list)
    //   names = list.map(x=>x.name)
  }
  return (
    <div>
      <h2>Search for Store</h2>
      {/* <SearchBar list={list.stores} handleSubmit={handlePost} /> */}
      {/* <Search handleSubmit={handlePost} /> */}
      <SearchBar list={list.stores} />
      <AutoComplete suggest={list.stores} />
    </div>
  );
}

export default Main;
