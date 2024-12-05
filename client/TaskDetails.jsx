import React, { useEffect, useState } from 'react';

const TaskDetails = ({ taskId }) => {
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTaskDetails = async () => {
      const response = await fetch(`/api/tasks/${taskId}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTaskDetails();
  }, [taskId]);

  if (!task) return <p>Loading task details...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Assigned to: {task.assignedTo}</p>
    </div>
  );
};

export default TaskDetails;
