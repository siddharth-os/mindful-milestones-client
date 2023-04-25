export function validateLICString(inputString) {
    // Define the regex pattern for "LIC" followed by 5 digits
    var regex = /^LIC\d{5}$/;
    // Test the input string against the regex pattern
    var isValid = regex.test(inputString);

    console.log(isValid);
    // Return true if the input string is valid, false otherwise
    return isValid;
  }
  
  export function validateMobileNumber(mobileNumber) {
    // Define the regex pattern for 10 digits
    var regex = /^\d{10}$/;
  
    // Test the input mobile number against the regex pattern
    var isValid = regex.test(mobileNumber);
  
    // Return true if the mobile number is valid, false otherwise
    return isValid;
  }
  