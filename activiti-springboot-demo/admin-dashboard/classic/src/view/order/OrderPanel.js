Ext.define('Admin.view.order.OrderPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'orderPanel',

    requires: [
        'Ext.grid.Panel',
        'Ext.toolbar.Paging',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.grid.column.Date'
    ],
    //controller: 'searchresults',
   // viewModel: {type: 'orderViewModel'},
   // 
    
    layout: 'fit',
    items: [{
            xtype: 'gridpanel',
            selModel: {
                selType: 'checkboxmodel',
                checkOnly: true,
                showHeaderCheckbox: true
            },
            cls: 'user-grid',
            title: 'OrderGrid Results',
            //routeId: 'user',
            bind: '{orderLists}',
            scrollable: false,
            columns: [
                {xtype: 'gridcolumn',width: 40,dataIndex: 'id',text: 'Key',hidden:true},
                {xtype: 'gridcolumn',cls: 'content-column',dataIndex: 'orderNumber',text: 'Order Number',flex: 1},
                {xtype: 'datecolumn',cls: 'content-column',width: 200,dataIndex: 'createTime',text: 'Create Time',formatter: 'date("Y/m/d H:i:s")'},
                
                {xtype: 'actioncolumn',cls: 'content-column', width: 120,text: 'Actions',tooltip: 'edit ',
                    items: [
                        {xtype: 'button', iconCls: 'x-fa fa-pencil' ,handler: 'openEditWindow'},
                        {xtype: 'button',iconCls: 'x-fa fa-close'   ,handler: 'deleteOneRow'},
                        {xtype: 'button',iconCls: 'x-fa fa-ban'     ,handler: 'onDisableButton'}
                    ]
                }
            ],
            tbar: [{
                xtype: 'combobox',
                reference:'searchFieldName',
                hideLabel: true,
                store:Ext.create("Ext.data.Store", {
                    fields: ["name", "value"],
                    data: [
                        { name: '订单编号', value: 'orderNumber' },
                        { name: '创建时间', value: 'createTime' }
                    ]
                }),
                valueField:'value',
                value:'orderNumber',
                //reference:'orderChoice',
                displayField: 'name',
                editable: false,
                queryMode: 'local',
                triggerAction: 'all',
                emptyText: 'Select a state...',
                width: 135,
                listeners:{
                    select: 'searchComboboxSelectChuang'
                }
            },'-',{
                xtype:'textfield',
                reference:'searchFieldValue',
                name:'orderPanelSearchField'
            },'-',{
                fieldLabel:'From',
                hideLabel:true,
                xtype:'datefield',
                format: 'Y/m/d H:i:s',
                reference:'searchDataFieldValue',
                hidden :true,
                name:'from_date'
            },'-',{
                fieldLabel:'To',
                hideLabel:true,
                xtype:'datefield',
                format: 'Y/m/d H:i:s',
                reference:'searchDataFieldValue1',
                hidden :true,
                name:'to_date'
            },'-',{
                text: 'Search',
                iconCls: 'fa fa-search',
                handler: 'quickSearch'
            }, '-',{
                text: 'Search More',
                iconCls: 'fa fa-search-plus',
                handler: 'openSearchWindow' 
            }, '->',{
                text: 'Add',
                tooltip: 'Add a new row',
                iconCls: 'fa fa-plus',
                handler: 'openAddWindow'    
            },'-',{
                text: 'Removes',
                tooltip: 'Remove the selected item',
                itemId: 'orderGridPanelRemove',
                iconCls:'fa fa-trash',
                disabled: true,
                handler: 'deleteMoreRows'   
            }],   
            listeners: {
                selectionchange: function(selModel, selections){
                        this.down('#orderGridPanelRemove').setDisabled(selections.length === 0);
                    }
            },     
            dockedItems: [{
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                //itemId: 'userPaginationToolbar',
                displayInfo: true,
                bind: '{orderLists}'
            }]

        }]
        
});
