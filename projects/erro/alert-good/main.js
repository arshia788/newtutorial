const btn= document.querySelector('.my-btn')
const alertBox= document.querySelector('.alert-box')
const closeBtn= document.querySelector('.close-btn')
let timer;

btn.addEventListener('click', function(){
    // omadi function ro biron az btn asli dorost kardi 
    // alan har mogeh click mikoni ro btn in function miad kar mikoneh 
    showAlertBox();
})

// in baray click dokmeh ma hast
closeBtn.addEventListener('click', function(){
    // omadi hideAlertBox ro dadi chon hamin miad box ro pak mikoneh 
    hideAlertBox()
    // in ro baray in gofti chon agar nabashe in timer miad khodesh ro hry pak mikoneh
    // agar nareh in miad edameh mideh va dobareh pak mikoneh khdoesh ro
    clearTimeout(timer)
})

function showAlertBox(){
    // hide ro omadi hala pak kardi chon to class mimoneh va pak nmishe
    // ba raftanesh behtar kar miknoen code mon             
    alertBox.classList.remove('hide')
    // in show vase dafeh hay badi hast ke on box biad dobareh   
    alertBox.classList.add('show')

    // class hidden agar bashe hazfeh mishe
    if(alertBox.classList.contains('hidden')){
        alertBox.classList.remove('hidden')
    }

    // alan in box omadeh va to dari behesh zamani midi
    // setTimeoit miad on function ro to ye zamani anjam mideh

    timer= setTimeout(function(){
        // function ro inja name kardi faghat
        hideAlertBox()

    },5000)
}

// in function vazifeh pak kardan on box ro dareh
function hideAlertBox(){
    // hala  ke mikhad in box hazeh beshe bayad show ro hazfeh bokonim ta box bereh
    // va gar na on box tay on zamani ke dadim nmireh  
    alertBox.classList.remove('show')

    // in class hide miad toey on zamani ke dadi in class ro ezafeh mikoneh
    alertBox.classList.add('hide')
}



