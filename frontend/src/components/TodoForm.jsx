import React, { useState, useEffect } from 'react';


const TodoForm = ({ onSubmit, editing }) => {
const [form, setForm] = useState({ name: '', email: '', password: '' });


useEffect(() => {
if (editing) setForm(editing);
}, [editing]);


const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


const submit = (e) => {
e.preventDefault();
if (!form.name || !form.email || !form.password) return alert('Sab bhar do');
onSubmit(form);
setForm({ name: '', email: '', password: '' });
};


return (
<form onSubmit={submit} style={{ marginBottom: 20 }}>
<input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
<input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
<input name="password" value={form.password} onChange={handleChange} placeholder="Password" />
<button type="submit">{editing ? 'Update' : 'Add'}</button>
</form>
);
};


export default TodoForm;