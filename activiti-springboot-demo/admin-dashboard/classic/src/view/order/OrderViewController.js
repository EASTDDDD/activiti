Ext.define('Admin.view.order.OrderViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.orderViewController',
    
    openAddWindow:function(toolbar, rowIndex, colIndex){
		var win = toolbar.up('grid').up('container').add(Ext.widget('orderAddWindow')).show();
		//Ext.widget('orderAddWindow').show();
	},
	openEditWindow:function(grid, rowIndex, colIndex){
		var rec=grid.getStore().getAt(rowIndex);
		console.log(Ext.ClassManager.getName(rec));
		if(rec){
			var win = grid.up('container').add(Ext.widget('orderWindow'));
			win.show();
			win.down("form").getForm().loadRecord(rec);
		}
		
	},
	/*Add Submit*/	
	submitAddForm:function(btn){
		var win    = btn.up('window');
		var form = win.down('form');
		var record = Ext.create('Admin.model.order.OrderModel');
		var values  =form.getValues();//获取form数据
		record.set(values);
		record.save();
		Ext.data.StoreManager.lookup('orderGridStroe').load();
		win.close();
	},
	/*combobox选中后控制对应输入（文本框和日期框）框显示隐藏*/
	searchComboboxSelectChuang:function(combo,record,index){
		//alert(record.data.name);
		var searchField = this.lookupReference('searchFieldName').getValue();
		if(searchField==='createTime'){
			this.lookupReference('searchFieldValue').hide();
			this.lookupReference('searchDataFieldValue').show();
			this.lookupReference('searchDataFieldValue1').show();
		}else{
			this.lookupReference('searchFieldValue').show();
			this.lookupReference('searchDataFieldValue').hide();
			this.lookupReference('searchDataFieldValue1').hide();
		}
		
	},
	submitSearchForm:function(btn){
		var store = Ext.data.StoreManager.lookup('orderGridStroe').load();
		var win = btn.up('window');
		var form1 = win.down('form');
		var values = form1.getValues();
		Ext.apply(store.proxy.extraParams,{orderNumber:'',createTimeStart:'',createTimeEnd:''})
		Ext.apply(store.proxy.extraParams,{orderNumber:values.orderNumber,createTimeStart:Ext.util.Format.date(values.createTimeStart,"Y/m/d H:i:s"),createTimeEnd:Ext.util.Format.date(values.createTimeEnd,"Y/m/d H:i:s")});
		store.load({params:{start:0,limit:20,page:1}});
		win.close();

		//form.getValues();
		//更新事件
	},
	submitEditForm:function(btn){
		var win    = btn.up('window');
		var store = Ext.data.StoreManager.lookup('orderGridStroe');
        var values  = win.down('form').getValues();//获取form数据
        var record = store.getById(values.id);//获取id获取store中的数据
        record.set(values);
        store.load();
        win.close();
	},
	//submitEditForm:function(btn){
	//	var form = btn.up('window').down('form');
	//	//form.getValues();
	//	//更新事件
	//},
	/*Quick Search*/	
	quickSearch:function(btn){
		var searchField = this.lookupReference('searchFieldName').getValue();
		var searchValue = this.lookupReference('searchFieldValue').getValue();
		var searchDataFieldValue = this.lookupReference('searchDataFieldValue').getValue();
		var searchDataFieldValue1 = this.lookupReference('searchDataFieldValue1').getValue();
		var store =	btn.up('gridpanel').getStore();
		//var store = Ext.getCmp('userGridPanel').getStore();// Ext.getCmp(）需要在OrderPanel设置id属性
		Ext.apply(store.proxy.extraParams, {orderNumber:"",createTimeStart:"",createTimeEnd:""});
		
		if(searchField==='orderNumber'){
			Ext.apply(store.proxy.extraParams, {orderNumber:searchValue});
		}
		if(searchField==='createTime'){
			Ext.apply(store.proxy.extraParams, {createTime:searchDataFieldValue,createTimeStart:Ext.util.Format.date(searchDataFieldValue,"Y/m/d H:i:s"),createTimeEnd:Ext.util.Format.date(searchDataFieldValue1,"Y/m/d H:i:s")});
		}
		store.load({params:{start:0, limit:20, page:1}});
	},
	/*Search More*/	
	openSearchWindow:function(toolbar, rowIndex, colIndex){
		toolbar.up('grid').up('container').add(Ext.widget('orderSearchWindow')).show();
	},
	/*Delete More Rows*/	
	deleteMoreRows:function(toolbar, rowIndex, colIndex){
	var grid = toolbar.up('gridpanel');
		var selModel = grid.getSelectionModel();
        if (selModel.hasSelection()) {
            Ext.Msg.confirm("警告", "确定要删除吗？", function (button) {
                if (button == "yes") {
                    var rows = selModel.getSelection();
                    var selectIds = []; //要删除的id
                    Ext.each(rows, function (row) {
                        selectIds.push(row.data.id);
                    });
                  	Ext.Ajax.request({ 
						url : 'http://localhost:8080/order/deletemores', 
						method : 'post',
						
						params : { 
							//ids[] :selectIds
							ids :selectIds
							//ids:Ext.util.JSON.encode(selectIds)
						}, 
						success: function(response, options) {
			                var json = Ext.util.JSON.decode(response.responseText);
				            if(json.success){
				            	Ext.Msg.alert('操作成功', json.msg, function() {
				                    grid.getStore().reload();
				                });
					        }else{
					        	 Ext.Msg.alert('操作失败', json.msg);
					        }
			            }
					});

                }
            });
        }else {
            Ext.Msg.alert("错误", "没有任何行被选中，无法进行删除操作！");
        }
    },
	/*Delete One Row*/	
	deleteOneRow:function(grid, rowIndex, colIndex){
	   Ext.MessageBox.confirm('提示', '确定要进行删除操作吗？数据将无法还原！',
  			function(btn, text){
            	if(btn=='yes'){
            		var store = grid.getStore();
					var record = store.getAt(rowIndex);
					store.remove(record);//DELETE //http://localhost:8081/order/112
					//store.sync();
				}
        	}
        , this);
	},
	onDeleteButton:function(grid, rowIndex, colIndex){
		Ext.Msg.alert("Title","Click Delete Button");
	},
	onDisableButton:function(grid, rowIndex, colIndex){
		Ext.Msg.alert("Title","Click Disable Button");
	}
});
