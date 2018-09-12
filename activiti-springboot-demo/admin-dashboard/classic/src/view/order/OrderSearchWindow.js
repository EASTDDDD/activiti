Ext.define('Admin.view.order.OrderSearchWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.orderSearchWindow',
    height: 300,
    minHeight: 100,
    minWidth: 300,
    width: 500,
    scrollable: true,
    title: 'Order Search Window',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        layout: 'form',
        padding: '20px',
        ariaLabel: 'Enter your name',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Order Number',
            name:'orderNumber'
        }, {
            xtype: 'datefield',
            fieldLabel: 'From',
            name:'createTimeStart',
            format: 'Y/m/d H:i:s'
        },{
            xtype:'datefield',
            fieldLabel:'To',
            name:'createTimeEnd',
            format:'Y/m/d H:i:s'
        }]
    }],
   
    buttons:[{
            text:'save',
            handler:'submitSearchForm'
           },{
                text:'Cancel',
                handler:function(){
                    this.up('window').hide();
                }
        }]
});
