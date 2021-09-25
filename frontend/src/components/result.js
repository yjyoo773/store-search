import React from "react";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

function Result(props) {
  return (
    <Card className = "resultCard">
      <Card.Header as="h5">{props.result.name}</Card.Header>
      <Card.Body>
        {props.result.tags.split(',').map((tag,idx)=>(
            <Badge pill key ={idx} className = "resultBadge">{tag}</Badge>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Result;
