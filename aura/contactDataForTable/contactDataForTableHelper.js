({
    getData : function(cmp) {
        var action = cmp.get('c.auraGetContact');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var record = response.getReturnValue();
                record.forEach(function(record){
                    record.urlName = 'https://' + location.host + '/lightning/r/Contact/' + record.Id + '/view';
                    record.urlAccount = 'https://' + location.host + '/lightning/r/Account/' + record.AccountId + '/view';
                    record.AccName = record.Account.Name;
                });
                cmp.set('v.parentData', record);
                cmp.set("v.allData", record);

            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})
