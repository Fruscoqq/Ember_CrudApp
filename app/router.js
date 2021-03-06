import EmberRouter from '@ember/routing/router';
import config from 'crud-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', function () {
    this.route('add');
    this.route('edit', { path: '/edit/:movie_id' });
  });
});
