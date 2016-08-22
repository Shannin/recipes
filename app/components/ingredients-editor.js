import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        add() {
            var newIngredient =  {id: 5, qty: '10',    name: 'Rye Flour', category: 'flour', unit: 'g'}
            this.get('ingredients').pushObject(newIngredient);
        },
        
        remove(ingredient) {
            console.log("remove this ingredient: " + ingredient);
            this.get('ingredients').removeObject(ingredient);
        }
    }
});
