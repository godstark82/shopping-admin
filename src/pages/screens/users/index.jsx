import Header from "@/pages/components/header";
import { useState, useEffect } from "react";
import { getUsers } from "@/services/product/user-service";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortField, setSortField] = useState('createdAt');
    const [sortOrder, setSortOrder] = useState('desc');
    const [roleFilter, setRoleFilter] = useState('all');
    const [dateFilter, setDateFilter] = useState('all');

    const fetchUsers = async () => {
        setIsLoading(true);
        try {
            const usersData = await getUsers();
            setUsers(usersData);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const sortedAndFilteredUsers = users
        .filter(user => {
            if (roleFilter === 'all') return true;
            return user.role === roleFilter;
        })
        .filter(user => {
            if (dateFilter === 'all') return true;
            const userDate = new Date(user.createdAt);
            const today = new Date();
            switch(dateFilter) {
                case 'week':
                    return (today - userDate) <= 7 * 24 * 60 * 60 * 1000;
                case 'month':
                    return (today - userDate) <= 30 * 24 * 60 * 60 * 1000;
                case 'year':
                    return (today - userDate) <= 365 * 24 * 60 * 60 * 1000;
                default:
                    return true;
            }
        })
        .sort((a, b) => {
            if (sortField === 'createdAt') {
                return sortOrder === 'desc' 
                    ? new Date(b.createdAt) - new Date(a.createdAt)
                    : new Date(a.createdAt) - new Date(b.createdAt);
            }
            return 0;
        });

    return (<>
        <Header activeItem="users" />
        <div className="app-wrapper">
            <div className="mx-auto p-4 container">
                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="border-b-2 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <div className="flex gap-4 mb-4">
                            <select 
                                className="px-3 py-1 border rounded"
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                            >
                                <option value="all">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                            
                            <select 
                                className="px-3 py-1 border rounded"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                            >
                                <option value="all">All Time</option>
                                <option value="week">Last Week</option>
                                <option value="month">Last Month</option>
                                <option value="year">Last Year</option>
                            </select>

                            <select 
                                className="px-3 py-1 border rounded"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="desc">Newest First</option>
                                <option value="asc">Oldest First</option>
                            </select>
                        </div>
                        
                        <div className="overflow-x-auto">
                            <table className="divide-y divide-gray-200 min-w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Name</th>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Email</th>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Phone</th>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Role</th>
                                        <th scope="col" className="px-6 py-3 font-medium text-gray-500 text-left text-xs uppercase tracking-wider">Join Date</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {sortedAndFilteredUsers.map((user) => (
                                        <tr key={user.id}>
                                            <td className="px-6 py-4">
                                                <div className="font-medium text-gray-900 text-sm">{user.name}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-500 text-sm">{user.email}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-500 text-sm">{user.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-500 text-sm capitalize">{user.role}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-gray-500 text-sm">
                                                    {new Date(user.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    </>);
}
