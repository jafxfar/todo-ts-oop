import React, { useState } from 'react';
import Task from './classes/Task';
import Category from './classes/Category';
import Urgent from './classes/Urgent';
import TaskList from './components/TaskList';

let taskId = 1;

let dumpCategories: Category[] = [
  new Category(1, 'Работа', '#ff6347'),
  new Category(2, 'Учеба', '#4682b4'),
  new Category(3, 'Дом', '#32cd32'),
];

let dumpUrgents: Urgent[] = [
  new Urgent(1, 'Высокий', '#ff4500'),
  new Urgent(2, 'Средний', '#ffa500'),
  new Urgent(3, 'Низкий', '#90ee90'),
];
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTitle, setNewTitle] = useState<string>('');
  const [urgents, setUrgent] = useState<Urgent[]>(dumpUrgents);
  const [selectedUrgent, setSelectedUrgent] = useState<number>(1);
  const [categories, setCategories] = useState<Category[]>(dumpCategories);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const addTask = () => {
    if (!newTitle.trim()) return;
    const category = categories.find(c => c.id === Number(selectedCategory));
    if (!category) return;
    const urgent = urgents.find(ur => ur.id === Number(selectedUrgent));
    if (!urgent) return;
    const newTask = new Task(taskId++, newTitle, category, urgent);
    setTasks([...tasks, newTask]);
    setNewTitle('');
  };

  const toggleTask = (id: number) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        t.toggle();
      }
      return t;
    });
    setTasks([...updated]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div style={{ maxWidth: 400, margin: '30px auto' }}>
      <h2>📝 Todo List (TypeScript + ООП)</h2>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <input
          type="text"
          value={newTitle}
          placeholder="Новая задача"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <select
          value={selectedUrgent}
          onChange={(e) => setSelectedUrgent(Number(e.target.value))}
        >
          {urgents.map((ur) => (
            <option key={ur.id} value={ur.id}>
              {ur.name}
            </option>
          ))}
        </select>
        <button onClick={addTask}>Добавить</button>
      </div>

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
