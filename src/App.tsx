import Home from "./components/home";
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
        </body>
    );
}

export default App;