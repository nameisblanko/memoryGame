let state = 0;
function switcharoo(){
    //do some shit about flippin' tha good ol' cards
    switch (state) {
        case 0:
            backside_up();
            state = 1;
            break;
        case 1:
            frontside_up();
            state = 0;
        default:
            break;
    }
    console.log(state);
}
function frontside_up(){
    let cardbacks = Array.from(document.getElementsByClassName("card-back"));
    cardbacks.forEach(card => {card.classList.remove("backside-up"); card.classList.add("frontside-up");});
    Array.from(document.getElementsByClassName("card-front")).forEach(card => card.classList.add("up-close"));
}
function backside_up(){
    let cardbacks = Array.from(document.getElementsByClassName("card-back"));
    cardbacks.forEach(card => {card.classList.remove("frontside-up"); card.classList.add("backside-up");});
    Array.from(document.getElementsByClassName("card-front")).forEach(card => card.classList.remove("up-close"));
}

function switcharoo_with_id(id){ //id needs to be the div's id
    //do some shit about flippin' tha good ol' cards
    switch (state) {
        case 0:
            backside_up_with_id(id);
            state = 1;
            break;
        case 1:
            frontside_up_with_id(id);
            state = 0;
        default:
            break;
    }
    console.log(state);
}
function frontside_up_with_id(id){
    let cards = Array.from(document.getElementById(id).firstChild.lastChild.childNodes);
    console.log(cards);
    cards.forEach(card => {
        console.log(Array.from(card.classList).includes('card-back'));
        if(Array.from(card.classList).includes('card-back'))
        {card.classList.remove('backside-up'); card.classList.add('frontside-up');}
        else{card.classList.add('up-close');}
    });
}
function backside_up_with_id(id){
    let cards = Array.from(document.getElementById(id).firstChild.lastChild.childNodes);
    cards.forEach(card => {
        if(Array.from(card.classList).includes('card-back'))
        {card.classList.add('backside-up'); card.classList.remove('frontside-up');}
        else{card.classList.remove('up-close');}
    });
}