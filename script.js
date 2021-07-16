window.addEventListener('DOMContentLoaded', () => {

    const round = document.querySelector('.btn-prim-desc');
    const nav = document.querySelector('.nav'),
          navback = document.querySelector('.nav-back');

    function openAnimation() {                  
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
    
    setTimeout(() => {      
        
        moveRest.classList.add('show');
        }, 2000);       
    } 
    const tagsShow = document.querySelector('.footer-scroll');
    function openAnimationTags() {
        tagsShow.classList.add('ZoomInTags');
          setTimeout(() => {      
        
        tagsShow.classList.add('show');
        }, 5000);        
    }
    const tagsShow2 = document.querySelector('.footer-scroll-2');
    function openAnimationTags2() {
        tagsShow2.classList.add('ZoomInTags');
          setTimeout(() => {      
        // tagsShow.classList.remove('hide');
        tagsShow2.classList.add('show');
        }, 3000);        
    }
    const feature02 = document.querySelector('.feature02'),
          feature03 = document.querySelector('.feature03'),
          feature04 = document.querySelector('.feature04');
    function openFeature() {
        feature02.classList.add('MoveFeatures02Up');
        feature03.classList.add('MoveFeatures03Up');
        feature04.classList.add('MoveFeatures04Up');
    }
    const tabs01 = document.querySelector('.tabs-kit'),
          tabs02 = document.querySelector('.tabs-rooms'),
          tabs03 = document.querySelector('.tabs-bath'),
          tabs04 = document.querySelector('.tabs-hall');
    function openTabs() {
        tabs02.classList.add('MooveTabs02');
        setTimeout(() => {
            tabs02.classList.add('show');
            }, 1000);        
        tabs03.classList.add('MooveTabs03');
        setTimeout(() => {
            tabs03.classList.add('show');
            }, 2000);  
        tabs04.classList.add('MooveTabs04');
        setTimeout(() => {
            tabs04.classList.add('show');
            }, 2200);  
    }
    function showAnimationByScroll() {
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight/2) { //для события по прокрутке экрана до середины
                    openAnimation();
                    openFeature();
                }
                if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) { //для события по прокрутке экрана до конца
                    openAnimationFooter();
                    openAnimationRest();
                    openTabs();
                    openAnimationTags();                
                }
            }
            window.addEventListener('scroll', showAnimationByScroll);
    //Tabs

    const  tabsItem = document.querySelectorAll('.tab'),
          tabsParent = document.querySelector('.tabs');
    
    const slider = document.querySelector('.container-img'),
          slidesParent = document.querySelector('.rectangle-img'),
          img = document.querySelectorAll('.img');
    
    function hideTab() {              
        tabsItem.forEach(item => {            
            item.classList.remove('tabs_active');
            item.classList.remove('hide');          
        });
        slidesParent.classList.remove('MooveImg01');
    }

    function showTab(i = 0) {
        tabsItem[i].classList.add('tabs_active');
        console.log(tabsItem[i]);
    }

    hideTab();
    showTab();      
 
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        
        img.forEach((item, i) => {
            if (i = 0, i <10, i++) {
                i++;
                item[i];                
            }
        });
        

        if (target && target.classList.contains('tab')) {
            tabsItem.forEach((item, i) => {
                if (target == item) {
                    hideTab();
                    showTab(i);
                    slider.classList.add('show');
                    console.log(img[i]);
                    img[i].classList.add('MooveImg03');
                }
                if (target && target.classList.contains('tabs-bath')) {
                    img[2].classList.add('MooveImg01');
                    openAnimationTags2();
                }              
            });
        }
    });
});