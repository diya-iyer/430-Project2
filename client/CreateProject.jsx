import React, { useState } from 'react';

const CreateProject = ({ onProjectCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateProject = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    });

    if (response.ok) {
      const newProject = await response.json();
      onProjectCreated(newProject);
      setName('');
      setDescription('');
    } else {
      alert('Failed to create project');
    } 
  };

  return (
    <form onSubmit={handleCreateProject}>
      <h2>Create Project</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Project Description"
        required
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;
