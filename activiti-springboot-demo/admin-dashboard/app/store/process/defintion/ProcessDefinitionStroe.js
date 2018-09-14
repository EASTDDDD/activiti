Ext.define('Admin.store.process.definition.ProcessDefinitionStroe', {
    extend: 'Ext.data.Store',
    alias: 'store.processDefinitionStroe',
    storeId:'processStroe',
	model:'Admin.model.process.definition.ProcessDefinitionModel',
	
    proxy: {
        type: 'rest',//连后台可改为type: 'rest'
        
        url:'/process-definition',
	    reader:new Ext.data.JsonReader({
            type:'json',
            rootProperty:'content',//对应后台返回的结果集名称
            totalProperty: 'totalElements'//分页需要知道总记录数
        }),
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