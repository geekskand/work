// ProductManagement.js
import { useState } from 'react';

const ProductManagement = () => {
    // Sample products data
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', startDate: '2024-01-01', endDate: '2024-06-30', isActive: true },
        { id: 2, name: 'Product B', startDate: '2024-02-01', endDate: '2024-08-31', isActive: false },
        { id: 3, name: 'Product C', startDate: '2024-03-01', endDate: '2024-07-15', isActive: true }
    ]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    const editProduct = (productId, updatedProduct) => {
        setProducts(products.map(product => product.id === productId ? updatedProduct : product));
    };

    const deleteProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    return (
        <section className="p-4 h-[65vh] bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 ">Products</h2>
            {/* Form for adding/editing product */}
            <form onSubmit={addProduct} className="mb-4">
                {/* Form fields */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
            </form>
            {/* Table to display products */}
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Start Date</th>
                        <th className="px-4 py-2">End Date</th>
                        <th className="px-4 py-2">Is Active</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border-b">
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.startDate}</td>
                            <td className="px-4 py-2">{product.endDate}</td>
                            <td className="px-4 py-2">{product.isActive ? 'Yes' : 'No'}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => editProduct(product.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                <button onClick={() => deleteProduct(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ProductManagement;
