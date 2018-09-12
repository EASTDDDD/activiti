Ext.define('Admin.store.userdata.DataGridStore', {
    extend: 'Ext.data.Store',
    alias: 'store.dataGridStore',
	fields: [
	    {type: 'int',name: 'id'},
	    {type: 'string',name: 'username'},
	    {type: 'string',name: 'password'}
	  
	],
	
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/user/getuser',	//mvc url  xxx.json
	    reader:{
	    	type:'json',
	    	//rootProperty:'lists'
	    }
    },

    autoLoad: 'true',

    sorters: {
        direction: 'ASC',
        property: 'fullname'
    }
});
