import { Selector } from 'testcafe';
import { t } from 'testcafe'
import dataset from '../Data/staticData.json' 

//const dataset = require('C:/JarvisDemo/main/Data/staticData.json')

class signupLabel
{
constructor()
{
 this.readyLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > h2')
 this.covidCancelText=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > p')
 this.addressBarLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(4) > label')
 this.visitFrequencyLabel=Selector('#root > div > div > section > section > div > div:nth-child(1) > div > div.bookingYourDetails > form > div:nth-child(5) > label')
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
    console.log(dataset.readyLabelText)
    //console.log(dataset.readyLabelText)
    await t
.expect(this.readyLabel.innerText).eql('Ready? Book now, pay after your visit!',"The labels are matching",{timeout : 5000})
.expect(this.covidCancelText.innerText).eql(dataset.covidCancel,"The labels are matching",{timeout : 5000})
.takeElementScreenshot(this.covidCancelText)
.expect(this.addressBarLabel.innerText).eql(dataset.addressBarLabelText,"The labels are matching",{timeout : 5000})
.expect(this.visitFrequencyLabel.innerText).eql(dataset.visitFrequencyLabelText,"The labels are matching",{timeout : 5000})
.expect(this.visitDurationLabel.innerText).eql(dataset.visitDurationLabelText,"The labels are matching",{timeout : 5000})
.expect(this.visitDayLabel.innerText).eql(dataset.visitDayLabelText,"The labels are matching",{timeout : 5000})
.expect(this.visitTimeText.innerText).eql(dataset.visitTimeText,"The labels are matching",{timeout : 5000})
.takeElementScreenshot(this.initialVisitLabel)
.expect(this.initialVisitLabel.innerText).eql(dataset.initialVisitLabelText,"The labels are matching",{timeout : 5000})
.expect(this.butlerPreferenceLabel.innerText).eql(dataset.butlerPreferenceLabelText,"The labels are matching",{timeout : 5000})
.expect(this.petsLabel.innerText).eql(dataset.petsLabelText,"The labels are matching",{timeout : 5000})
//.expect(this.referenceCodeLabel.innerText).eql(dataset.referenceCodeLabelText,"The labels are matching",{timeout : 5000})

}
}
export default new signupLabel();
