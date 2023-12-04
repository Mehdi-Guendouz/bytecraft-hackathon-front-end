import { createRoot } from "react-dom/client";
import "./style/index.css" ; 

const App = () => {
  return (
    <div className=" text-4xl text-purple-400">happy coding</div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App