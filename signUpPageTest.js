/*  This is the automation of Jarvis SignUp Page Flow
*/
import { Selector, t } from 'testcafe';
import signupPage from './main/page-objects/signupPage.js'
import signupLabel from './main/page-objects/signupPageLabels.js'



var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0];



fixture `Jarvis Signup`
.page `https://app.getjarvis.com.au/sign-up`

test
.meta('Test_Id','1001')
.meta('Env','Production')
(testfile+': Validate Sign up flow', async t =>{
  
  //await t.debug()
  console.log("here")
  await t.maximizeWindow();
  console.log("here")
  //await signupLabel.validateLabels()
  await signupPage.bookingDetails()
  console.log("here")
  await signupPage.signupWithEmailDetails()
})
test
.meta('Test_Id','1002')
.meta('Env','Production')
('Validate the labels', async t =>{
  await signupLabel.validateLabels()

})
test
.meta('Test_Id','1003')
.meta('Env','Production')
('Validate the Existing Email Adress', async t =>{
  await t.maximizeWindow()
  await signupPage.bookingDetails();
  await signupPage.signupWithsameEmailDetails()
})
;