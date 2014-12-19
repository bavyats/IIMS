Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
	layout: 'border',		
	requires: [
        'MyApp.view.LoginView',
		'MyApp.view.GridView',
		'MyApp.view.RegisterForm',
		'MyApp.view.TabView',		
		'MyApp.view.ToolBarView'		
    ],           
	items: [
	{
		region: 'north',
		border: false,		
		items:[
			{	xtype: 'image',
				src: 'images/image.gif',
				width:350,
				height:74
			}			
			]
    },
	{
        region: 'south',
		html: 'InApp Internal Management System',
		xtype: 'toolbar',
		height: 25
				
    },
	{
        region: 'center',
		layout: 'card',
		activeItem: 0,

		items:
			[{

				id: 'card0',
				xtype: 'container',
				items:[ {xtype: 'loginView'}],
				region: 'center',				

				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				}
			 },
			 {
				id: 'card1',
				xtype: 'container',
				items:[ {xtype: 'registerForm'}],
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				}

			},
			{
				items:[
					{xtype: 'toolBar'},
					{xtype: 'gridView'},
					{xtype: 'tabView'}
				 ]
			}]
    }]
       
});