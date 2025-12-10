import React, { useEffect, useState } from 'react';
import API from './api';
import TodoTable from './components/TodoTable';
import TodoForm from './components/TodoForm';
import './index.css';


function App() {
const [list, setList] = useState([]);
const [editing, setEditing] = useState(null);


const fetchList = async () => {
const res = await API.get('/');
setList(res.data);
};


useEffect(() => { fetchList(); }, []);


const handleAdd = async (data) => {
const res = await API.post('/', data);
setList(prev => [res.data, ...prev]);
};


const handleUpdate = async (data) => {
const res = await API.put(`/${data._id}`, data);
setList(prev => prev.map(item => item._id === res.data._id ? res.data : item));
setEditing(null);
};


const handleDelete = async (id) => {
if (!window.confirm('Delete?')) return;
await API.delete(`/${id}`);
setList(prev => prev.filter(i => i._id !== id));
};


const handleRead = (item) => alert(JSON.stringify(item, null, 2));
const handleEdit = (item) => setEditing(item);


return (
<div style={{ maxWidth: 900, margin: '0 auto' }}>
<h2>Todo CRUD (MERN)</h2>
<TodoForm onSubmit={editing ? handleUpdate : handleAdd} editing={editing} />
<TodoTable data={list} onRead={handleRead} onEdit={handleEdit} onDelete={handleDelete} />
</div>
);
}


export default App;