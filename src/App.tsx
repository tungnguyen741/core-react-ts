import React, { FC, Suspense, useState } from "react";
import styles from "./App.module.scss";
import img1 from "./assets/img-1.1mb.png";
import { Button } from "./components";
import { calcAddNumber } from "./utils";
import axios from 'axios';

const BadgeLazy = React.lazy(() => import("./components/Badge/Badge"));
const Image = React.lazy(() => import("./components/Image/Image"));

console.log("calcAddNumber:", calcAddNumber);
const App: FC = () => {
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState<"success" | "warning" | "danger">("success");
  
  const getData = async () => {
    const result = await axios.get("/api/bypass-example");
    console.log('result:', result)
  }

  return (
    <div className={styles.App}>
      <Suspense fallback={<div>Loading...</div>}>
        <Button onClick={() => setCounter((prev) => prev - 1)}>-</Button>
        <BadgeLazy type={type}>{counter}</BadgeLazy>
        <Button onClick={() => setCounter((prev) => prev + 1)}>+</Button>
        <Button onClick={getData}>Call</Button>
        <div>
          <Button onClick={() => setType("warning")}>Warning</Button>
          <Button onClick={() => setType("danger")}>Danger</Button>
          <Button onClick={() => setType("success")}>Success</Button>
        </div>
        {counter >= 3 && <Image src={img1} />}
      </Suspense>
    </div>
  );
};

export default App;
