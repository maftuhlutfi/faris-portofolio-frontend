import Header from "../../App/Header";
import Category from "../../App/Category";
import SubHeader from "../../App/SubHeader";
import HeaderTitle from "../../App/Header/HeaderTitle";
import Dropdown from "../../shared/Dropdown";
import Product from "../../App/Product";

const HomePage = () => {
    return (
        <>
            <Header title="Menu Category" search='Search Product' />
            <Category />
            <SubHeader>
                <HeaderTitle title='Choose Product' size='28px' />
                <Dropdown text='Sort by' list={['Popular', 'Name', 'Price']} />
            </SubHeader>
            <Product />
        </>
    );
}
 
export default HomePage;