const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  // app.get('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signupPage);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  // // User Authentication
  // app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  // app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  // app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  // app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  // // Project Routes
  // app.post('/projects', mid.requiresLogin, controllers.Project.createProject);
  // app.get('/projects', mid.requiresLogin, controllers.Project.getUserProjects);
  // app.put('/projects/:projectId', mid.requiresLogin, controllers.Project.updateProject);

  // // Task Routes
  // app.get('/tasks', mid.requiresLogin, controllers.Task.getTasks);
  // app.post('/tasks', mid.requiresLogin, controllers.Task.createTask);
  // app.get('/tasks/:id', mid.requiresLogin, controllers.Task.getTaskById);
  // app.put('/tasks/:id', mid.requiresLogin, controllers.Task.updateTask);
  // app.delete('/tasks/:id', mid.requiresLogin, controllers.Task.deleteTask);

  // // Comment Routes
  // app.get('/comments', mid.requiresLogin, controllers.Comment.getComments);
  // app.post('/comments', mid.requiresLogin, controllers.Comment.createComment);

  // // Notifications
  // app.get('/notifications', mid.requiresLogin, controllers.Notification.getNotifications);

  // // Default route
  // app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;
