
import Header from "@/pages/components/header";
import { useState, useEffect } from "react";
import { ProductModel } from "@/models/product-model";
import { addProduct, getProducts, deleteProduct, updateProduct } from "@/services/product/product-service";
import { getCategories } from "@/services/product/category-service";
import { getSubCategories } from "@/services/product/subcategory-service";
import Footer from "@/pages/components/footer";
import Link from "next/link";
import Image from "next/image";


export default function Product() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('title')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: 0,
    discount: 0,
    rating: 0,
    inStock: true,
    categoryId: [],
    subCategoryId: [],
    image: ''
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'categoryId') {
      const newCategories = checked
        ? [...formData.categoryId, value]
        : formData.categoryId.filter(id => id !== value)

      // Remove subcategories that don't belong to selected categories
      const validSubCategories = formData.subCategoryId.filter(subId => {
        const subCategory = subCategories.find(sub => sub.id === subId)
        return subCategory && newCategories.includes(subCategory.categoryId)
      })

      setFormData(prev => ({
        ...prev,
        categoryId: newCategories,
        subCategoryId: validSubCategories
      }))
    } else if (name === 'subCategoryId') {
      setFormData(prev => ({
        ...prev,
        subCategoryId: checked
          ? [...prev.subCategoryId, value]
          : prev.subCategoryId.filter(id => id !== value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      const products = await getProducts()
      setProducts(products)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const categories = await getCategories()
      setCategories(categories)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchSubCategories = async () => {
    try {
      const subCategories = await getSubCategories()
      setSubCategories(subCategories)
    } catch (error) {
      console.error('Error fetching subcategories:', error)
    }
  }

  useEffect(() => {
    fetchProducts()
    fetchCategories()
    fetchSubCategories()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const product = new ProductModel(
        selectedProduct?.id || '',
        formData.title,
        formData.description,
        Number(formData.price),
        Number(formData.discount),
        Number(formData.rating),
        Boolean(formData.inStock),
        formData.categoryId,
        formData.subCategoryId,
        formData.image
      )

      if (selectedProduct) {
        await updateProduct(product)
      } else {
        await addProduct(product)
      }

      setIsDialogOpen(false)
      fetchProducts()
      setFormData({
        title: '',
        description: '',
        price: 0,
        discount: 0,
        rating: 0,
        inStock: true,
        categoryId: [],
        subCategoryId: [],
        image: ''
      })
      setSelectedProduct(null)
    } catch (error) {
      console.error('Error submitting product:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price,
      discount: product.discount,
      rating: product.rating,
      inStock: product.inStock,
      categoryId: Array.isArray(product.categoryId) ? product.categoryId : [product.categoryId],
      subCategoryId: Array.isArray(product.subCategoryId) ? product.subCategoryId : [product.subCategoryId],
      image: product.image || ''
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async () => {
    if (!selectedProduct) return

    try {
      await deleteProduct(selectedProduct.id)
      setIsDeleteDialogOpen(false)
      setSelectedProduct(null)
      fetchProducts()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  // Get filtered subcategories based on selected categories
  const getFilteredSubCategories = () => {
    if (!formData.categoryId.length) return []
    return subCategories.filter(sub => formData.categoryId.includes(sub.categoryId))
  }

  // Filter and sort products
  const getFilteredAndSortedProducts = () => {
    let filteredProducts = [...products]
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => 
        product.categoryId.includes(selectedCategory)
      )
    }

    // Sort products
    return filteredProducts.sort((a, b) => {
      switch(sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        default:
          return a.title.localeCompare(b.title)
      }
    })
  }

  return (
    <>
      <Header activeItem="product" />
      <div className="app-wrapper">
        <div className="mx-auto p-4 container">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border-gray-300 px-4 py-2 border rounded-lg"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-gray-300 px-4 py-2 border rounded-lg"
              >
                <option value="title">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 shadow-md px-6 py-2.5 rounded-lg font-medium text-white transform transition duration-200 ease-in-out hover:scale-105"
            >
              Add Product
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="border-b-2 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
            </div>
          ) : (
            <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {getFilteredAndSortedProducts().map((product) => (
                <div key={product.id} className="bg-white shadow-md hover:shadow-lg rounded-lg transition duration-300 overflow-hidden">
                  {product.image && (
                    <Image src={product.image} alt={product.title} className="w-full h-40 object-cover" />
                  )}
                  <div className="p-4">
                    <h2 className="mb-2 line-clamp-1 font-bold text-gray-800 text-lg">{product.title}</h2>
                    <p className="mb-3 line-clamp-2 text-gray-600 text-sm">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold text-blue-600 text-lg">${product.price}</span>
                      <div className="flex items-center">
                        <span className="mr-1 text-yellow-500">★</span>
                        <span className="text-gray-600 text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={() => handleEdit(product)}
                        className="bg-amber-500 hover:bg-amber-600 px-3 py-1.5 rounded font-medium text-sm text-white transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setSelectedProduct(product)
                          setIsDeleteDialogOpen(true)
                        }}
                        className="bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded font-medium text-sm text-white transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {isDialogOpen && (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white shadow-2xl rounded-2xl w-full max-w-xl max-h-[90vh] transform transition-all overflow-y-auto">
                <div className="top-0 sticky bg-white px-6 py-4 border-b">
                  <h2 className="font-bold text-2xl text-gray-800">
                    {selectedProduct ? 'Edit Product' : 'Add Product'}
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-sm">Title</label>
                      <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-sm">Description</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows="4"
                        className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        required
                      />
                    </div>
                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Price</label>
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                          required
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Discount</label>
                        <input
                          type="number"
                          name="discount"
                          value={formData.discount}
                          onChange={handleInputChange}
                          className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        />
                      </div>
                    </div>
                    <div className="gap-4 grid grid-cols-2">
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Rating</label>
                        <input
                          type="number"
                          name="rating"
                          value={formData.rating}
                          onChange={handleInputChange}
                          min="0"
                          max="5"
                          step="0.1"
                          className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        />
                      </div>
                      <div>
                        <label className="block mb-1 font-medium text-gray-700 text-sm">Image URL</label>
                        <input
                          type="text"
                          name="image"
                          value={formData.image}
                          onChange={handleInputChange}
                          className="border-gray-300 px-4 py-2 border focus:border-blue-500 rounded-lg focus:ring-2 focus:ring-blue-500 w-full transition duration-200"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-sm">Categories</label>
                      {categories.length > 0 ? (
                        <div className="gap-2 border-gray-300 grid grid-cols-2 p-3 border rounded-lg">
                          {categories.map(category => (
                            <label key={category.id} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                name="categoryId"
                                value={category.id}
                                checked={formData.categoryId.includes(category.id)}
                                onChange={handleInputChange}
                                className="border-gray-300 rounded focus:ring-blue-500 text-blue-600"
                              />
                              <span className="text-gray-700 text-sm">{category.name}</span>
                            </label>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 italic">No categories found</p>
                      )}
                    </div>
                    <div>
                      <label className="block mb-1 font-medium text-gray-700 text-sm">Subcategories</label>
                      {formData.categoryId.length > 0 ? (
                        getFilteredSubCategories().length > 0 ? (
                          <div className="gap-2 border-gray-300 grid grid-cols-2 p-3 border rounded-lg">
                            {getFilteredSubCategories().map(subCategory => (
                              <label key={subCategory.id} className="flex items-center space-x-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="subCategoryId"
                                  value={subCategory.id}
                                  checked={formData.subCategoryId.includes(subCategory.id)}
                                  onChange={handleInputChange}
                                  className="border-gray-300 rounded focus:ring-blue-500 text-blue-600"
                                />
                                <span className="text-gray-700 text-sm">{subCategory.name}</span>
                              </label>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 italic">No subcategories found for selected categories</p>
                        )
                      ) : (
                        <p className="text-gray-500 italic">Please select categories first</p>
                      )}
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleInputChange}
                        className="border-gray-300 rounded focus:ring-blue-500 w-4 h-4 text-blue-600"
                      />
                      <label className="ml-2 text-gray-700">In Stock</label>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setIsDialogOpen(false)
                        setSelectedProduct(null)
                        setFormData({
                          title: '',
                          description: '',
                          price: 0,
                          discount: 0,
                          rating: 0,
                          inStock: true,
                          categoryId: [],
                          subCategoryId: [],
                          image: ''
                        })
                      }}
                      className="hover:bg-gray-100 px-6 py-2.5 rounded-lg font-medium text-gray-700 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 px-6 py-2.5 rounded-lg font-medium text-white transition duration-200"
                    >
                      {isSubmitting ? 'Saving...' : 'Save Product'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {isDeleteDialogOpen && (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md transform transition-all">
                <div className="p-6">
                  <div className="mb-4">
                    <h2 className="mb-2 font-bold text-2xl text-gray-800">Confirm Delete</h2>
                    <p className="text-gray-600">Are you sure you want to delete <span className="font-semibold">{selectedProduct?.title}</span>? This action cannot be undone.</p>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setIsDeleteDialogOpen(false)
                        setSelectedProduct(null)
                      }}
                      className="hover:bg-gray-100 px-6 py-2.5 rounded-lg font-medium text-gray-700 transition duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 hover:bg-red-600 px-6 py-2.5 rounded-lg font-medium text-white transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
