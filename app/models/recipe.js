import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.addr('string'),
    description: DS.addr('string'),
    yield: DS.addr('number'),
    yield_label: DS.addr('string'),
    create_date: DS.attr('date', {
        defaultValue() { return new Date(); }
    }),
    ingredients: [],
    photos: [],
    steps: []
});
