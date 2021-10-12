({
    
    handleClick: function(component, event, helper) {
        
        var action = component.get('c.auraGetContact');
        action.setParams({ searchKey : component.get("v.passSearch") });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var record = response.getReturnValue();
                record.forEach(function(record){
                    record.urlName = 'https://' + location.host + '/lightning/r/Contact/' + record.Id + '/view';
                    record.urlAccount = 'https://' + location.host + '/lightning/r/Account/' + record.AccountId + '/view';
                    record.AccName = record.Account.Name;
                });
                component.set('v.parentData', record);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        });
        $A.enqueueAction(action);

        var evt = $A.get("e.c:Result");
        evt.setParams({ "Pass_Result": component.get("v.parentData")});
        evt.fire();
    }
    
})
