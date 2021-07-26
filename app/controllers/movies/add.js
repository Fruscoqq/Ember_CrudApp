import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class MoviesAddController extends Controller {
  @action
  saveMovie() {
    let title = this.title;
    let description = this.description;
    let rating = this.rating;

    console.log(title);

    // Add new movie

    const newMovie = this.store.createRecord('movie', {
      title,
      description,
      rating,
    });

    // Save to DB
    newMovie.save();

    // Clear form
    this.setProperties({
      title: '',
      description: '',
      rating: '',
    });

    console.log(this.store.findAll('movie'));
  }
}
