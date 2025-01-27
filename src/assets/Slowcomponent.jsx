//Note:This component is slow to render

// Define a function named `waitingforsomething` that takes one parameter `ms` (milliseconds).
// This function creates a blocking delay by continuously running a loop for a specified time (`ms`).
const waitingforsomething = (ms) => {
    const start = Date.now();
    let now = start;
    while (now - start < ms ) {
        now = Date.now();

    }
    // Once the time difference between `now` and `start` is at least `ms`, the loop ends,
}

// React components are reusable pieces of UI that define what should be displayed on the screen.
export default function Slowcomponent() {
    // Call the `waitingforsomething` function and block the execution of this component
    // for 5000 milliseconds (5 seconds) before proceeding.
    waitingforsomething(1000);
    return null;
        
}