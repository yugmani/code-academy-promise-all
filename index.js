// Import stylesheets
import './style.css';

//Example of Promise.all()
/*
let myPromises = Promise.all([
  returnsPromOne(),
  returnsPromTwo(),
  returnsPromThree(),
]);

myPromises
  .then((arrayOfValues) => {
    console.log(arrayOfValues);
  })
  .catch((rejectionReason) => {
    console.log(rejectionReason);
  });
*/

//Starter Code
const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:

//Task
/* 1.
Our business is doing so well that we’re running low on inventory. We want to reach out to some distributors to see if they have the items we need. We only want to make one restocking order, so we’ll only want to place the order if all of the items are available.

Take a look at the provided code. We require in one function: checkAvailability().

checkAvailability() expects two string arguments: an item and a distributor. It returns a promise. The function simulates checking that the given distributor has a given item. 80% of the time it will resolve the promise with the item, and 20% of the time it will reject the promise with an error message stating that the item isn’t available.

We also provided two functions which will serve as success and failure handlers.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.
*/

/* 2.
Create three variables each assigned to a separate promise:

checkSunglasses should be assigned the value returned from invoking checkAvailability() with 'sunglasses' as its first argument and 'Favorite Supply Co.' as its second argument.
checkPants should be assigned the value returned from invoking checkAvailability() with 'pants' as its first argument and 'Favorite Supply Co.' as its second argument.
checkBags should be assigned the value returned from invoking checkAvailability() with 'bags' as its first argument and 'Favorite Supply Co.' as its second argument.
*/

const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');

const checkPants = checkAvailability('pants', 'Favorite Supply Co.');

const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

/* 3.
Invoke Promise.all() with an array containing checkSunglasses, checkPants, and checkBags.
*/

/* 4.
Chain a .then() to the promise returned from Promise.all(). You should pass in onFulfill to serve as the success handler.
*/

/* 5.
Add a .catch() to the chain. You should pass in onReject to serve as the failure handler.
*/
Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);

/* 6.
Type node app.js in the terminal and hit enter to execute your program.
*/
/* Output:
$ node app.js
Checking availability of sunglasses at Favorite Supply Co....
Checking availability of pants at Favorite Supply Co....
Checking availability of bags at Favorite Supply Co....
sunglasses are in stock at Favorite Supply Co.
Error: pants is unavailable from Favorite Supply Co. at this time.
*/

