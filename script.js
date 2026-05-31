let count = localStorage.getItem("naamCount")
    ? parseInt(localStorage.getItem("naamCount"))
    : 0;

let streak = localStorage.getItem("naamStreak")
    ? parseInt(localStorage.getItem("naamStreak"))
    : 0;

const countEl = document.getElementById("count");
const streakEl = document.getElementById("streak");
const goalText = document.getElementById("goalText");
const progress = document.getElementById("progress");
const achievement = document.getElementById("achievement");

updateUI();

document.getElementById("japBtn").addEventListener("click", () => {
    count++;
    streak++;

    localStorage.setItem("naamCount", count);
    localStorage.setItem("naamStreak", streak);

    countEl.classList.add("animate");

    setTimeout(() => {
        countEl.classList.remove("animate");
    }, 300);

    checkAchievements();
    updateUI();
});

document.getElementById("resetBtn").addEventListener("click", () => {
    if(confirm("Reset the counter?")) {
        count = 0;
        streak = 0;

        localStorage.setItem("naamCount", count);
        localStorage.setItem("naamStreak", streak);

        achievement.innerHTML = "";
        updateUI();
    }
});

function updateUI() {
    countEl.textContent = count;
    streakEl.textContent = streak;

    let goal = 108;
    let percent = Math.min((count / goal) * 100, 100);

    progress.style.width = percent + "%";
    goalText.textContent = `${count} / ${goal}`;
}

function checkAchievements() {
    if(count === 27){
        achievement.innerHTML = "🌟 Great Start! 27 Names Completed!";
    }

    if(count === 54){
        achievement.innerHTML = "✨ Half Mala Completed!";
    }

    if(count === 108){
        achievement.innerHTML = "🏆 Congratulations! One Full Mala Completed!";
    }

    if(count === 1008){
        achievement.innerHTML = "👑 Divine Milestone: 1008 Names Chanted!";
    }
}