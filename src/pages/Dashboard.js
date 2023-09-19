import { useState, useEffect } from 'react'
import { AxiosServices } from '../application/protocols/services/api_services';
import Modal from 'react-modal';
import CustomButton from '../components/CustomButton';
import CustomDropDown from '../components/CustomDropDown';
import CustomTextField from '../components/CustomTextField'

Modal.setAppElement('#root');


const Dashboard = () => {
    const [products, setproducts] = useState([]);
    const [selectedProduct, setselectedProduct] = useState('');
    const [orders, setorders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        customer: '',
        price: '',
        quantity: '',

    });


    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const getProducts = async () => {
        const res = await AxiosServices.instance.get('/products');
        console.log(res.msg);
        setproducts(res.msg.data);
        setselectedProduct(res.msg.data[0].title)
    }

    const getOrders = async () => {
        const res = await AxiosServices.instance.get('/orders');
        console.log(res.msg);
        setorders(res.msg.data);

    }

    const createOrder = async () => {
        const prod = products.filter((e) => e.title === selectedProduct);
        const payload = {
            id:'',
            title: selectedProduct,
            customer:formData.customer,
            price: prod[0].price,
            quantity: formData.quantity,
        }
        const res = await AxiosServices.instance.post('/orders', payload);
        if (res.status) {
            getOrders()
            closeModal()
        }
        console.log(res.msg);
    }

    const handleDelete = async (id) => {
        const res = await AxiosServices.instance.delete('/orders',{"id":id} );
        console.log(res.msg);

        if (res.status) {
            getOrders()
        }
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
                        <CustomDropDown options={products.map((e) => e.title)} onSelect={(ev) => setselectedProduct(ev.target.value)} />
                        <CustomTextField name='quantity' hintText={'Quantity'} label={'Quantity'} onChange={handleInputChange} />
                        <CustomTextField name='customer' hintText={'Customer Name'} label={'Customer Name'} onChange={handleInputChange} />
                    </div>
                    <div className='flex flex-row justify-around items-center  p-4'>
                        <CustomButton label={'Close'} onClick={closeModal} />
                        <CustomButton label={'Create Order'} onClick={createOrder} />
                    </div>
                </Modal>

            </div>
            <table className="min-w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="text-left px-4 py-2">ID</th>
                        <th className="text-left px-4 py-2">Product</th>
                        <th className="text-left px-4 py-2">Price</th>
                        <th className="text-left px-4 py-2">Quantity</th>
                        <th className="text-left px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 && orders.map((order) => (
                        <tr key={order.id}>
                            <td className="border px-4 py-2">{order.id}</td>
                            <td className="border px-4 py-2">{order.title}</td>
                            <td className="border px-4 py-2">${order.price.toFixed(2)}</td>
                            <td className="border px-4 py-2">{order.quantity}</td>
                            <td className="border px-4 py-2"><CustomButton label={'Delete'} onClick={()=>handleDelete(order.id)} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;