import { useContext } from "react";
import { Link } from "react-router";
import { globalStore } from "./stores/MainStore";
const Products = () => {
    const {products} = useContext(globalStore)

  return (
      <div className="px-5">
            <h1 className="text-3xl font-bold text-center my-10">Products</h1>
            <div className="container grid grid-cols-3 gap-10">
                { products.map((product)=>(
                <Link to={`/producys/single-products/${product.id}`} key={product.id} className="products py-10 rounded-lg flex flex-col items-center gap-3 mt-5 shadow-2xl ">
                <h2 className="text-7xl font-extrabold">{product.id}</h2>
                <p className="text-xl font-bold text-gray-300">{product.title}</p>
                </Link>
                ))}
           
                
            </div>
            </div>
            
        
   
  )
}
export default Products;