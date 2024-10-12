import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product A',
      boxCode: 'BOX001',
      itemCode: 'ITEM001',
      buyingPrice: 100,
      sellingPrice: 150,
    },
    {
      id: 2,
      name: 'Product B',
      boxCode: 'BOX002',
      itemCode: 'ITEM002',
      buyingPrice: 80,
      sellingPrice: 120,
    },
    {
      id: 3,
      name: 'Product C',
      boxCode: 'BOX003',
      itemCode: 'ITEM003',
      buyingPrice: 60,
      sellingPrice: 90,
    },
  ]);

  const [message, setMessage] = useState('');
  const [newProduct, setNewProduct] = useState({
    name: '',
    boxCode: '',
    itemCode: '',
    buyingPrice: '',
    sellingPrice: '',
  });

  const handleQuantityUpdate = (id, field, value) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, [field]: value };
      }
      return product;
    });
    setProducts(updatedProducts);
    setMessage('Product updated successfully!');
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.boxCode || !newProduct.itemCode || !newProduct.buyingPrice || !newProduct.sellingPrice) {
      setMessage('Please fill all fields to add a product.');
      return;
    }

    const newId = products.length ? Math.max(products.map(p => p.id)) + 1 : 1;
    setProducts([...products, { id: newId, ...newProduct }]);
    setNewProduct({ name: '', boxCode: '', itemCode: '', buyingPrice: '', sellingPrice: '' });
    setMessage('Product added successfully!');
  };

  const handleBulkUpload = (event) => {
    console.log('Bulk upload file:', event.target.files[0]);
    setMessage('Bulk upload feature is under construction.');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Manage Products</h1>
      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      
      {/* Manual Add Product Form */}
      <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Box Code"
            value={newProduct.boxCode}
            onChange={(e) => setNewProduct({ ...newProduct, boxCode: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Item Code"
            value={newProduct.itemCode}
            onChange={(e) => setNewProduct({ ...newProduct, itemCode: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Buying Price"
            value={newProduct.buyingPrice}
            onChange={(e) => setNewProduct({ ...newProduct, buyingPrice: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Selling Price"
            value={newProduct.sellingPrice}
            onChange={(e) => setNewProduct({ ...newProduct, sellingPrice: e.target.value })}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAddProduct}
            className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200 col-span-1 sm:col-span-2"
          >
            Add Product
          </button>
        </div>
      </div>

      {/* Bulk Upload Section */}
      <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Bulk Upload Products</h2>
        <div className="flex items-center">
          <input
            type="file"
            onChange={handleBulkUpload}
            className="border border-gray-300 rounded-md p-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => setMessage('Bulk upload feature is under construction.')}
            className="btn btn-primary hover:bg-blue-700 transition duration-200"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 mt-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Box Code</th>
              <th className="border border-gray-300 px-4 py-2">Item Code</th>
              <th className="border border-gray-300 px-4 py-2">Buying Price</th>
              <th className="border border-gray-300 px-4 py-2">Selling Price</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                <td className="border border-gray-300 px-4 py-2">{product.boxCode}</td>
                <td className="border border-gray-300 px-4 py-2">{product.itemCode}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    value={product.buyingPrice}
                    onChange={(e) => handleQuantityUpdate(product.id, 'buyingPrice', e.target.value)}
                    className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    value={product.sellingPrice}
                    onChange={(e) => handleQuantityUpdate(product.id, 'sellingPrice', e.target.value)}
                    className="border border-gray-300 rounded-md p-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => handleQuantityUpdate(product.id, 'sellingPrice', product.sellingPrice)}
                    className="btn btn-neutral  rounded-md hover:bg-blue-700 transition duration-200"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      const updatedProducts = products.filter((p) => p.id !== product.id);
                      setProducts(updatedProducts);
                      setMessage('Product deleted successfully!');
                    }}
                    className="bg-red-600 text-white py-1 px-2 rounded-md hover:bg-red-700 transition duration-200"
                  >
                    <FaTrash />
                  </button>
                  <button
                    onClick={() => {
                      console.log('Edit product:', product);
                    }}
                    className="bg-yellow-600 text-white py-1 px-2 rounded-md hover:bg-yellow-700 transition duration-200"
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
