﻿Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Dashboard',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },{
                text: '订单管理模块',
                iconCls: 'x-fa fa-address-card',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'order',
                leaf: true
            }
            ,{
                text: '测试',
                iconCls: 'x-fa fa-address-card',
                //rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'userdata',
                leaf: true
            },{
                text:'流程定义模块',
                iconCls: 'x-fa fa-address-card',
                viewType:'processDefinitionContainer',
                leaf:true
            },{
                text: 'Login',
                iconCls: 'x-fa fa-check',
                viewType: 'login',
                //hidden:true,
                //style:'display:none',
                leaf: true
           }
        ]
    }
});
