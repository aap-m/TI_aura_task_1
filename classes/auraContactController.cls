public with sharing class auraContactController {
   @AuraEnabled (cacheable=true)
   public static List<Contact> auraGetContact(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, FirstName, LastName, Email, AccountId, Account.Name, MobilePhone, CreatedDate 
                                FROM Contact 
                                WHERE FirstName 
                                LIKE :key
                                LIMIT 30];
    }
}
