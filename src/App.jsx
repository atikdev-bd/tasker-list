import TaskBoard from "./Task/taskBoard";
import Footer from "./footer";
import Header from "./header";
import HeroSction from "./heroSection";

function App() {
  return (
    <>
      <div className="bg-[#191D26] font-[Inter] text-white">
        <Header />
        <HeroSction />
        <TaskBoard />
        <Footer />
      </div>
    </>
  );
}

export default App;
