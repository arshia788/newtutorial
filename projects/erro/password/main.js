// in hamoon input ma hast
const passWord= document.getElementById('password')
// console.log(passWord)

// in baray icon hay ma hast
const toggle= document.querySelector('.toggle')





// har mogeh ro toggle click beshe miad in ro anjam mideh 

function showHide(){
       // inja gofti agar in password typesh hatman password bashe bia in kar ro bokon 	
       // rafti type ro moshtaghim gerefti 

       if(passWord.type === "password"){

              // setAttribute gofti ke boro attribute input ma ke ro begir va typesh ro text bokon ke neshon bebdeh
              passWord.setAttribute('type', 'text')

              // in class ezafeh mishe be div icon hay ma 
              toggle.classList.add('hide');
       }

       // inja migeh agar passWord.type chiz deg bashe bia bokon password
       else{
              passWord.setAttribute('type', 'password')

              // class ro remove kardi zamani ke type password shodeh 
	      // icon ha avaz mishan chon class hide ke avaz mikard icon ha ro remove shodeh     
              toggle.classList.remove('hide');
       }
}





