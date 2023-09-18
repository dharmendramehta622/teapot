import {useState, useEffect} from 'react'
import { AxiosServices } from '../application/protocols/services/api_services';

const Dashboard = () => {
    const [products, setproducts] = useState([]);
    

  const getProducts =   async ()=> {
      const res = await AxiosServices.instance.get('/products');
      console.log(res.msg);
      setproducts(res.msg.data);
    }


    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Product List</h1>
        <table className="min-w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="text-left px-4 py-2">ID</th>
                    <th className="text-left px-4 py-2">Product Name</th>
                    <th className="text-left px-4 py-2">Price</th>
                    <th className="text-left px-4 py-2">Category</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td className="border px-4 py-2">{product.id}</td>
                    <td className="border px-4 py-2">{product.title}</td>
                    <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{product.category}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}
 
export default Dashboard;