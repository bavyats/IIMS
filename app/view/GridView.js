/**
 * ...
 * @author Bhavya
 */
Ext.define('MyApp.view.GridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridView',    
    store: 'GridViewStore',
    title: 'Details',
	
	 plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ], 
    initComponent: function() {	
        this.columns = [
		{
			
			text: 'Select',
			dataIndex:'important',
			width: 70,
			renderer: function (value, meta, record, rowIndex, colIndex) {					
				return "<input type='checkbox'" + (value ? "checked='checked'" : "") + ">";
			}
		},
		
		{	
			header:'Name',
            dataIndex: 'name'
        },
		{
			header:'ID',
            dataIndex: 'id'
        },
		{
			header:'Email',
            dataIndex: 'email'
        },
		{ 
			header:'Description',
            dataIndex: 'description',
			flex :1,
			editor: {
                    xtype: 'textfield',
                    allowBlank: false
                }
        },
		{
			header:'visited',
            dataIndex: 'important'			
        }		
		];    
        this.callParent(arguments);
    },
	formatDate: function(value){
        return value ? Ext.Date.dateFormat(value, 'M d, Y') : '';
    }
});