import "./styles/reset.css";
import "./styles/App.css";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Teknolojik Yemekler</h1>
      <Pizza name="Lorem" description="Lipsum pizza stuff" image={"./images/iteration-1-images/home-banner.png"}/>
      <Pizza name="Morem" description="Mipsum pizza stuff" image={"./images/iteration-1-images/home-banner.png"}/>
      <Pizza name="Korem" description="Kipsum pizza stufff" image={"./images/iteration-1-images/home-banner.png"}/>
    </div>
  );
};

export default App;
