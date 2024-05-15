// ProjectManagement.js
import { useState } from 'react';

const ProjectManagement = () => {
    // Sample projects data
    const [projects, setProjects] = useState([
        { id: 1, name: 'Project A', startDate: '2024-01-01', endDate: '2024-06-30', isActive: true },
        { id: 2, name: 'Project B', startDate: '2024-02-01', endDate: '2024-08-31', isActive: false },
        { id: 3, name: 'Project C', startDate: '2024-03-01', endDate: '2024-07-15', isActive: true }
    ]);

    const addProject = (newProject) => {
        setProjects([...projects, newProject]);
    };

    const editProject = (projectId) => {
        const updatedProjects = projects.map(project => {
            if (project.id === projectId) {
                // Implement logic to update project properties
                return project;
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    const deleteProject = (projectId) => {
        setProjects(projects.filter(project => project.id !== projectId));
    };

    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold mb-4">Projects</h2>
            {/* Form for adding/editing project */}
            <form onSubmit={addProject} className="mb-4">
                {/* Form fields */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Project</button>
            </form>
            {/* Table to display projects */}
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
                    {projects.map(project => (
                        <tr key={project.id} className="border-b">
                            <td className="px-4 py-2">{project.name}</td>
                            <td className="px-4 py-2">{project.startDate}</td>
                            <td className="px-4 py-2">{project.endDate}</td>
                            <td className="px-4 py-2">{project.isActive ? 'Yes' : 'No'}</td>
                            <td className="px-4 py-2">
                                <button onClick={() => editProject(project.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                                <button onClick={() => deleteProject(project.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ProjectManagement;
