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
// import useState from "react";
// import axios from "axios";
// import SearchForm from "./SearchForm";
// import { type Article } from "../types/article";
// import ArticleList from "./ArticleList";

// interface ArticlesHttpResponse {
//   hits: Article[];
// }
// export default function App() {
//   const [articles, setArticles] = useState<Article[]>([]);

//   const handleSearch = async (topic: string) => {
//     const response = await axios.get<ArticlesHttpResponse>(
//       `https://hn.algolia.com/api/v1/search?query=${topic}`
//     );
//     setArticles(response.data.hits);
//   };
//   return (
//     <div>
//       <SearchForm onSubmit={handleSearch} />
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// }

// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     async function fetchCharacter() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`
//       );
//       setPerson(response.data);
//     }
//     fetchCharacter();
//   }, [count]);
//   //   console.log("Effect ran!");
//   //   axios
//   //     .get(`https://swapi.info/api/people/${count}`)
//   //     .then((response) => setPerson(response.data));
//   // }, [count]);
//   // console.log("App rendered!");
//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>The count is {count}</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }
// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log("You can see me only once!");
//   }, []);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// }
// import Timer from "../Timer";
// import { useEffect, useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`Effect ran for: ${count}`);
//     return () => {
//       console.log(`Clean up for ${count}`);
//     };
//   }, [count]);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//     </>
//   );
// }
// import { useEffect, useState } from "react";

// export default function Timer() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // 1. Зберігаєм ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//       console.log(`Interval - ${Date.now()}`);
//     }, 1000);

//     return () => {
//       // 2. Видаляємо інтервал за його id
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <p>TimerBox - {time.toLocaleTimeString()}</p>;
// }

// import { useState } from "react";
// import Modal from "./Modal";

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);
//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <h2>Modal Title</h2>
//           <p>This is some content inside the modal.</p>
//         </Modal>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";

// export default function App() {
//   const [clicks, setClicks] = useState(() => {
//     const savedClicks = localStorage.getItem("saved-clicks");
//     if (savedClicks !== null) {
//       return JSON.parse(savedClicks);
//     }
//     return 0;
//   });

//   useEffect(() => {
//     localStorage.setItem("saved-clicks", JSON.stringify(clicks));
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log("First updated:", first);
  }, [first]);

  useEffect(() => {
    console.log("Second updated:", second);
  }, [second]);

  useEffect(() => {
    console.log("First or second updated:", first + second);
  }, [first, second]);

  return (
    <>
      <button onClick={() => setFirst(first + 1)}>First: {first}</button>
      <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
    </>
  );
}
