Ext.define('MyApp.store.GridViewStore', {
    extend: 'Ext.data.Store',
    requires: 'MyApp.model.GridViewModel',
    model: 'MyApp.model.GridViewModel',
	autoLoad: 'true',
	proxy: {
            type: 'ajax',
            url:'data/userData.json',
            reader: {
                type: 'json',
                root: 'items'
            }
        }
	
});
