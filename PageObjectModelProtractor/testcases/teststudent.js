let studentpage=require("../pages/studentpage")

describe("Regression Suite",function()
{
	
it("Test Add Student Record",function()
{
	
	studentpage.get();
	studentpage.setName("Abhishek");
	studentpage.setContact("938379382");
	studentpage.setSubject("JS");
	studentpage.setMarks("78");
	browser.sleep(2000);
	studentpage.clickSubmitBtn();
	
	browser.sleep(4000);
	studentpage.verifyResult("Abhishek","938379382","JS","78");
	
})
	
	
});