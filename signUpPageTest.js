/*  This is the automation of Jarvis SignUp Page Flow
*/
import { Selector, t } from 'testcafe';
import signupPage from './main/page-objects/signupPage.js'


var data;
var path = require('path')
var testfile = path.basename(__filename).split('.')[0]
var Fakerator = require("fakerator");
var fakerator = Fakerator();

fixture `Jarvis Signup`
.page `https://app.getjarvis.com.au/sign-up`

test
(testfile+': Validate Sign up flow', async t =>{
  var email = fakerator.internet.email()
  //await t.debug()
  //console.log()
  await t.maximizeWindow();
  console.log("here")
  await signupPage.bookingDetails()
  console.log("here")
  await signupPage.signupWithEmailDetails()
});