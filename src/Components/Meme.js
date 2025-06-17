import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Meme = (props) => {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: '300px',         // fixed width
        height: '450px',        // fixed height
        margin: '25px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#fff',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'      
      }}
    >
      <Card.Img variant="top" 
    src={props.image} 
    style={{ height: '250px', objectFit: 'cover'  }} />
      <Card.Body
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ fontSize: '14px', color: '#444' }}>
            Create funny memes by editing this image and adding your own text.
          </Card.Text>
        </div>
        <Button
          onClick={() => navigate(`/edit?url=${props.image}`)}
          variant="primary"
          style={{ marginTop: '10px' }}
        >
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Meme;
