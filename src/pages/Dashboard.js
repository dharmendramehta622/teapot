import {useState, useEffect} from 'react'
import { AxiosServices } from '../application/protocols/services/api_services';
import Modal from 'react-modal'; 
import CustomButton from '../components/CustomButton';
import CustomDropDown from '../components/CustomDropDown';
Modal.setAppElement('#root');


const Dashboard = () => {
    const [products, setproducts] = useState([]);
    const [orders, setorders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    
    const openModal = () => {
        setIsModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
      };
    
    
  const getProducts =   async ()=> {
      const res = await AxiosServices.instance.get('/products');
      console.log(res.msg);
      setproducts(res.msg.data);
  }
    
  const getOrders =   async ()=> {
    const res = await AxiosServices.instance.get('/orders');
    console.log(res.msg);
    setorders(res.msg.data);
  }
    
  const createOrder =   async ()=> {
    const res = await AxiosServices.instance.post('/orders');
    console.log(res.msg);
    setorders(res.msg.data);
  }

  const deleteOrder =   async ()=> {
    const res = await AxiosServices.instance.get('/orders');
    console.log(res.msg);
    setorders(res.msg.data);
  }

    useEffect(() => {
        getProducts()
        getOrders()
    }, []);

    return (

        <div className="container mx-auto p-4">
            <div className='flex flex-row justify-between items-start'>
                <h1 className="text-3xl font-semibold mb-4">Order List</h1>
                <CustomButton label={'Add Order'} onClick={openModal} />
                <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
                    <div className='bg-white'>
                        <h2>Create Order</h2>
                        <CustomDropDown options={products.map((e)=>e.title)} onSelect={null} />
                </div>
                <CustomButton label={'Close'} onClick={closeModal} />
                </Modal>
                
         </div>
            <table className="min-w-full">
            <thead>
                <tr className="bg-gray-200">
                    <th className="text-left px-4 py-2">ID</th>
                    <th className="text-left px-4 py-2">Product</th>
                    <th className="text-left px-4 py-2">Price</th>
                    <th className="text-left px-4 py-2">Quantity</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product) => (
                <tr key={product.id}>
                    <td className="border px-4 py-2">{product.id}</td>
                    <td className="border px-4 py-2">{product.title}</td>
                    <td className="border px-4 py-2">${product.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">{product.quantity}</td>
                </tr>
                ))}
            </tbody>
        </table>
       </div>
    );
}
 
export default Dashboard;