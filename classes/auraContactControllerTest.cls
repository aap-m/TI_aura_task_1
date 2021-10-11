@isTest
private class auraContactControllerTest {
    @isTest 
    static void TestOneContact(){
        Contact ContTest1 = new Contact(FirstName = 'Test1', Lastname = 'Test1');
        Insert ContTest1;

        test.startTest();      
        List<Contact> str = new List<Contact>(contactsConroller.getContact());
        test.stopTest();
        System.assertEquals(str.size(), 1);
    }
    
    @isTest 
    static void TestZeroContact(){

        test.startTest();      
        List<Contact> str = new List<Contact>(contactsConroller.getContact());
        test.stopTest();
        System.assertEquals(str.size(), 0);
    }
}

