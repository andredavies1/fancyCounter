
// Define the variable or all the selector/ Usually better to group the selector
const counterEl = document.querySelector('.counter');
const increaseButtonEl = document.querySelector('.counter__button--increase');
const decreaseButtonEl = document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterValueEl = document.querySelector('.counter__value');
const counterTitleEl = document.querySelector('.counter__title');



increaseButtonEl.addEventListener('click', incrementCounter);
decreaseButtonEl.addEventListener ('click', decrementCounter);
document.addEventListener('keydown', incrementCounter);



function incrementCounter() {

const currentValue = counterValueEl.textContent; // getting the current in the html and setting to a variable

// convert value to number type
const currentValueAsNumber = +currentValue;

// increment by 1
let newValue = currentValueAsNumber + 1;

if (newValue > 5) {

    newValue = 5;
// give visual indicator
counterEl.classList.add('counter--limit');

// update counter title to say limit has been reahed
counterTitleEl.innerHTML = 'Limit! Buy <b>Pro</b> for > 5';

//disable increase and decrease button
increaseButtonEl.disabled = true;
decreaseButtonEl.disabled= true;

}

// set counter element with new value
counterValueEl.textContent = newValue;

increaseButtonEl.blur();

}

function decrementCounter(){

    const currentValue = counterValueEl.textContent; // getting the current in the html and setting to a variable

    // convert value to number type
    const currentValueAsNumber = +currentValue;
    
    // decrement by 1
    let newValue = currentValueAsNumber - 1;

    // check if new value is less than 0
    if (newValue < 0) {
        newValue = 0;
    }
    
    // set counter element with new value
    counterValueEl.textContent = newValue;   

    decreaseButtonEl.blur();

}


resetButtonEl.addEventListener('click', function()
{
    //set counter value to 0
    counterValueEl.textContent = 0;

    //reset background color

    counterEl.classList.remove ('counter--limit');
    counterTitleEl.textContent = 'Fancy counter';
    increaseButtonEl.disabled = false;
    decreaseButtonEl.disabled= false;  
    resetButtonEl.blur();
}

)

