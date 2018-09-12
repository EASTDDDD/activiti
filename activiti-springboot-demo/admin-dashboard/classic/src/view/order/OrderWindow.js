Ext.define('Admin.view.order.OrderWindow', {
    extend:'Ext.window.Window',
    alias:'widget.orderWindow',
	autoShow:true,
	modal:true,
	layout:'fit',
	width:600,
	height:250,
	title:'修改用户信息',
	
	items:[{
		xtype:'form',
		layout:{type:'vbox',align:'stretch'},
		bodyPadding:20,
		//scrollable:true,
		default:{
			labelWidth:100,
			labelSeparator:''
		},
		defaultType:'textfield',
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
        }],
   
	
		buttons:  [{
	        xtype: 'button',
	        text: 'Submit',
	        handler: 'submitEditForm'//预留提交事件，在ViewController中实现。
	    },{
	        xtype: 'button',
	        text: 'Close',
	        handler: function(btn) {
	            btn.up('window').close();
	        }
	    }]
	
	}]
});
