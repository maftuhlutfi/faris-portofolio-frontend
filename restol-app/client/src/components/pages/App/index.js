import { Route, Switch } from "react-router-dom";
import Navigation from "../../App/Navigation";
import HomePage from "../Home";
import Content from "./Content";
import Wrapper from "./Wrapper";

const AppPages = () => {
    return (
        <Wrapper>
            <Navigation />
            <Content>
                <Switch>
                <Route 
                    exact 
                    path='/' 
                    render={() => <HomePage />}
                />
                </Switch>
            </Content>
        </Wrapper>
    );
}
 
export default AppPages;