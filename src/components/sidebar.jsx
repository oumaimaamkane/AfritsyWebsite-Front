import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudComponent() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ name: '', description: '' });
    const [editingId, setEditingId] = useState(null);
    const [error, setError] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/crud/projects');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`/api/crud/projects/${editingId}`, formData);
            } else {
                await axios.post('/api/crud/projects', formData);
            }
            setEditingId(null);
            fetchData();
            setFormData({ name: '', description: '' }); // Clear form data after successful submission
        } catch (error) {
            console.error('Error submitting data:', error);
            setError('Failed to submit data');
        }
    };

    const deleteData = async (id) => {
        try {
            await axios.delete(`/api/crud/projects/${id}`);
            fetchData();
        } catch (error) {
            console.error('Error deleting data:', error);
            setError('Failed to delete data');
        }
    };

    const editData = (item) => {
        setFormData(item);
        setEditingId(item.id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" />
                <button type="submit">{editingId ? 'Update' : 'Create'}</button>
            </form>

            {error && <div>{error}</div>}

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => editData(item)}>Edit</button>
                                <button onClick={() => deleteData(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CrudComponent;
