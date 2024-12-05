import React, { useEffect, useState } from 'react';

const ProjectDetails = ({ projectId }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const response = await fetch(`/api/projects/${projectId}`);
      const data = await response.json();
      setProject(data);
    };

    fetchProjectDetails();
  }, [projectId]);

  if (!project) return <p>Loading project details...</p>;

  return (
    <div>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>Created by: {project.createdBy}</p>
    </div>
  );
};

export default ProjectDetails;
