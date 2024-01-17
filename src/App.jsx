import TaskBoard from "./Task/taskBoard";
import Footer from "./footer";
import Header from "./header";
import HeroSction from "./heroSection";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-col justify-center items-center">
          <HeroSction />
          <TaskBoard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
