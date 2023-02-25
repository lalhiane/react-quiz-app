import Landing from "./components/Landing";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";

import "./sass/main.scss";

function App() {

  return (<>
    
    <Routes>

      <Route path="/" element={<Landing />} />

      <Route path="/:lang" element={<Quiz />} />

    </Routes>

  </>);

}

export default App;
