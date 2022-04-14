import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer';
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
