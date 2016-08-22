import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        createRecipe(recipe) {
            console.log("create recipe");
            console.log(recipe.title);
        }
    }
});
