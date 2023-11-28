const rollBtnEl = document.getElementById("rollBtn");
const refreshBtnEl = document.getElementById("refreshBtn");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("rollHistory");


let historyList = []

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace
  historyList.push(rollResult)
  updateRollHistory()
}

function updateRollHistory(){
    rollHistoryEl.innerHTML =''
    for(let i =0; i < historyList.length; i++){
        const listItem = document.createElement('li')
        listItem.innerHTML =`Roll ${i +1}; <span>${getDiceFace(historyList[i])}</span>`
        rollHistoryEl.appendChild(listItem)
    }
}

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }

}

rollBtnEl.addEventListener("click", () => {
  diceEl.classList.add("rollAnimation");
  setTimeout(() => {
    diceEl.classList.remove("rollAnimation");
    rollDice();
  }, 1000);
});

refreshBtnEl.addEventListener('click', () => {
    location.reload()
})

