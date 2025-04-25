import "./App.css";
import SearchInput from "./components/sidebar/SearchInput";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";


function App() {
  return (
   <div className="p-4 h-screen flex items-center justify-center"> 
      <Home/>
   </div>
  );
}

export default App;
