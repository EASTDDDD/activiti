Ext.define('Admin.view.userdata.DataPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'dataPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
    //viewModel: {type: 'dataViewModel'},
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            id:'usergrid',
            cls: 'user-grid',
            title: 'OrderGrid Results',
            //routeId: 'user',
            bind: '{dataLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 40,dataIndex: 'id',text: '#'},
                {xtype: 'gridcolumn',width: 75,dataIndex: 'username',text: '用户名'},
                {xtype: 'gridcolumn', cls: 'content-column',dataIndex: 'password',text: '密码',flex: 1},
                {xtype: 'actioncolumn',cls: 'content-column', width: 120,dataIndex: 'bool',text: 'Actions',tooltip: 'edit ',
                    items: [
                        {xtype: 'button', iconCls: 'x-fa fa-pencil',handler:'onAddUser'},
                        {xtype: 'button',iconCls: 'x-fa fa-close',handler:'onDeleteUser'},
                        {xtype: 'button',iconCls: 'x-fa fa-ban',handler:'onChangeUser'}
                    ]
                }
            ],
            dockedItems: [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                itemId: 'userPaginationToolbar',
                displayInfo: true,
                bind: '{dataLists}'
            }]
        }]
});
