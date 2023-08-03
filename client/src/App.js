import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
function App() {
  const count = 10;
  const name = 'jerm'
  return (
    <>
     <Header countAmount={count} userName={name}/>
     <Footer countAmount={count} userName={name}/>
    </>
  );
}

export default App;
