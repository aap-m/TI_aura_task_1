({
    init: function(cmp, event, helper) {

        cmp.set('v.mycolumns', [
            {label: 'First name', fieldName: 'urlName', type: 'url', typeAttributes: {label: { fieldName: 'FirstName' },  target: '_blank'}},
            {label: 'Last Name', fieldName: 'LastName', type: 'text'},
            {label: 'Email', fieldName: 'Email', type: 'email'},
            {label: 'Account', fieldName: 'urlAccount', type: 'url', typeAttributes: { label: { fieldName: 'AccName' },  target: '_blank'}},
            {label: 'Create date', fieldName: 'CreatedDate', type: 'date', typeAttributes:{ month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'},},
            {label: 'Mobile Phone', fieldName: 'MobilePhone', type: 'phone'},
        ]);

    },

    handleInput : function(component, event, helper) {
        
        var searchFilter = event.getSource().get("v.value").toUpperCase();
        component.set("v.searchFilter", searchFilter);
        
    },

    handleClick : function(component, event, helper) {

        var contactDataForTable = component.find("childCmp");
        var message = contactDataForTable.childSearchMethod();
    },

    getValueFromApplicationEvent : function(component, event, helper) {
    
        var ShowResultValue = event.getParam("Pass_Result");
        component.set("v.Get_Result", ShowResultValue);
    }

})