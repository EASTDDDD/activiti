Ext.define('Admin.view.userdata.DataViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.dataViewController',
    
	onAddUser:function(grid, rowIndex, colIndex){
		var rec=grid.getStore().getAt(rowIndex);
		var win = Ext.widget('datauserWindow');
		win.show();
		win.down("form").getForm().loadRecord(rec);
	 },
	onDeleteUser:function(grid, rowIndex, colIndex){
		var rowrec=grid.getStore().getAt(rowIndex);
		console.log(rowrec.get('id'));
		var id=rowrec.get('id');
		
		Ext.Msg.confirm('信息确认', '您确认要删除该记录吗？', function(btn) {
				if (btn == 'yes') {

				 Ext.Ajax.request({
				 	 url: 'http://localhost:8080/user/deleteuser',
				     params: {id:id},
				     success: function() {
				         //Ext.ux.Toast.msg("信息提示", "成功删除所选记录！");
				         //Ext.Msg.alert("Title","成功删除所选记录！");
				         var grid = Ext.getCmp('usergrid');    //通过grid的id取到grid
    						grid.store.reload(); 
				     }

				 });

				}
		});

	},
	onChangeUser:function(grid, rowIndex, colIndex){
		Ext.Msg.alert("Title","Click Disable Button");
	}
});
