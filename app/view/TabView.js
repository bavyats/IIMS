/**
 * ...
 * @author bhavya
 */

Ext.define('MyApp.view.TabView', {
    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',
    alias: 'widget.tabView',
   // width: 400,
    height: 300,
    defaults: {
	bodyPadding: 10,
	autoScroll: true
    },
    items: [
	{
        title: 'Details',
        html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }, {
        title: 'Backup',
        html: 'dipisicing elit, sed do eiusmod tempor incididuLorem ipsum dolor sit amet, consectetur ant ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }, {
        title: 'Ongoing',
        html: 'usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    }
	]
});