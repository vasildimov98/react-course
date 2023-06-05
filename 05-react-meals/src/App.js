import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Image from "./components/UI/Image";

function App() {
  return (
    <div className="container">
      <Header />
      <Image src="meals.jpg" alt="Table with a lot of food" />
      <Modal />
    </div>
  );
}

export default App;
