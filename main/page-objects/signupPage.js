import { Selector } from 'testcafe';
import { t } from 'testcafe';



class SignupPage{
	//ObjectIdentificationSection
	constructor(){
		this.addressSelection = Selector('#addressInput');
		this.time1 = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(4) > div > div > div.owl-stage-outer > div > div:nth-child(3) > div > label > span');
		this.calenderDate = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(5) > div > div > div:nth-child(3) > div.react-datepicker__month > div:nth-child(4) > div.react-datepicker__day.react-datepicker__day--thu')
		this.time2 = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(6) > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > label > span');
		this.commentsSection = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(6) > div > div > div.owl-stage-outer > div > div:nth-child(1) > div > label > span')
		this.butlerSelection = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(8) > ul > li:nth-child(1) > label > span')
		this.petsSelection = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(9) > ul > li:nth-child(1) > label > span')
		this.next = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(10) > div > input')
		this.signupIframe = Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > div > iframe')
		this.signup = Selector('div[class="sign-email"] > a')
		this.firstName = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(2) > div > div > input[type=text]')
		this.lastName = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(4) > div > div > input[type=text]')
		this.phone = Selector('#root > div > section > section > div > div > div > div > form > div > div:nth-child(6) > div > div > input[type=text]')
		this.email = Selector('#root > div > section > section > div > div > div > div > form > div > div.inputRow.email > div > div > input[type=text]')
		this.password = Selector('#root > div > section > section > div > div > div > div > form > div > div.inputRow.password > div > div > input[type=password]')
		this.createAccount = Selector('#root > div > section > section > div > div > div > div > form > div > div.btnRow > button')
		this.relaxIframe = Selector('#rokt-controller-frame')
		this.gotoApp = Selector('#signup-completed > div:nth-child(3) > input')

	}
    //ReusableFunctions
    //bookingDetails--This function provides the customer details and their service preference
	async bookingDetails(){
		await t
			.typeText(this.addressSelection, "1234", { replace: true} , { paste: true },{speed: 0.5})
			.wait(2000)
			.pressKey('down tab',{speed : 0.5})
			.wait(2000)
			.expect(this.time1.visible).ok()
			.click(this.time1,{speed : 0.5})
			.click(this.time1,{speed : 0.5})
			.click(this.calenderDate)
			.click(this.time2)
			.click(this.time2)
			.typeText(this.commentsSection, "Testing", { replace: true} , { paste: true })
			.click(this.butlerSelection)
			.click(this.petsSelection)
			.click(this.next)
			console.log("Booking details submitted")
	}
    //signupWithEmailDetails()--This function allows the client to signup using the Personal/Professional Email
	async signupWithEmailDetails(){
			console.log("Signing up with email")
		await t
			.wait(2000)
			.switchToMainWindow()
			 //await t.debug()
         	.switchToIframe(this.signupIframe)
			.expect(this.signup.visible).ok()
			.click(this.signup)
			.typeText(this.firstName, "Rahul", { replace: true} , { paste: true })
			.typeText(this.lastName, "Jaiswal", { replace: true} , { paste: true })
			.typeText(this.phone, "332288191", { replace: true} , { paste: true })
			.typeText(this.email, "test29@outlook.com", { replace: true} , { paste: true })
			.typeText(this.password, "Jarvis@2020", { replace: true} , { paste: true })
			.click(this.createAccount)
			.wait(2000)
			.switchToMainWindow()
	//		.expect(this.gotoApp.exists).ok()
	}

}
export default new SignupPage();