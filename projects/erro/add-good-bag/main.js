// sabad
const notification= document.querySelector('h1')

// div select ma
const select= document.querySelector('.select')

// button ma
const button= document.querySelectorAll('button')

for(let but of button){
    // in e baray tak tak on item hayi hast ke click kardi biad begireh
    // va bendazeh to select

    but.addEventListener('click', (e)=>{
        // number dadi chon add ha bayad number bashan na string
        // data-count hamoon before sabad ma hast ke gharar hast bahash ertebat bar gharar beshe
        // har bar click mikoni in miad 1 add ezafeh mikoneh
        
        const add = Number(notification.getAttribute('data-count') || 0)

        // rafti in data-count ha ro gerefti va add+1 kardi ta yeki behsh ezafhe beshe
        notification.setAttribute('data-count', add+1)
        notification.classList.add('zero')

        // alan ro har kodom click mikoni in miad kole on div ro migireh va mindazeh to parent
        let parent= e.target.parentNode;

        // cloneNode miad ye copy az on div migireh va mindazeh on jaei ke to mikhy
        // goti az in parenti ke click shodeh bia to on ro copy bokon
	// in true ro hatman bayad begi ta copy ro dorost anjam bedeh

        let clone = parent.cloneNode(true)
        
        // copy ha ro andakhti to select 
        select.appendChild(clone)

        // rafti element akar ro gerefti va innerText ro avaz kardi
        clone.lastElementChild.innerText='purchase'

        if(clone){
            // in  notification hamoon sabad hast ke gofti har mogeh click shod reosh bia in function ro anjam bedhe
            notification.onclick= ()=>{
                // class toggle dadi ke har bar click shod rosh on class ro ezafhe bokoneh 
                select.classList.toggle('display')
            }
        }
    })
}




