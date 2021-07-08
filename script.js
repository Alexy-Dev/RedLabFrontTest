window.addEventListener('DOMContentLoaded', () => {

    const round = document.querySelector('.btn-prim-desc');

    function openAnimation() {                  //засовываем алгоритм открывания в функцию
    round.classList.add('ZoomOut');
    round.classList.add('rotate-ell');  
}
    const move = document.querySelector('.plaseholder');
    function openAnimationFooter() {                  
    move.classList.add('MooveFooter');      
}
    const moveRest = document.querySelector('.rectangle_130');
    function openAnimationRest() {                  
    moveRest.classList.add('MooveFooterRest');
    moveRest.classList.remove('hide');
    moveRest.classList.add('show');      
} 
    function showAnimationByScroll() {
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight/2) { //для события по прокрутке экрана до середины
                    openAnimation();
                    // window.removeEventListener('scroll', showAnimationByScroll);
                }
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
                    openAnimationFooter();
                    // window.removeEventListener('scroll', showAnimationByScroll);
                }
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
                    openAnimationRest();
                    // window.removeEventListener('scroll', showAnimationByScroll);
                }
            }
            window.addEventListener('scroll', showAnimationByScroll);
});