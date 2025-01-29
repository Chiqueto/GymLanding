import Contact from "./components/contact";
import Footer from "./components/footer";
import Home from "./components/home";
import Mail from "./components/mail";
import NavBar from "./components/navBar";
import Plans from "./components/plans";
import Schedules from "./components/schedules";
import Structure from "./components/structure";

function App() {
    return (
        <body className="bg-background h-screen">
            <NavBar />
            <Home />
            <Structure />
            <Schedules />
            <Plans />
            <Contact />
            <Mail />
            <Footer />
        </body>
    );
}

export default App;