import React, { useContext } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { SettingContext } from "../context/state.js";
import { CardContent } from "@mui/material";

function Related(props) {
  const context = useContext(SettingContext);

  let stores = context.related;
  let tag = context.getTag;

  const onClick = (e) => {
    context.changeInput(e.currentTarget.innerText);
    context.changeSubmit(
      props.stores.find((store) => store.name === e.currentTarget.innerText)
    );
  };

  return (
    <>
      <Card className="relateCard">
        <CardContent>
          <Typography gutterBottom variant="h5">
            {tag.charAt(0).toUpperCase() + tag.slice(1)} Related Stores
          </Typography>
          {stores.map((store, idx) => (
            <Chip
              key={idx}
              label={store.name}
              color="info"
              className="relateBadge"
              onClick={onClick}
            />
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default Related;
