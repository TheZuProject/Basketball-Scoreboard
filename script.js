
let homeScore = document.getElementById("home-score")
homeScore.innerText = 0

let guestScore = document.getElementById("guest-score")
guestScore.innerText = 0


// Home Scoring Functionality

function homeAddOnePoint() {
    homeScore.innerText = parseInt(homeScore.innerText) + 1;
    highlightLeadingTeam();
}
function homeAddTwoPoints() {
    homeScore.innerText = parseInt(homeScore.innerText) + 2;
    highlightLeadingTeam();
}
function homeAddThreePoints() {
    homeScore.innerText = parseInt(homeScore.innerText) + 3;
    highlightLeadingTeam();
}

document.getElementById("home-add-one-point").addEventListener("click", homeAddOnePoint);
document.getElementById("home-add-two-points").addEventListener("click", homeAddTwoPoints);
document.getElementById("home-add-three-points").addEventListener("click", homeAddThreePoints);


// Quest Scoring Functionality

function guestAddOnePoint() {
    guestScore.innerText = parseInt(guestScore.innerText) + 1;
    highlightLeadingTeam();
}
function guestAddTwoPoints() {
    guestScore.innerText = parseInt(guestScore.innerText) + 2;
    highlightLeadingTeam();
}
function guestAddThreePoints() {
    guestScore.innerText = parseInt(guestScore.innerText) + 3;
    highlightLeadingTeam();
}

document.getElementById("guest-add-one-point").addEventListener("click", guestAddOnePoint);
document.getElementById("guest-add-two-points").addEventListener("click", guestAddTwoPoints);
document.getElementById("guest-add-three-points").addEventListener("click", guestAddThreePoints);


// Highlight Scoring Functionality

function highlightLeadingTeam() {
    const homeScore = parseInt(document.getElementById("home-score").innerText);
    const guestScore = parseInt(document.getElementById("guest-score").innerText);
  
    // Remove highlight from both teams
    document.getElementById("home-score").classList.remove("highlight");
    document.getElementById("guest-score").classList.remove("highlight");
  
    // Apply highlight to the leading team
    if (homeScore > guestScore) {
      document.getElementById("home-score").classList.add("highlight");
    } else if (guestScore > homeScore) {
      document.getElementById("guest-score").classList.add("highlight");
    }
  }
  

// Fouls Functionality

function addFoul(team) {
    const foulsElement = document.getElementById(team + '-fouls');
    let currentFouls = parseInt(foulsElement.innerText, 10);
    foulsElement.innerText = currentFouls + 1;
  }
  
  document.getElementById("home-foul-button").addEventListener("click", function() {
    addFoul("home");
  });
  
  document.getElementById("guest-foul-button").addEventListener("click", function() {
    addFoul("guest");
  });


// Function to reset fouls for a team
function resetFouls(team) {
    document.getElementById(team + '-fouls').innerText = '0';
  }
  
  // Add event listeners for the reset fouls buttons
  document.getElementById("home-reset-fouls").addEventListener("click", function() {
    resetFouls("home");
  });
  
  document.getElementById("guest-reset-fouls").addEventListener("click", function() {
    resetFouls("guest");
  });



// Period Highlighting functionality
let activePeriod = 'Q1'; 

function highlightPeriod(period) {
    // Remove active class from all period buttons
    document.querySelectorAll('.period-button').forEach(function(button) {
        button.classList.remove('active');
    });
    // Add active class to the current period button
    document.getElementById(period).classList.add('active');
    activePeriod = period;
}

// Event listeners for period buttons
document.querySelectorAll('.period-button').forEach(function(button) {
    button.addEventListener('click', function() {
        highlightPeriod(button.id);
    });
});


// Timer Functionality

let timerDuration = 12 * 60; // 12 minutes in seconds
let timerInterval;

function updateTimerDisplay() {
  let minutes = Math.floor(timerDuration / 60);
  let seconds = timerDuration % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById("game-timer").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timerInterval); // Clear any existing intervals
  timerInterval = setInterval(function() {
    if (timerDuration > 0) {
      timerDuration -= 1;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval); // Stop the timer when it reaches 0
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDuration = 12 * 60; // Reset to 12 minutes
  updateTimerDisplay();
}

// Event listeners for the timer buttons
document.getElementById("start-timer").addEventListener("click", startTimer);
document.getElementById("pause-timer").addEventListener("click", pauseTimer);
document.getElementById("reset-timer").addEventListener("click", resetTimer);

// Initialize the timer display on page load
updateTimerDisplay();


// New Game Functionality (Game Reset)
function startNewGame() {

    // Reset scores
    document.getElementById("home-score").innerText = '0';
    document.getElementById("guest-score").innerText = '0';

    highlightLeadingTeam();

    // Reset fouls
    document.getElementById("home-fouls").innerText = '0';
    document.getElementById("guest-fouls").innerText = '0';

    // Reset period to Q1 and remove highlights from other quarters
    document.querySelectorAll('.period-button').forEach(function(button) {
        button.classList.remove('active');
    });
   
    // Reset timer to 12:00
    timerDuration = 12 * 60;
    clearInterval(timerInterval); // Stop the timer if it's running
    updateTimerDisplay(); // Update the timer display immediately

}

document.getElementById("new-game-btn").addEventListener("click", startNewGame);