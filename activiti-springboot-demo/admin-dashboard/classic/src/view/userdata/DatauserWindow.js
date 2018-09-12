Ext.define('Admin.view.userdata.DatauserWindow', {
    extend:'Ext.window.Window',
    alias:'widget.datauserWindow',
    //xtype:'dataWindow',
	autoShow:true,
	modal:true,
	layout:'fit',
	width:600,
	height:450,
	title:'修改用户信息',
	items:[{
		xtype:'form',
		layout:{type:'vbox',align:'stretch'},
		bodyPadding:20,
		scrollable:true,
		default:{
			labelWidth:100,
			labelSeparator:''
		},
		defaultType:'textfield',
		items:[{fieldLabel: '#', name: 'id'},
			{fieldLabel: '用户名', name: 'username'},
			{fieldLabel: '密码', name: 'password'}],
			
	
		buttons:[{
			text:'保存',
			handler:function(){
				var form1=this.up('form').getForm();
				if(form1.isValid()){
					form1.submit({
							url : 'http://localhost:8080/user/changeuser',
							method : 'POST',
							waitTitle : "提示",
							waitMsg : '正在提交数据，请稍后 ……',
							success : function() {
								var grid = Ext.getCmp('usergrid');    //通过grid的id取到grid
    							grid.store.reload();
								
							}
							
						});

					this.up('window').hide();
				}


				
			
		}},{
				text:'取消',
				handler:function(){
					this.up('form').getForm().reset();
					this.up('window').hide();
				}
			}]
	
		}]
});
