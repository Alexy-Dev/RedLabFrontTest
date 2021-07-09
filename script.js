window.addEventListener('DOMContentLoaded', () => {

    const round = document.querySelector('.btn-prim-desc');
    const nav = document.querySelector('.nav'),
          navback = document.querySelector('.nav-back');

    function openAnimation() {                  //засовываем алгоритм открывания в функцию
    round.classList.add('ZoomOut');
    round.classList.add('rotate-ell');
    nav.classList.add('pose');
    navback.classList.add('hide'); 
}
    const move = document.querySelector('.plaseholder');
    function openAnimationFooter() {                  
    move.classList.add('MooveFooter');
    round.classList.add('ZoomOutFooter');      
}
    const moveRest = document.querySelector('.rectangle_130');
    function openAnimationRest() {                  
    moveRest.classList.add('MooveFooterRest');
    // setTimeout(() => {
    //     moveRest.classList.remove('hide');
    //     moveRest.classList.add('show');
    // }, 7000);      
} 
    const tagsShow = document.querySelector('.footer-scroll');
    function openAnimationTags() {
        tagsShow.classList.add('ZoomInTags');
          setTimeout(() => {      
        // tagsShow.classList.remove('hide');
        tagsShow.classList.add('show');
        }, 7000);        
    }
    function showAnimationByScroll() {
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight/2) { //для события по прокрутке экрана до середины
                    openAnimation();
                    // window.removeEventListener('scroll', showAnimationByScroll);
                }
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
                    openAnimationFooter();
                    openAnimationRest();
                    openAnimationTags();                
                }
            }
            window.addEventListener('scroll', showAnimationByScroll);
});