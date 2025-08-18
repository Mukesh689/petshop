import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleBuy = () => {
    navigate('/cart', { state: { product } });
  };

  return (
    <Card>
      <Card.Img variant="top" src={`/images/${product.image}`} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Button onClick={handleBuy}>Buy</Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;