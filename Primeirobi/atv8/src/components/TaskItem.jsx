export default function TaskItem({ task, onRemove }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
      <span>{task.text}</span>
      <button 
        onClick={() => onRemove(task.id)}
        style={{ color: '#e74c3c', border: '1px solid #e74c3c', background: 'none', cursor: 'pointer', borderRadius: '4px', padding: '2px 8px' }}
      >
        Remover
      </button>
    </li>
  );
}