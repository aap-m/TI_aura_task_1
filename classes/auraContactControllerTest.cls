@isTest
private class auraContactControllerTest {
    @isTest 
    static void TestGetContact(){
        Contact ContTest = new Contact(FirstName = 'Test1', Lastname = 'Test1');
        Insert ContTest;

        test.startTest();      
        List<Contact> str = new List<Contact>(contactController.getContact('Test1'));
        test.stopTest();
        System.assertEquals(str.size(), 1);
    }
    
    @isTest 
    static void TestMissContact(){
        Contact ContTest = new Contact(FirstName = 'Test1', Lastname = 'Test1');
        Insert ContTest;

        test.startTest();      
        List<Contact> str = new List<Contact>(contactController.getContact('Rest'));
        test.stopTest();
        System.assertEquals(str.size(), 0);
    }

    @isTest 
    static void TestNullContact(){

        test.startTest();      
        List<Contact> str = new List<Contact>(contactController.getContact(''));
        test.stopTest();
        System.assertNotEquals(str.size(), null);
    }
}