import "./App.css";
import { Home } from "@/page/Home";

function App() {

  // website.com/home/

  return (
    <>
      <BrowserRouter>
        <Router>
          <Routes path="/" element={ <Home />}>
        </Router>
      </BrowserRouter>
    </>
  );
}

export default App;
