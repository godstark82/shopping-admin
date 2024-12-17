import Header from "@/pages/components/header";
import { useState, useEffect } from "react";
import { getOrders } from "@/services/product/order-service";
import Footer from "@/pages/components/footer";
import Image from "next/image";

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [sortBy, setSortBy] = useState('orderDate')

  const fetchOrders = async () => {
    setIsLoading(true)
    try {
      const orders = await getOrders()
      setOrders(orders)
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  // Sort orders
  const getSortedOrders = () => {
    let sortedOrders = [...orders]

    return sortedOrders.sort((a, b) => {
      switch(sortBy) {
        case 'price':
          return a.totalPrice - b.totalPrice
        case 'status':
          return a.status.localeCompare(b.status)
        default:
          return new Date(b.orderDate) - new Date(a.orderDate)
      }
    })
  }

  return (
    <>
      <Header activeItem="orders" />
      <div className="app-wrapper">
        <div className="mx-auto p-4 container">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-gray-300 px-4 py-2 border rounded-lg"
              >
                <option value="orderDate">Sort by Date</option>
                <option value="price">Sort by Price</option>
                <option value="status">Sort by Status</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="border-b-2 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="divide-y divide-gray-200 min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Product</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Order Date</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Status</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Quantity</th>
                    <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Total Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {getSortedOrders().map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {order.product.image && (
                            <Image src={order.product.image} alt={order.product.title} width={48} height={48} className="mr-3 rounded-lg object-cover" />
                          )}
                          <div className="font-medium text-gray-900 text-sm">{order.product.title}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-500 text-sm">
                          {new Date(order.orderDate).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-gray-500 text-sm">{order.quantity}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-blue-600 text-sm">${order.totalPrice}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
