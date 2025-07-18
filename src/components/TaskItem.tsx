import React from 'react';
import Task from '../classes/Task';

interface TaskItemProps {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
            <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => onToggle(task.id)}
            />
            <span style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
                {task.name}
            </span>
            <span style={{ color: task.category?.color }}>
                {task.category?.name}
            </span>
            <span style={{ color: task.urgent?.color }}>
                {task.urgent?.name}
            </span>
            <button onClick={() => onDelete(task.id)}>Удалить</button>
        </div>
    );
};

export default TaskItem;
