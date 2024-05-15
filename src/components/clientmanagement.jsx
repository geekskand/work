// ClientManagement.js

import { useState } from 'react';

const ClientManagement = () => {
    const [clients, setClients] = useState([
        { id: 1, name: 'Client 1', startDate: '2024-01-01', endDate: '2024-12-31', isActive: true },
        { id: 2, name: 'Client 2', startDate: '2024-02-01', endDate: '2024-11-30', isActive: false },
        { id: 3, name: 'Client 3', startDate: '2024-03-01', endDate: '2024-10-31', isActive: true }
    ]);

    const addClient = () => {
        // Add new client logic
    };

    const editClient = (clientId) => {
        // Edit client logic
        console.log('Editing client with ID:', clientId);
    };

    const deleteClient = (clientId) => {
        // Delete client logic
        const updatedClients = clients.filter(client => client.id !== clientId);
        setClients(updatedClients);
    };

    return (
        <section className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Clients</h2>
            {/* Form for adding/editing client */}
            <form onSubmit={addClient} className="mb-4">
                {/* Form fields */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Client</button>
            </form>
            {/* Table to display clients */}
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
                    {clients.map(client => (
                        <tr key={client.id} className="border-b">
                            <td className="px-4 py-2">{client.name}</td>
                            <td className="px-4 py-2">{client.startDate}</td>
                            <td className="px-4 py-2">{client.endDate}</td>
                            <td className="px-4 py-2">{client.isActive ? 'Yes' : 'No'}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => editClient(client.id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                <button onClick={() => deleteClient(client.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ClientManagement;