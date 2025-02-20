import {
    slotMachine
} from "./slotMachine.js";

function init() {
    const slotsButton = document.getElementById('button').addEventListener('click', (e) => {
        let i = 0;
        if(i == 0) {
            pullLever();
            console.log("Button clicked");
        }
        i++;
    });
    const slots = document.getElementById('result');
    console.log(slotsButton);
    console.log(slots);
    console.log(document);
    // DONE: log the document using console.log to test if you can get access to it
    // DONE: log the submit button. If that works, store that button in a variable
    // DONE: attach an event listener to that button and show a log "button clicked"
    // DONE: if the submit button is clicked, the lever is pulled (= call that function)
}

function pullLever() {
    slotMachine.spin();
    slotMachine.reset();
    showSlots();
    showGameResult();
    // TODO: reset the machine (you may skip this step for now, and focus on getting the machine to work first)
    // TODO: spin the slot machine
    // TODO: show slots and win status
}

function showSlots() {
    let slots = '';
    for (let index = 0; index < slotMachine.slots.length; index++) {
        slots += '<span class=""' + slotMachine.slots[index] + '">' + slotMachine.slots[index] +'</span>'
    }

    document.querySelector('#result').innerHTML = slots;
    // TODO: show the slot symbols in HTML
}

function showGameResult() {
    // TODO: show a win or lose message in HTML
}

init();