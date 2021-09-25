import React from "react";
// import Card from "react-bootstrap/Card";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { CardContent } from "@mui/material";

function Result(props) {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  return (
    <Card className="resultCard">
      <CardContent>
        <Typography gutterBottom variant="h5">{props.result.name}</Typography>
        {props.result.tags.split(",").map((tag, idx) => (
          <Chip
            key={idx}
            label={tag}
            className="resultBadge"
            variant="outlined"
            color="info"
            clickable
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default Result;
