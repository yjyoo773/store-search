import React, { useContext } from "react";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import { SettingContext } from "../context/state.js";
import { CardContent } from "@mui/material";

function Related() {
  const context = useContext(SettingContext);

  let stores = context.related;
  let tag = context.getTag;
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
              variant="outlined"
              className="relateBadge"
              onClick={(e) => context.changeInput(e.currentTarget.innerText)}
            />
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default Related;
