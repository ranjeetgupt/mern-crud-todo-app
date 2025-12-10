import React from 'react';


const TodoTable = ({ data, onRead, onEdit, onDelete }) => {
return (
<div className="table-wrapper">
<table style={{ width: '100%', borderCollapse: 'collapse' }}>
<thead>
<tr>
<th>SN.</th>
<th>NAME</th>
<th>EMAIL</th>
<th>PASSWORD</th>
<th>ACTIONS</th>
</tr>
</thead>
<tbody>
{data.map((item, idx) => (
<tr key={item._id} style={{ borderBottom: '1px solid #eee' }}>
<td style={{ padding: 12 }}>{idx + 1}</td>
<td style={{ padding: 12, fontWeight: 600 }}>{item.name}</td>
<td style={{ padding: 12 }}>{item.email}</td>
<td style={{ padding: 12 }}>{item.password}</td>
<td style={{ padding: 12 }}>
<span className="action-link" style={{ color: 'green' }} onClick={() => onRead(item)}>Read</span>
<span className="action-link" style={{ color: 'orange' }} onClick={() => onEdit(item)}>Edit</span>
<span className="action-link" style={{ color: 'red' }} onClick={() => onDelete(item._id)}>Delete</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
};


export default TodoTable;