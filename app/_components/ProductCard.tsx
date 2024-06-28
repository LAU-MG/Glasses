// ProductCard.tsx
import React from 'react';
import './scss/Card.scss';
import { Card } from 'react-bootstrap';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <Card style={{ width: '18rem' }} className="zoom-effect">
      <Card.Img variant="top" src={image} alt={title} className="bg-light" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
