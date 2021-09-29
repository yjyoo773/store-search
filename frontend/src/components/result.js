import React, { useContext } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { CardContent } from "@mui/material";

import { SettingContext } from "../context/state.js";

function Result(props) {
  const context = useContext(SettingContext);

  let getRelated = (e) => {
    let tag = e.currentTarget.innerText;
    let related = props.store.filter((x) => x.tags.includes(tag));
    context.changeRelated(related);
    context.changeTag(tag);
  };
  return (
    <Card className="resultCard">
      <CardContent>
        <Typography gutterBottom variant="h5">
          {context.submitVal.name}
        </Typography>
        {context.submitVal.tags.split(",").map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            className="resultBadge"
            variant="outlined"
            color="info"
            onClick={(e) => getRelated(e)}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default Result;
