
// import './App.scss';
// import './sass/components/_body.scss';
// import "./sass/components/_container.scss";
// import "./sass/components/_cookies.scss";
// import "./sass/components/_filter.scss";
// import "./sass/components/_form.scss";
// import "./sass/components/_hero.scss";
// import './sass/components/_listing.scss';
// import "./sass/components/_sector.scss";
// import "./sass/components/_paginate.scss";
import Container from "./Components/Container";
import Cookie from "./Components/Cookie";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Navigation from "./Components/Navigation";
// import "./sass/Body.scss";

// import "./sass/components/_nav.scss"; 
// import sass from ''


function App() {
  return (
    <div className="body">
    <Navigation/>
    <Form/>
    <Container/>
    <Cookie/>
    <Footer/>
     
    </div>
  );
}

export default App;
