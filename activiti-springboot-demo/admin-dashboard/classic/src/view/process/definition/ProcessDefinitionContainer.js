Ext.define('Admin.view.process.definition.ProcessDefinitionContainer', {
    extend: 'Ext.container.Container',
    xtype: 'processDefinitionContainer',
    controller: 'processDefinitionViewController',
    viewModel: {type: 'processDefinitionViewModel'},
    layout: 'fit',
    items: [{xtype:'processDefinitionGridPanel'}]
});
