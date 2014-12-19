Ext.define('MyApp.controller.RegisterController', {
    extend: 'Ext.app.Controller',
	views: [
        'MyApp.view.RegisterForm'
    ],
      refs: [{
        ref: 'registerForm',
        selector: 'registerForm'
    }],

    init: function() {		
		
        this.control({
		'button[action=registerSubmit]' : {
            click: this.registerAction
        }
			
        });    
    },
	registerAction: function(button, event) {
		var me = this;		
		this.viewport = this.application.viewport;
		me.viewport.items.getAt(2).getLayout().setActiveItem(2);
		Ext.Msg.alert('Registered successfully');
	}
    
});
