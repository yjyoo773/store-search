import React, { useState, useEffect } from "react";

function Search(props) {
  // const [isLoading, setIsLoading] = useState(false);
  // const [options, setOptions] = useState([]);
  let api = "http://0.0.0.0:5004/backend/stores";

  // const handleSearch = (query) => {
  //     setIsLoading(true);

  //     fetch(api, {
  //         method: 'POST',
  //         headers:{'Content-Type': 'application/json'},
  //         body: JSON.stringify()
  //     })
  // }

  const [search, setSearch] = useState([]);

  useEffect(() => {
    handleSubmit();
    console.log(search);
  }, [search]);

  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
      e.target.reset();
    }
    props.handleSubmit(search);
  };
  const changeVal = (e) => {
    setSearch((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return <input value={search.value} onChange={changeVal} name="store" />;
}

export default Search;
