
Ext.application({
    name: 'MyApp',
    controllers: ['LoginController','GridViewController','RegisterController','ToolBarController'],		
	 models: [ 'GridViewModel'],
	stores:['GridViewStore'],    
    autoCreateViewport: true,
	 enableQuickTips: true,
    appFolder: 'app',

	launch: function()
	{		
		Ext.tip.QuickTipManager.init();
		this.viewport = Ext.ComponentQuery.query('viewport')[0];
		this.centerRegion = this.viewport.down('[region=center]');
  }
});