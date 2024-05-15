// DocumentManagement.js
import { useState } from 'react';

const DocumentManagement = () => {
    const [documents, setDocuments] = useState([
        { id: 1, name: 'Document A', type: 'Type A', version: '1.0' },
        { id: 2, name: 'Document B', type: 'Type B', version: '2.0' },
        { id: 3, name: 'Document C', type: 'Type C', version: '3.0' }
    ]);

    const addDocument = (newDocument) => {
        setDocuments([...documents, newDocument]);
    };

    const editDocument = (documentId, updatedDocument) => {
        setDocuments(documents.map(doc => doc.id === documentId ? updatedDocument : doc));
    };

    const deleteDocument = (documentId) => {
        setDocuments(documents.filter(doc => doc.id !== documentId));
    };

    return (
        <section className="p-4 h-[65vh] bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Documents</h2>
            {/* Form for adding/editing document */}
            <form onSubmit={addDocument} className="mb-4">
                {/* Form fields */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Document</button>
            </form>
            {/* Table to display documents */}
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Type</th>
                        <th className="px-4 py-2">Version</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {documents.map(document => (
                        <tr key={document.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{document.name}</td>
                            <td className="border px-4 py-2">{document.type}</td>
                            <td className="border px-4 py-2">{document.version}</td>
                            <td className="border px-4 py-2">
                                <button onClick={() => editDocument(document.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                <button onClick={() => deleteDocument(document.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default DocumentManagement;
