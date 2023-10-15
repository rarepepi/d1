// Example from https://beta.reactjs.org/learn

import { useState } from "react";
// import styles from "./counters.module.css";
import { NoRampOneClick } from "norampkit";
function MyButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-8 mt-8 bg-green-50">
      <NoRampOneClick testnet priceId="price_62F1sgqEkrH1sWrszOk0QV" />
    </div>
  );
}

export default function NoRampOneClickDemo() {
  return <MyButton />;
}
