({
    init : function(component, event, helper) {
        helper.getData(component);
    },

    handleClick: function(component, event, helper) {
            
        var allRecords = component.get("v.allData");
        if (component.get("v.passSearch")==undefined) {
            component.set("v.parentData", component.get("v.allData"));
            } else {
            var tempArray =[];
            var i;
            for(i=0; i<allRecords.length; i++) {
                if(allRecords[i].FirstName && allRecords[i].FirstName.toUpperCase().indexOf(component.get("v.passSearch")) != -1) {
                    tempArray.push(allRecords[i]);
                }
            }
            component.set("v.parentData", tempArray);
        }
        var evt = $A.get("e.c:Result");
        evt.setParams({ "Pass_Result": component.get("v.parentData")});
        evt.fire();
    }
    
})
