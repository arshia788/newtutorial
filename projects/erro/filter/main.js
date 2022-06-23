// li
let indicator= document.querySelector('.indicator').children
console.log(indicator)

const main= document.querySelector('.items').children
console.log(main)



for(let i=0; i<indicator.length; i++){
    indicator[i].onclick= function(){
        // hameh active ha pak shodan ta faghat 1 done ka rbokoneh
        for(let x=0; x<indicator.length;x++){
            indicator[x].classList.remove('active')
        }

        // class active ro dadi be har kodom
        this.classList.add('active')

        // zamani ke ro harkodom az li ha click mishe miad 
        // getAttribute mikoenh va mindazeh to yek motaghire 
        const displayItem= this.getAttribute('data-filter')

        // omadi hame item ha ro gerefti va har mogeh click bokoni alan 
        // hame item ha pak mishan 

        for(let z=0;z<main.length;z++){
            // aval omadi display hameh ro none kardi ta ba shart maloem beshe
            main[z].style.transform='scale(0)';

            // in ro gozashti ta tag hay badi beran va poor nakonan faza ro
            setTimeout(()=>{
                main[z].style.display= 'none'
            },500)

            // data-category hamoon li hay ma hastan to item ha 
            // be har kodom vase peda kardan item ha data-category dadim
            // displayItem ro baray hamin gerefteh bodi ta betoni inja moghyeseh bokoni
            // displayItem == 'all' in displayItem ma ke hamoon data li ma hast ke gofti ke agar all ham bod bia in kar ro hame bokon

            if(main[z].getAttribute('data-category') === displayItem || displayItem== 'all' ){
                // block ro gofti ta har chi nabashe maloem nashe
                // main[z].style.display= 'block'

                main[z].style.transform='scale(1)';

                // alan faghat on haei ke dorost hastan ro miareh
                setTimeout(()=>{
                    main[z].style.display= 'block'
                },500)

            }
        }

    }
}





