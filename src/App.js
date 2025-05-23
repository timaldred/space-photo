import logo from './logo.svg';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import PhotoSelector from './components/layout/PhotoSelector';

function App() {
  return (
    <div className="container">
      <Header title={"Daily space picture"} />
      <PhotoSelector />
      <Footer />
    </div>
  );
}

export default App;
