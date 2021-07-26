import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MoviesAddController extends Controller {
  @action
  saveMovie() {
    let title = this.title;
    let description = this.description;

    console.log(title);

    // Add new movie

    const newMovie = this.store.createRecord('movie', {
      title,
      description,
    });

    // Save to DB
    newMovie.save();

    // Clear form
    this.setProperties({
      title: '',
      description: '',
    });

    console.log(this.store.findAll('movie'));
  }
}
