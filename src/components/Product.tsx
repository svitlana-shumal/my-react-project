interface ProductProps {
  name: string;
  imgURL: string;
  price: number;
}

export default function Product({ name, imgURL, price }: ProductProps) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgURL} alt={name} width="320" />
      <p>Price: {price} credits</p>
    </div>
  );
}
