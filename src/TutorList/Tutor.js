import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Tutor(props) {
  const tutorData = props.tutor.attributes;
  let shortBio;
  if (tutorData.bio.length > 50) {
    shortBio = `${tutorData.bio.slice(0, 49)} ...`;
  } else {
    shortBio = tutorData.bio;
  }

  return (
    <div className="tutor">
      <Card
        style={{ width: '16rem' }}
        className="p-2 m-2 bg-body rounded"
        id="tutor-card">
        <Card.Img id="search-img" variant="top" src={tutorData.image_url} />
        <Card.Body className="text-center">
          <Card.Title>{tutorData.name}</Card.Title>
          <Card.Text>{shortBio}</Card.Text>
          <Button as={Link} to={`/search/${props.tutor.id}`}>
            View Profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
