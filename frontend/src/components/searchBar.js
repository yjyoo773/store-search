import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function SearchBar(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.list}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Stores" />}
    />
  );
}

export default SearchBar;
