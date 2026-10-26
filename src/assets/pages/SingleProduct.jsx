import { useContext } from "react"
import { useParams } from "react-router"
import { globalStore } from "./stores/MainStore"

const SingleProduct = () => {
    const {productId}= useParams()

    const {products} = useContext(globalStore)

    const product = products.find((product)=> product.id == (productId))
  return (
    <div className="max-w-sm mx-auto my-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        <img src={product.image} alt="product.title" className="w-full h-64 object-contain p-4 bg-gray-50"/>
        <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-sm text-gray-600 leading-realaxed"> {product.description}</p>
        <span className="inline-block text-lg font-semibold text-green-600">{product.price}</span>

    </div>
  )
}

export default SingleProduct