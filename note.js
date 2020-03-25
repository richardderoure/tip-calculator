
let billValue;
let serviceRating;
let billTotal;
// promting the user for inputting bill value

// checking that the user input is numerical
function getBillValue() {
    billValue = document.getElementById("billValue");
    //parseInt(prompt('How much was your bill?'));
    // while (isNaN(billValue) === true) {
    // billValue = parseInt(prompt('Please enter a number. How much was your bill?'));
    // };
    getRating();
}

function getRating() {
    serviceRating = document.getElementsByName("answer");
    // prompt('Please rate your service out of 10');
    // while (isNaN(serviceRating) == true || serviceRating < 0 || serviceRating > 10) {
    // serviceRating = parseInt(prompt('Please enter a number. Please rate your service between 0 and 10 inclusive'));
    // };
    getTotalBill(billValue, serviceRating);

}


// prompting the user for inputting the service rating

// checking that the user input is numerical AND in the required range of 0-10

// calculating the total bill with the tip inlcuded at different tip levels (based on the service rating)

function getTotalBill(billValue, serviceRating) {
    if (serviceRating < 3) {
        billTotal = billValue;
    } else if (serviceRating < 6) {
        billTotal = billValue * 1.1;
    } else if (serviceRating < 8) {
        billTotal = billValue * 1.15;
    } else if (serviceRating <= 10) {
        billTotal = billValue * 1.2;
    };
}
// telling the user the total value of the bill with tip included
getBillValue();
alert('The total value of your bill including the recommended tip is: ' + billTotal);
console.log(billValue);
<p>How would you rate your service from 1 to 10(10 being excellent)?</p>
        <input type="radio" id="one" name="answer" value="1">
        <label for="one">1</label>
        <br>
        <input type="radio" id="two" name="answer" value="2">
        <label for="two">2</label>
        <br>
        <input type="radio" id="three" name="answer" value="3">
        <label for="three">3</label>
        <br>
        <input type="radio" id="four" name="answer" value="4">
        <label for="four">4</label>
        <br>
        <input type="radio" id="five" name="answer" value="5">
        <label for="five">5</label>
        <br>
        <input type="radio" id="six" name="answer" value="6">
        <label for="six">6</label>
        <br>
        <input type="radio" id="seven" name="answer" value="7">
        <label for="seven">7</label>
        <br>
        <input type="radio" id="eight" name="answer" value="8">
        <label for="eight">8</label>
        <br>
        <input type="radio" id="nine" name="answer" value="9">
        <label for="nine">9</label>
        <br>
        <input type="radio" id="ten" name="answer" value="10">
        <label for="ten">10</label>
        <br></br>