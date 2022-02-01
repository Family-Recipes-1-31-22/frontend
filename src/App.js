import "./App.css";
import Detials from "./components/header/details";
import { Route, Switch } from "react-router-dom";
import Login from "./components/forms/LogInForm";
import Signup from "./components/forms/SignUpForm";
import HomePage from "./components/HomePage/RecipeListings";
import AddRecipe from "./components/forms/AddRecipeForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Detials />
      </header>
      <div className="route_container">
        <Switch>
          <Route path="/addrecipe" component={AddRecipe}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/recipelisting" component={HomePage} />
          <Route path="/logout"/>
          <Route path="/login" component={Login}/>
          <Route exact path="/" component={Login}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
