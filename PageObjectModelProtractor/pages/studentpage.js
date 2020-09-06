let studentpage=function(){
	
	console.log("Locators for StudentPage");
	let txtname=element(by.name("name"));
	let txtcontact=element(by.name("contact"));
	let dropsubject=element(by.name("subject"));
	let txtmarks=element(by.name("marks"));
	let btnSubmit=element(by.css("input[value=Submit]"));
	
	
	this.get = async function() {
		    await browser.get('https://www.trycatchclasses.com/code/demo/angular4_crud/');
		  }
	
	
	this.setName=async function(name){
	       await txtname.sendKeys(name);
	}
	
	this.setContact=async function(contact){
	      await txtcontact.sendKeys(contact);
    }
   
   this.setSubject=async function(subject){
          await dropsubject.element(by.xpath("//option[contains(text(),'"+subject+"')]")).click();
   } 
   
   this.setMarks=async function(marks)
   {
	     await txtmarks.sendKeys(marks);
   }
   
   this.clickSubmitBtn=async function()
   {	   
	   await btnSubmit.click();
   }
   
   
   this.verifyResult=function(name,contact,subject,marks){

	   var until = protractor.ExpectedConditions;
	   browser.wait(until.presenceOf(element(by.xpath("//td[2]")), 5000, 'Element taking too long to appear in the DOM'));
	   
	   let rows=element.all(by.tagName("tr"));
	   expect(rows.get(0).element(by.xpath("//td[2]")).getText()).toBe(name);
	   expect(rows.get(0).element(by.xpath("//td[3]")).getText()).toBe(contact);
	   expect(rows.get(0).element(by.xpath("//td[4]")).getText()).toBe(subject);
	   expect(rows.get(0).element(by.xpath("//td[5]")).getText()).toBe(marks);
	   
   }
   
};
	
module.exports=new studentpage();