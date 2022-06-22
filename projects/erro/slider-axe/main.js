// in miad divi ke 3ta axe daronesh hast ro gerefti 
const imgBox= document.querySelector('.imgBox')

// inja rafti on div ro gerefti bad gofti boro on tag div ro boro img ro begir hala
// slides ye array mideh chon bayad 3 ta axe bereh daronesh 

const slides= imgBox.getElementsByTagName('img')
console.log(slides)

// har bar click mikoni in be i ezafeh mishe ta betoneh har bar click kardan to ro begireh
let i = 0

function nextSlide(){

    // har bar nextSlide click mishe in miad class aval ro hazfeh mikoneh va be badi mideh 
    // in i baray in hast ke harabr click mikoni in miad hazfeh mikonhe ghabli ro 
    // az bar hay badi click mikoni chon i dg shodeh add hay bala tar miad i ro hesab mikoneh
    // chon to click hay badi  bayad az i estefadeh bokoni ta on ro byad pak bokoneh (class ro)

    slides[i].classList.remove('active')

    // 1 hamoon axe dovom hast chon index 1 dareh 
    // har bar click mikoni yek add ezafeh mishe ama ashkal dareh chon kolan 3ta index ma darim 
    // slides.length tool farzandan hast 
    // (i + 1) %  slides.length yani 1 az 3 bar aval bar dovom mishe 2 az 3 va bar akhar ham mishe 3 az 0
    // ejazdeh nmideh az 3 bereh bala  

    i =  (i + 1) %  slides.length
    
    slides[i].classList.add('active')
}


function prevSlide(){
    slides[i].classList.remove('active')

    // manfi zadi ta loop ma maxokse beshe 
    // miad bar asas slides.length add hay khodehesh ro kam mikoneh va gar na manfi mireh 

    i =  (i - 1 + slides.length) %  slides.length
    slides[i].classList.add('active')
}











