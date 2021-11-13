import Header from "./Header";
import Footer from "./Footer";
import Board from "./Board";

const Main = ({ files }) => {
  return (
    <>
      <Header />
      <main>
        <Board files={files} />
      </main>
      <Footer />
    </>
  );
};

export default Main;
