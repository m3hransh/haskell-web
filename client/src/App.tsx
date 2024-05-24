import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
const App = () => {
 
  return (
    <>
   <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutMe name="zagrs" description="" questionText="" socialLink="" socialLinkText="" mainImageUrl="" />} />
      </Routes>
    </Router>

    </>
  );
}

export default App