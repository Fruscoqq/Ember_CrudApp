import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MoviesController extends Controller {
  @action deleteMovie(id) {
    this.store.findRecord('movie', id).then((curr) => {
      curr.deleteRecord();

      curr.save();
    });
  }
}
