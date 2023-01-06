import "./index.scss";
import { Button } from "./components/Button/Button";
const root = document.getElementById("root");
console.log("root1:", root);

root.innerHTML = `
${Button({ children: "Click" })}
<br/>
${Button({ children: "Click 2" })}
`;
