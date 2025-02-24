import "./styles/reset.css";
import "./styles/App.css";
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

export default App;
