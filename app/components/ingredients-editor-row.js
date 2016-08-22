import Ember from 'ember';

export default Ember.Component.extend({
    actions: {        
        remove(ingredient) {
            this.sendAction("remove", ingredient);
        }
    }
});
