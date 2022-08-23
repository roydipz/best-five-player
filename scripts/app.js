// add to list by selecting
const playerSelect = document.getElementsByClassName('select_btn');
const listedPlayer = document.getElementById('selected_player');
for(const selectButton of playerSelect){
    selectButton.addEventListener('click', function(event){
        const playerName = event.target.parentNode.childNodes[1].innerText;
        const li = document.createElement('li');
        li.innerText = playerName;
        li.classList.add('mb-3')
        // condition to add no more than five players
        if(listedPlayer.childElementCount > 4){
            return alert("Only five five players you can select")
        }
        listedPlayer.appendChild(li);
        // disable button on click
        event.target.disabled = true;
        const playerCount = document.getElementById('player_count');
        playerCount.innerText = listedPlayer.childElementCount;
    })
}



// calculating player Expenses

// function to get input value
function getValueById(inputId){
    const gotValue = document.getElementById(inputId);
    const gotValueString = gotValue.value;
    const gotValueNumber = parseFloat(gotValueString);
    gotValue.value = '';
    return gotValueNumber;
}
// calculating five player cost
document.getElementById('calc_player_cost').addEventListener('click', function(){
    const playerCost = getValueById('player_cost')
    const playerTotal = document.getElementById('player_total');
    if( isNaN(playerCost) ){
        return alert('Use only number please')
    }
    playerTotal.innerText = playerCost * listedPlayer.childElementCount;
})
// calculating total cost
document.getElementById('tatal_cost').addEventListener('click', function(){
    const managerCost = getValueById('manager');
    const coachCoast = getValueById('coach');
    if( isNaN(managerCost) || isNaN(coachCoast) ){
        return alert('Use only number please')
    }
    const playerTotal = parseFloat(document.getElementById('player_total').innerText);
    const newTotalCost = managerCost + coachCoast + playerTotal;
    const PrevTotalCost = document.getElementById('total_cost');
    PrevTotalCost.innerText = newTotalCost;
})


