import Header from "@/pages/components/header";
import { useState, useEffect } from "react";
import { CategoryModel } from "@/models/category-model";
import { addCategory, getCategories, deleteCategory, updateCategory } from "@/services/product/category-service";
import Link from 'next/link'
import Image from "next/image";

export default function Category() {
  const [categories, setCategories] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: ''
  })  

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const fetchCategories = async () => {
    setIsLoading(true)
    try {
      const categories = await getCategories()
      setCategories(categories)
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleEdit = (category) => {
    setSelectedCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      image: category.image
    })
    setIsDialogOpen(true)
  }

  const handleDelete = async () => {
    if (!selectedCategory) return
    
    setIsSubmitting(true)
    try {
      await deleteCategory(selectedCategory.id)
      await fetchCategories()
      setIsDeleteDialogOpen(false)
      setSelectedCategory(null)
    } catch (error) {
      console.error('Error deleting category:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      if (selectedCategory) {
        // Update existing category
        const updatedCategory = new CategoryModel(
          selectedCategory.id,
          formData.name,
          formData.description,
          formData.image
        )
        await updateCategory(updatedCategory)
      } else {
        // Add new category
        const newCategory = new CategoryModel(
          Date.now().toString(),
          formData.name,
          formData.description,
          formData.image
        )
        await addCategory(newCategory)
      }
      await fetchCategories()
      setIsDialogOpen(false)
      setSelectedCategory(null)
      setFormData({ name: '', description: '', image: '' })
    } catch (error) {
      console.error('Error saving category:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeDialog = () => {
    setIsDialogOpen(false)
    setSelectedCategory(null)
    setFormData({ name: '', description: '', image: '' })
  }

  return <>
    <Header activeItem="category" />
    <div className="app-wrapper">
      <div className="mx-auto p-4 container">
        <div className="flex justify-end mb-6">
          <button
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-semibold text-white transition-colors duration-200 focus:outline-none"
            onClick={() => setIsDialogOpen(true)}
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New Category
          </button>
        </div>

        {/* Add/Edit Category Dialog */}
        {isDialogOpen && (
          <div className="z-50 fixed inset-0 overflow-y-auto">
            <div className="sm:block flex justify-center items-center px-4 sm:p-0 pt-4 pb-20 min-h-screen text-center">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={closeDialog} />

              <div className="inline-block relative align-bottom bg-white shadow-xl sm:my-8 px-4 sm:p-6 pt-5 pb-4 rounded-lg sm:w-full sm:max-w-lg text-left transform transition-all overflow-hidden sm:align-middle">
                <div className="top-0 right-0 absolute pt-4 pr-4">
                  <button
                    onClick={closeDialog}
                    className="bg-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="font-medium text-gray-900 text-lg leading-6">
                    {selectedCategory ? 'Edit Category' : 'Add New Category'}
                  </h3>
                  <p className="mt-1 text-gray-500 text-sm">
                    {selectedCategory ? 'Edit the category details' : 'Fill in the details to create a new category'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-medium text-gray-700 text-sm">Title</label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="block border-gray-300 focus:border-indigo-500 shadow-sm px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 w-full sm:text-sm"
                        placeholder="Enter category title"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block font-medium text-gray-700 text-sm">Description</label>
                    <div className="mt-1">
                      <textarea
                        name="description"
                        id="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="block border-gray-300 focus:border-indigo-500 shadow-sm px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 w-full sm:text-sm"
                        placeholder="Enter category description"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="image" className="block font-medium text-gray-700 text-sm">Image URL</label>
                    <div className="mt-1">
                      <input
                        type="url"
                        name="image"
                        id="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        className="block border-gray-300 focus:border-indigo-500 shadow-sm px-3 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 w-full sm:text-sm"
                        placeholder="Enter image URL"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 mt-6">
                    <button
                      type="button"
                      onClick={closeDialog}
                      className="border-gray-300 bg-white hover:bg-gray-50 shadow-sm px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium text-gray-700 text-sm focus:outline-none"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 shadow-sm px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-medium text-sm text-white focus:outline-none"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="mr-2 -ml-1 w-4 h-4 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          {selectedCategory ? 'Updating...' : 'Adding...'}
                        </>
                      ) : selectedCategory ? 'Update Category' : 'Add Category'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        {isDeleteDialogOpen && (
          <div className="z-50 fixed inset-0 overflow-y-auto">
            <div className="flex justify-center items-center px-4 pt-4 pb-20 min-h-screen text-center">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsDeleteDialogOpen(false)} />
              
              <div className="inline-block align-bottom bg-white shadow-xl sm:my-8 px-4 sm:p-6 pt-5 pb-4 rounded-lg sm:w-full sm:max-w-lg text-left transform transition-all overflow-hidden sm:align-middle">
                <div className="sm:flex sm:items-start">
                  <div className="flex flex-shrink-0 justify-center items-center bg-red-100 mx-auto sm:mx-0 rounded-full w-12 sm:w-10 h-12 sm:h-10">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
                    <h3 className="font-medium text-gray-900 text-lg leading-6">Delete Category</h3>
                    <div className="mt-2">
                      <p className="text-gray-500 text-sm">
                        Are you sure you want to delete this category? This action cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:flex sm:flex-row-reverse mt-5 sm:mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center bg-red-600 hover:bg-red-700 shadow-sm sm:ml-3 px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-red-500 focus:ring-offset-2 w-full sm:w-auto font-medium text-base text-white sm:text-sm focus:outline-none"
                    onClick={handleDelete}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Deleting...' : 'Delete'}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center border-gray-300 bg-white hover:bg-gray-50 shadow-sm mt-3 sm:mt-0 px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full sm:w-auto font-medium text-base text-gray-700 sm:text-sm focus:outline-none"
                    onClick={() => setIsDeleteDialogOpen(false)}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-indigo-600 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-gray-600">Loading categories...</span>
            </div>
          </div>
        ) : categories?.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="divide-y divide-gray-200 min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Image</th>
                  <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Description</th>
                  <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Image src={category.image} alt={category.name} className="rounded-lg w-16 h-16 object-cover" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900 text-sm">{category.name}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="line-clamp-2 text-gray-500 text-sm">{category.description}</div>
                    </td>
                    <td className="text-right px-6 py-4 font-medium text-sm whitespace-nowrap">
                      <button
                        className="mr-4 text-indigo-600 hover:text-indigo-900"
                        onClick={() => handleEdit(category)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsDeleteDialogOpen(true)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center bg-gray-50 rounded-lg min-h-[400px]">
            <svg className="mb-4 w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="mb-1 font-medium text-gray-900 text-xl">No Categories Yet</h3>
            <p className="text-gray-500">Get started by adding your first category</p>
          </div>
        )}
      </div>
    </div>
  </>
}
