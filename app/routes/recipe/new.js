import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return {
            title: "some title",
            description: '',
            yield: 2,
            yield_label: 'loaves',
            create_date: '',
            ingredients: [
                {id: 1, qty: '1000', name: 'Whole Wheat Flour', category: 'flours', unit: 'g'},
                {id: 2, qty: '880',  name: 'Water', category: 'liquid', unit: 'g'},
                {id: 3, qty: '12',   name: 'Salt', category: 'additive', unit: 'g'},
                {id: 4, qty: '5',    name: 'Yeast', category: 'additive', unit: 'g'}
            ],
            photos: {},
            steps: {}
        };
    }
});
