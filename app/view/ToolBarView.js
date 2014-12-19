/**
 * ...
 * @author bhavya
 */

Ext.define('MyApp.view.ToolBarView', {
    extend: 'Ext.toolbar.Toolbar',
    //xtype: 'bottom-toolbar',
	itemId:'myToolBar',
    alias: 'widget.toolBar',
    height: 40,   
	initComponent:function(){
		var me=this;
	this.items = [
			{xtype: 'tbfill'},
			{text: 'Help',
				disabled : true
			},
			//{type: 'tbseparator'},
			{	 
				type: 'button',
				text: 'Settings',
				scale: 'medium',
				menu: [{
                        text:'My Profile',
						disabled : true
                    },{
                        text:'Change Password',
						disabled : true
                    },{
                        text:'View Options',
						disabled : true  
                    }]              
			},
			{xtype: 'tbseparator'},
			{	 
				 text: 'Logout',
				 
				 handler: function(){

					me.fireEvent('logOut');
				}
				 
			}],
			Ext.apply(this);
        this.callParent(arguments);
	}	

	
	
});