Ext.define('Admin.view.order.OrderAddWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.orderAddWindow',
    height: 250,
    minHeight: 100,
    minWidth: 300,
    width: 500,
    //scrollable: true,
    title: 'Add Order Window',
    closable: true,
    constrain: true,
    defaultFocus: 'textfield',
    modal:true,
    layout: 'fit',
    items: [{
        xtype: 'form',
        //layout: 'form',
        layout:{type:'vbox',align:'stretch'},
        //padding: '10px',
        bodyPadding:20,
        //scrollable:true,
        ariaLabel: 'Enter your name',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'id',
            name:'id',
            hidden: true,
            readOnly: true
        }, {
            xtype: 'textfield',
            fieldLabel: 'Order Number',
            name:'orderNumber'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Create Time',
            name:'createTime',
            format: 'Y/m/d H:i:s'
        }]
    }],
   
    // dockedItems: {
    //     dock: 'bottom',
    //     items: [{
    //         xtype: 'button',
    //         text: 'Submit',
    //         handler: 'orderAddFormSubmit'
    //     },{
    //         xtype: 'button',
    //         text: 'Close',
    //         handler: function(btn) {
    //             btn.up('window').close();
    //         }
    //     }]
    // }
      buttons:[{
                text:'save',
                handler: 'submitAddForm'
            },{
                text:'Cancel',
                handler:function(){
                    this.up('window').hide();
                }
        }]
});
