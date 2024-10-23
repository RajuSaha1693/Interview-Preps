interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
interface Rating {
  rate: number;
  count: number;
}
interface ProductsProps{
    products:Product[]
}
import "./Products.css"
const ProductCard:React.FC<{product:Product}>=({product})=>{
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.title} className="p-product-image"/>
            </div>
            <div className="product-detail">
                <h4>{product.title}</h4>
                <p>{product.description.slice(0,100)}...</p>
                <span>{product.price}</span>
            </div>
        </div>
    )
}
const Products:React.FC<ProductsProps>=({products})=>{
    return(
        <div className="product-list">
            {products.map(item=>{
                return <ProductCard product={item} key={item.id}/>
            })}
        </div>
    )
}
export default Products
