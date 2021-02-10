import { Route, Switch } from "react-router-dom";
import LoginRegisterPage from "./components/pages/LoginRegister";

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <LoginRegisterPage type='login' />} />
      <Route 
        exact 
        path='/login' 
        render={() => <LoginRegisterPage type='login' />}
      />
      <Route 
        exact 
        path='/signup' 
        render={() => <LoginRegisterPage type='signup' />}
      />
    </Switch>
  );
}

export default App;
