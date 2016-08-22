import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        add() {
            console.log("can I log??");
        },
        
        remove(ingredient) {
            console.log("remove this ingredient: " + ingredient);
        }
    }
    
});
