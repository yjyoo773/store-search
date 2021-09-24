import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// import useForm from "../hooks/form";
// import { useForm } from "react-hook-form";

function SearchBar(props) {
  // const [handleSubmit, handleChange] = useForm(props.handleSubmit);
  // const {handleSubmit, setValue } = useForm(props.handleSubmit);

  const [value, setValue] = useState({});
  const [inputValue, setInputValue] = useState("");

  return (

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onInputChange = {(e, newInput)=> setInputValue(newInput)}
      onSubmit = {e => setValue(value)}
      options={props.list}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Stores" />}
    />
  );
}

export default SearchBar;
