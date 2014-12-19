Ext.define('MyApp.store.StatesStore', {
    extend: 'Ext.data.Store',
    requires: 'MyApp.model.StatesModel',
    model: 'MyApp.model.StatesModel',
	autoLoad: 'true',
	proxy: {
            type: 'ajax',
            url:'data/states.json',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
	
});
