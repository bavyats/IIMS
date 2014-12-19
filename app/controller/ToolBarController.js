
Ext.define('MyApp.controller.ToolBarController', {
    extend: 'Ext.app.Controller',
	views: [
        'MyApp.view.ToolBarView'
    ],
	
	requires: [
		'MyApp.view.LoginView',	
	],
	refs: [{
        ref: 'toolBar',
        selector: 'toolBar'
    }],
	init:function(){
		this.control({
			'toolBar':{
				logOut:this.logoutHandler
			}
		});
	},
	logoutHandler:function(){
		var me = this;		
		this.viewport = this.application.viewport;

			Ext.Msg.show({
				title:'Alert!',
				msg: 'Area you sure you want to logout?',
				buttons: Ext.Msg.YESNO,
				icon: Ext.Msg.QUESTION,
				fn: function(btn) {
					if (btn === 'yes') {
						me.viewport.items.getAt(2).getLayout().setActiveItem(0);
						alert("logout success");
					} else if (btn === 'no') {
						console.log('No pressed');						
					} 
				}
			});


		

	}
	
});
