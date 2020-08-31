const Route = use('Route')

const buildOauth = () => {
  Route.post('/oauth/token', 'v1/OAuthController.token');
  Route.post('/oauth/signature', 'v1/OAuthController.signature').middleware(['auth']);
};

const buildProtected = () => {
  Route.post('/', 'v1/IndexController.index').middleware(['signature']);
  Route.get('/protected', 'v1/ProtectedController.index');
};

Route.group(() => {
  buildOauth();
  buildProtected();
}).prefix('v1');
