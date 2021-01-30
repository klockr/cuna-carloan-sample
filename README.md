# CUNA Frontend Coding Challenge - Car Loan App
Richard Klockowski

1/29/2021

## Build Instructions 
`npm install` - install project dependencies (specified in package-lock.json)

`npm start` - run application locally with node

`npm test` - run unit tests

`npm run build` - create minified build artifacts into 'build' folder

## Technologies
The primary tools you'll be expected to use at this job are modern React/Redux with Typescript.
Displaying familiarity with these is useful and encouraged. Solutions that stray too far 
will not be considered.
- React (using Typescript)
- Redux (mostly redux-form)
- Basic CSS styling

## Requirements
### **Landing Page:**  
- The initial page should show a simple form with inputs for the following fields:
  - Auto Purchase Price (Currency)
  - Auto Make (Text)
  - Auto Model (Text)
  - User Estimated Yearly Income (Currency)
  - User Estimated Credit Score (Number from 300-850)
- All fields are required and must be validated.
- On submission of the form:
  - Validate user input, provide feedback to the user on validation errors
  - If input is valid, make a simulated network call to determine if user qualifies for loan
  - If user qualifies go to New Account Page, else go to Disqualification Page

### **API Call:**
You should implement a mock fetch call for your backend communication. This call should
have the same interface as the real fetch and return a promise wrapped response object.
The response should return disqualify message (Lorum Ipsem is fine) if the purchase price
is more than 1/5th of the income or their estimated credit is below 600. Otherwise it 
should return a positive qualification flag. A `Bad Request` response should be returned 
for any auto purchase price above $1,000,000.

### **New Account Page:**
If the api call does not return a disqualification message(see below), this page 
should have a simple account creation form including:

- Username (Text) - valid email

- Password (Text) - more than 8 characters and a number OR special character

- PasswordVerify (Text) - must be equal to Password field

Password and PasswordVerify field should be hidden as the user types into the field.

Display a "success" message when the account is successfully created.

### **Disqualification Page:**
- Display a simple page with the disqualification message that comes from
the api call.
- Display fake information to get in contact with a customer service.
- There should be no further way to get off this page or re-enter the information. 