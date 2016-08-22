import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return {
            title: "some title",
            description: "",
            create_date: "",
            ingredients: [
                {id: 1, name: 'Whole Wheat Flour', category: 'flours', unit: 'g'},
                {id: 2, name: 'Water', category: 'liquid', unit: 'g'},
                {id: 3, name: 'Salt', category: 'additive', unit: 'g'},
                {id: 4, name: 'Yeast', category: 'additive', unit: 'g'}
            ],
            photos: {},
            steps: {}
        };
    }
});
