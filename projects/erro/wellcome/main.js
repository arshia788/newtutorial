
const intro =document.querySelector('.intro')
const textLogo = document.querySelectorAll('.logo')


window.addEventListener('load',function(){

    // in baray logo ma hast(matan ha moon) 
    // omadi ye timmer koli gozashti
    // in setTimeout zaman nadareh va sarieh anjam mishe

    setTimeout(()=>{
        // in timmer miad ro har logo kar mikoneh 
        // inx yani omadeh index 1 ro gerefteh
        textLogo.forEach((logo,inx)=>{

	 // baray in ye setTimeout zadi to logo ha betoni har 2 ro control koni
	// alan omadi be logo ha ye timmer dadi

            setTimeout(()=>{
                logo.classList.add('active')
		
		 // index 0 to 400mls anjam mishe ama
                // index 1 omadeh 400mls dir tar anjam shodeh

            },(inx+1)*400)
        })
    })


    // in miad 2s dir tar az setTimeout ghabli anjam mishe

    this.setTimeout(()=>{

	// in dareh miad dobareh har 2 item ro gerefteh 
        textLogo.forEach((logo, inx)=>{
            this.setTimeout(()=>{

		// alan in miad on active ro hazfeh mikoneh 

                logo.classList.remove('active')

                 // alan logo ke shodeh har kodom az in matan ha mireh bala 
                // chon class dadi behesh

                logo.classList.add('fade')
		
	     // inja in *50 hamoon takhir ma hast vase on yeki item  

            },(inx+1)*50)
        })
    },2000)


    // in miad intro ma ro mibareh bala yani on safhe siah ma ro
    this.setTimeout(()=>{
        // 2s tool mikeshe ta bereh balay safhe 
        intro.style.top= '-100vh'
    },2300)
})

























