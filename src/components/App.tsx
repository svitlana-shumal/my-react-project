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
import { useState } from "react";

export default function App() {
  // 2. Оголошуємо стан clicks
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // 3. Використовуємо setClicks для зміни стану clicks
    setClicks(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
}
