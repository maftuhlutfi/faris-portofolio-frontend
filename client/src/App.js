import { Route, Switch } from "react-router-dom";
import AppPages from "./components/pages/App";
import LoginRegisterPage from "./components/pages/LoginRegister";

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <AppPages />} />
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
      <Route 
        exact 
        path='/app' 
        render={() => <AppPages />}
      />
    </Switch>
  );
}

export default App;
