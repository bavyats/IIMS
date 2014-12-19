Ext.define('MyApp.controller.GridViewController', {
    extend: 'Ext.app.Controller',

    refs: [{
        ref: 'gridView',
        selector: 'gridView'
    }],

    stores: ['GridViewStore'],
    
    init: function() {
        this.control({
            'gridView': {
                selectionchange: this.onGridViewSelect
            }
        });
    },    
   
    onGridViewSelect: function() {
    }
    
    
});
