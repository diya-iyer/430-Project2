import React from 'react';
import ProjectDetails from './ProjectDetails';
import TaskList from './TaskList';
import CreateTask from './CreateTask';

const ProjectPage = ({ projectId }) => (
  <div>
    <ProjectDetails projectId={projectId} />
    <TaskList projectId={projectId} />
    <CreateTask projectId={projectId} onTaskCreated={() => window.location.reload()} />
  </div>
);

export default ProjectPage;
