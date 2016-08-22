import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ingredients-editor/ingredients-editor-row', 'Integration | Component | ingredients editor/ingredients editor row', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ingredients-editor/ingredients-editor-row}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ingredients-editor/ingredients-editor-row}}
      template block text
    {{/ingredients-editor/ingredients-editor-row}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
