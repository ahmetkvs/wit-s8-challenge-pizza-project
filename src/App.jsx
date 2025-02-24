import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <Pizza name="Lorem" description="Lipsum pizza stuff"/>
      <Pizza name="Morem" description="Mipsum pizza stuff"/>
      <Pizza name="Korem" description="Kipsum pizza stufff"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
