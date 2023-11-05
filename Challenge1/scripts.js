//fixed variable 
const firstName = 'John';
const age = 35;
const hobby = 'Coding';

//Modified the logTwice function to take a parameter and log it twice.
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

// Changed the name of the conflicting function hobby to displayMessage
// Fixed variable name (firstName)
function displayMessage() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

//Called the displayMessage function instead of the conflicting hobby function
displayMessage();