import React, { useState } from 'react';

const CreateTask = ({ projectId, onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ projectId, title, description }),
    });
    if (response.ok) {
      const newTask = await response.json();
      onTaskCreated(newTask);
      setTitle('');
      setDescription('');
    } else {
      alert('Failed to create task');
    }
  };

  return (
    <form onSubmit={handleCreateTask}>
      <h2>Create Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
