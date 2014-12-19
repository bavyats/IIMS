/**
 * ...
 * @author bhavya
 */

Ext.define('MyApp.view.RegisterForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.registerForm',
	xtype: 'register-form',  
    frame: true,
    title: 'Register',
    bodyPadding: 10,
    autoScroll:true,
    width: 355,
	
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    initComponent: function() {
		
        this.items = [{
            xtype: 'fieldset',
            title: 'User Info',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [
                { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
                { allowBlank:false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Contact Information',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            },
            {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            },
            {
                fieldLabel: 'Company',
                name: 'company'
            },
            {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                store: Ext.create('MyApp.store.StatesStore'),
                valueField: 'name',
                displayField: 'name',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }]
        }];

        this.callParent();
    },

    buttons: [{
        text: 'Reset',
		itemId: 'cancel',
		listeners: {
				click: function() {
					this.up('form').getForm().reset();
				}
			}
    },
	{
        text: 'Register',
		itemId: 'submit',
		action: 'registerSubmit',
        disabled: true,
        formBind: true,
	
    }]
});