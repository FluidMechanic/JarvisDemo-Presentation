import { Selector } from 'testcafe';
import { t } from 'testcafe';
import staticData;


class signupLabel
{
constructor()
{
 this.readyLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > h2')
 this.covidCancelText=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > p')
 this.addressBarLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(4) > label')
 this.visitFrequencyLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(4) > label')
 this.visitDurationLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(6) > label')
 this.visitDayLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(7) > label')
 this.visitTimeText=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(8) > label')
 this.initialVisitLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(8) > p')
 this.commentsLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(9) > label')
 this.butlerPreferenceLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(10) > label')
 this.petsLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(11) > label')
 this.referenceCodeLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(11) > div.coupon-code-title > label')
}
//This functions Validates the labels on the Signup Page
async validateLabels()
{
await t
.expect(this.readyLabel.innerText,staticData.readyLabelText)
}
}
export default new signupLabel();