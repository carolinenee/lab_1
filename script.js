const btn = document.getElementById("my-button");
btn.addEventListener("click", () => {
alert("Recently Moozda has been quite naughty so we have not given him many treats");
});
//poll stuff 
let pollResults = { treat: 0, noTreat: 0 };

function submitPoll() {
    let selectedOption = document.querySelector('input[name="treatPoll"]:checked');
    if (selectedOption) {
        let choice = selectedOption.value;
        pollResults[choice]++;

        // Update the results display
        document.getElementById("treatCount").textContent = pollResults.treat;
        document.getElementById("noTreatCount").textContent = pollResults.noTreat;
    } else {
        alert("Please select an option before voting!");
    }
}

// Add event listener to the submit button
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitVote").addEventListener("click", submitPoll);
});