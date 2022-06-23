const text= ['طراحی وب', 'طراح ul' , 'برنامه نویس وب', ];
console.log(text)

// in baray in hast ke bereh array badi
let count = 0;

// in baray in hast ke bereh kalameh badi
let index = 0;

// in baray kole on kalameh
let currentText = '';

// in ba
let letter = '';


// in ye self invok function hast ke be sorat automatice hey tekrar mishe 
(function type(){

    // yani inja agar count khast beshe bishtar az 2 in miad mikoneh 0
    if(count === text.length){
        count=0
    }

    // alan text shodeh count yani hammon tarahi web ke avali hast 
    // har bar ke count ye index ro migireh in miad mindazeh on index ro to currentText
    currentText = text[count];

    // slice omadeh alan on index ma ro ke tarahi web hast ro gerefteh va on ro tikeh tikeh kardeh
    // inja in 0 pas طراحی وب hast va index++ yani bereh kalameh badi
    // pas avali ط hast bad ر hast va be tartib mireh hamin jori
    // 0 mishe index 0 yani avali 

    letter = currentText.slice(0, ++index);

    // in type hamoon span ma hast va textContent hamoon matan daronesh hast
    // letter ma hamoon currentText.slice(0, ++index) hast ke omadeh kalme be kalameh ro gerefteh 
    document.querySelector('.type').textContent = letter;


    // yani agar on kalameh kalameh ma ke tak tak omad barbar bod currentText.length
    // to bia count ro ezafeh bokon
    // ** currentText.length har kalamehi bashe daronesh in lenegth miad har kalameh ro hesab mikonhe va kole ok kalameh ro migeh chan ta hast

    if(letter.length === currentText.length){
        
        // har mogeh shart bargahrar bashe in miad mireh index badi
        count++;

	// zamani ke on kalameh ma tamom mishe in index ma dobare 0 mishe 
        // va miad on kalameh ro tak tak miareh 
        // har bar on kalameh be payan mireseh in miad 0 mikoneh va dobareh shoro mikoneh
        // ta tamom beshe va bereh badi

        index =0;
    }

    // alan gofti in function ma to 200s anjam beshe
    // in ro bayad dakhel function begi na biroon

    setTimeout(type,200);

})()









