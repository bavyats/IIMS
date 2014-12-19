Ext.define('MyApp.controller.LoginController', {
    extend: 'Ext.app.Controller',
	views: [
        'LoginView','RegisterForm','CapsLockTooltip'
    ],
	requires: [
		'MyApp.view.RegisterForm',	
		'MyApp.util.MD5'	
    ],    
	refs: [
    {
        ref: 'capslocktooltip',
        selector: 'capslocktooltip'
    }],
     
    init: function() {
        this.control({
			"loginView form textfield[name=password]": {
				//keypress: this.onTextfieldKeyPress
			},
			"loginView form textfield": {
				specialkey: this. onTextfieldSpecialKey
			},
           	"loginView form button#submit": {       
				click: this.onButtonClickSubmit 
			},
			"loginView form button#cancel": {       
				click: this.onButtonClickCancel 
			},
			"loginView form button#register": {       
				click: this.onButtonClickRegister
			}
   
        });  

		Ext.apply(Ext.form.field.VTypes, {
			customPass: function(val, field) {
				return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
			},
			customPassText: 'Length must be at least 6 characters and must contain one digit, one letter lowercase, one letter uppercase, one special symbol',
		});
    },
	onButtonClickSubmit: function(button, e, options) {
		var me = this;		
		this.viewport = this.application.viewport;		

		var formPanel = button.up('form'),
		login = button.up('loginView'),
		user = formPanel.down('textfield[name=user]').getValue(),
		pass = formPanel.down('textfield[name=password]').getValue();
		pass = MyApp.util.MD5.encode(pass);			
			
	login.body.mask("Authenticating... Please wait...", 'loading');

  
			if (formPanel.getForm().isValid()) {
				Ext.Ajax.request({
					url: 'php/login.php',
					params: {
						user: user,
						password: pass
					}, 
					success: function(response){
						var text = response.responseText;
						login.close();
						me.viewport.items.getAt(2).getLayout().setActiveItem(2);
					},
					failure: function(conn, response, options, eOpts) {
						var text = response.responseText;
						console.log("failure !!  "+ text);
						Ext.widget('userlist'); 
					}

				});
					Ext.get(login.getEl()).unmask();				  
			}
		
		
	},
	onButtonClickCancel: function(button, e, options) {
		button.up('form').getForm().reset();
	},
	onButtonClickRegister: function(button, e, options) {
		var me = this;
		this.viewport = this.application.viewport;
		login = button.up('loginView'),
		login.close();
		me.viewport.items.getAt(2).getLayout().setActiveItem(1);
	},
	onTextfieldSpecialKey: function(field, e, options) {
		if (e.getKey() == e.ENTER){
			var submitBtn = field.up('form').down('button#submit');
			submitBtn.fireEvent('click', submitBtn, e, options);
		}
	},
	onTextfieldKeyPress: function(field, e, options) {		
		var charCode = e.getCharCode(); 
    
    if((e.shiftKey && charCode >= 97 && charCode <= 122) || 
        (!e.shiftKey && charCode >= 65 && charCode <= 90)){

        if(this.getCapslockTooltip() === undefined){ 
            Ext.widget('capslocktooltip');           
        }

        this.getCapslockTooltip().show(); 

    } else {
        if(this.getCapslockTooltip() !== undefined){
            this.getCapslockTooltip().hide();       
        }
    }
}

//end
});
