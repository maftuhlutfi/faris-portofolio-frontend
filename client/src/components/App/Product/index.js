import ProductItem from './ProductItem';
import ProductList from './ProductList';
import products from './products'

const Product = () => {
    return (
        <ProductList>
            {products.map((product, index) => <ProductItem key={index} {...product} />)}
        </ProductList>
    );
}

export default Product