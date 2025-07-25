// import Product from "./Product";

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>

//       <Product
//         name="Tacos with lime"
//         imgURL="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgURL="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// import Alert from "./Alert";

// export default function App() {
//   return (
//     <>
//       <Alert />
//       <Alert type="success" />
//       <Alert type="error" />
//     </>
//   );
// }
// src/components/App.tsx

// import Button from "./Button";

// export default function App() {
//   return (
//     <>
//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//     </>
//   );
// }

// import { HiUser } from "react-icons/hi";

// interface UserMenuProps {
//   name: string;
// }

// export default function UserMenu({ name }: UserMenuProps) {
//   return (
//     <div>
//       <HiUser /> {name}
//     </div>
//   );
// }

// src/components/App.tsx

// src/components/App.tsx

// export default function App() {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log("Clicked!", event);
//     console.log("Target:", event.target); // сам <button>
//   };

//   return <button onClick={handleClick}>Click me!</button>;
// }

// 1. Імпортуємо функцію useState
// import { useState } from "react";

// export default function App() {
//   // 2. Оголошуємо стан clicks
//   const [clicks, setClicks] = useState(0);

//   const handleClick = () => {
//     // 3. Використовуємо setClicks для зміни стану clicks
//     setClicks(clicks + 1);
//   };

//   return <button onClick={handleClick}>Current: {clicks}</button>;
// }

// import OrderForm from "./OrderForm";
// export default function App() {
//   const handleOrder = (data: string) => {
//     console.log("Order received from:", data);
//   };
//   return (
//     <>
//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />
//     </>
//   );
// }
import useState from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import { type Article } from "../types/article";
import ArticleList from "./ArticleList";

interface ArticlesHttpResponse {
  hits: Article[];
}
export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async (topic: string) => {
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setArticles(response.data.hits);
  };
  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}
