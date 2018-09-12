Ext.define('Admin.store.order.OrderGridStroe', {
    extend: 'Ext.data.Store',
    alias: 'store.orderGridStroe',
    storeId:'orderGridStroe',
	model:'Admin.model.order.OrderModel',
	
    proxy: {
        type: 'rest',//连后台可改为type: 'rest'
        //url: '~api/search/users'	//mvc url  xxx.json
        url:'http://localhost:8080/order',
	    reader:{
            type:'json',
            rootProperty:'content',//对应后台返回的结果集名称
            totalProperty: 'totalElements'//分页需要知道总记录数
        },
        writer: {
            type: 'json'
        },
        simpleSortMode: true    //简单排序模式
    },

    autoLoad: true,
    autoSync: true,
    remoteSort: true,//全局(远程)排序
    pageSize: 20,

    sorters: {
        direction: 'DESC',property: 'id'
    }
});
