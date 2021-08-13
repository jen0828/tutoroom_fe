import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Tutor(props) {
  return (
    <div className='tutor'>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Prime_Minister_David_Cameron_-_official_photograph_%288947770804%29_%28cropped%29.jpg'/>
        <Card.Body className='text-center'>
          <Card.Title>{props.tutor.name}</Card.Title>
          <Card.Text>{props.tutor.bio}</Card.Text>
          <Button as={Link} to={`/search/${props.tutor.id}`}>View Profile</Button>
        </Card.Body>
      </Card>
    </div>
  )
}



