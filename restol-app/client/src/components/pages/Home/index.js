import Header from "../../App/Header";
import Category from "../../App/Category";


const HomePage = () => {
    return (
        <>
            <Header title="Menu Category" search='Search Product' />
            <Category />
        </>
    );
}
 
export default HomePage;