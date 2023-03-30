// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/proprietors/create', function (req, res) {

    // Make a variable and give it the value from 'how-many-balls'
    var selectedBody = req.session.data['select-yes']
  
    // Check whether the variable matches a condition
    if (selectedBody == "body-yes"){
      // Send user to next page
      res.redirect('/proprietors/create-body#ch_proprietors')
    } else {
      // Send user to ineligible page
      res.redirect('/proprietors/create-individual#ch_proprietors')
    }
  
  })