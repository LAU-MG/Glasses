'use client'

import React from "react";
import './scss/Card.scss';
import {Card} from 'react-bootstrap';

function ProductCard({ title, description, image } : any) {
  return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
  );
}

export default ProductCard;
