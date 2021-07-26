import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MoviesEditController extends Controller {
  @action
  editMovie(id) {
    let self = this;
    let title = this.model.title;
    let description = this.model.description;

    console.log(title);

    // Edit movie
    this.store.findRecord('movie', id).then((curr) => {
      curr.set('title', title);
      curr.set('description', description);

      // Save to DB
      curr.save();

      self.transitionToRoute('movies');
    });
  }
}
