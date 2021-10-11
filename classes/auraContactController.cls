public with sharing class auraContactController {
   @AuraEnabled (cacheable=true)
   public static List<Contact> auraGetContact() {
    
    return [SELECT Id, FirstName, LastName, Email, AccountId, Account.Name, MobilePhone, CreatedDate 
            FROM Contact
            LIMIT 15 ];
    }
}
