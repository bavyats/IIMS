Ext.define('MyApp.view.LoginView', { 
    extend: 'Ext.form.Panel',	
    alias: 'widget.loginView',    	
    height: 180,                
    width: 360,                 
    layout: {
        type: 'fit'             
    },

	items: [
				/*{
                xtype: 'treepanel',
                itemId: 'treepaneltest',
                store: store,
                rootVisible: false,
                useArrows: true,
                frame: true,
                title: 'Check Tree',
                width: 500,
                height: 250,

            },*/
			
    {
        xtype: 'form',        
        frame: false,         
        bodyPadding: 15,      
        defaults: {            
            xtype: 'textfield', 
            anchor: '100%',     
            labelWidth: 60,
			allowBlank: false, 
			vtype: 'alphanum', 
			maxLength: 15,
			labelAlign: 'right',
			msgTarget: 'side'

        },
		dockedItems: [
			{
				xtype: 'toolbar',
				dock: 'bottom',
				items: [
					{
						xtype: 'tbfill' //#24
					},
					{
						xtype: 'button',
						itemId: 'register',
						text: "Sign up"
					},
					{
						xtype: 'button',
						itemId: 'cancel',
						iconCls: 'cancel',
						text: 'Reset'
					},
					{
						xtype: 'button',
						itemId: 'submit',
						formBind: true, 
						iconCls: 'key-go',
						text: "Login"
					}
					]
			}  
		],
        items: [
            {
                name: 'user',    
                fieldLabel: "User",
				maxLength: 20
            },
            {
                inputType: 'password', 
                name: 'password',
                fieldLabel: "Password",
                vtype: 'customPass',  
				enableKeyEvents: true,
				id: 'password'
           }
		   
        ]
    }
	],
    title: "Login",              
    closeAction: 'hide',         
    closable: false ,
	draggable:false,
	resizable:false
});