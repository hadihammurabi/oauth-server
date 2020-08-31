const Route = use('Route')

const buildAuth = () => {
  Route.get('/', 'manage/AuthController.index');
};

Route.group(() => {
  buildAuth();
}).prefix('manage');
