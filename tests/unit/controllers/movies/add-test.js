import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | movies/add', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:movies/add');
    assert.ok(controller);
  });

  test('addMovie works', function (assert) {
    let controller = this.owner.lookup('controller:movies/add');
    let model = run(() =>
      this.store.createRecord('movie', {
        title: 'Movie title',
        description: 'Movie description',
      })
    );
    assert.ok(model.save(), 'data is saved');
  });
});
