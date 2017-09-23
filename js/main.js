"use strict"

window.onload = function () {
    languageChanger();
    enterToYourAccount()
    mainSlider();
    newGodsSlider();
    setInterval(changeMainBanner, 10000); // исключить момент одновременного переключения 2 баннера
    searchFunction();
    manufacturers();
}

//================================language change======================================

function languageChanger(){
    var contein = document.body.getElementsByClassName("lang-container")[0];
    var languages = document.body.getElementsByClassName("language");
    var prew_lang = languages[0];
    contein.addEventListener('click', function(event){
        self = event.target;

        if(self.className == "language"){
            self.className += " active-language";
            prew_lang.className = "language";
            prew_lang = self;
        }
    })
}

/*
    ============================SEARCH=======================
    */

    function searchFunction(){
        var search_field = document.getElementsByClassName("search-field")[0];
 
     search_field.addEventListener('click', function(event){
         if(search_field.children[1].className != 'search-form'){
         search_field.innerHTML = '<form class="search-form"><input type="text" id="search-input" class="input-field"></form>';
         var search_input = document.getElementById("search-input");
         search_input.focus();

         search_input.addEventListener('blur', function(event){
            search_field.innerHTML = '<img src="./images/header_srch_ico.png" name="header-srch-ico"> <span class="serch-item">ПОИСК ПО САЙТУ</span>'
        })
         }
     })
     
    
 
     //search_field.children[1].children[0]('click', function(event){
     //    if(event.keycode == 13){
     //        alert("enterbleat");
     //    }
     //})
 
     
 
     }

/*
    ==================New-goods-slider===================
    */


function newGodsSlider(){
    var elem = document.body;
    var right_arrow = elem.getElementsByClassName('slider_arrow_right')[0];
    var left_arrow = elem.getElementsByClassName('slider_arrow_left')[0];
    var arrows = elem.getElementsByClassName('slider_arrows');
    var gods = elem.getElementsByClassName('new-goods-slider-item');
    var slider = elem.getElementsByClassName('new-goods-slider')[0];

    left_arrow.addEventListener('click', function(event){
        slider.children[3].outerHTML = "";
        addNewGoadsLeft("hiddenRI", "./images/slider_ico_3.jpg");
    })

    right_arrow.addEventListener('click', function(event){
        slider.children[0].outerHTML = "";
        addNewGoads("hiddenLE", "./images/slider_ico_4.jpg");
    })

    window.onload = resiezeFunc();
    window.onresize = resiezeFunc;
    

    function resiezeFunc(){
        var a = slider.clientHeight;
        a = (a/2)+12 + 'px';
        arrows[0].style.top= a;
        arrows[1].style.top= a;    
    }

    function addNewGoads(goods_name, goods_image){
        slider.innerHTML += '<div class="new-goods-slider-item"><a href="#item"><img src="' + goods_image + '" class="new-goods-slider-item-ico"></a><a href="#item"><div class="new-goods-slider-item-button">' + goods_name + '</div></a></div>'
    }

    function addNewGoadsLeft(goods_name, goods_image){
        slider.innerHTML = '<div class="new-goods-slider-item"><a href="#item"><img src="' + goods_image + '" class="new-goods-slider-item-ico"></a><a href="#item"><div class="new-goods-slider-item-button">' + goods_name + '</div></a></div>' + slider.innerHTML;
    }

}

/*
    ==================main-banner-slider===================
    */

function mainSlider(){
    var elem = document.body;
    var checkbox = elem.getElementsByClassName("checkbox");
    
    var slider_background = document.getElementById("banners-field");
    var prew_background = slider_background.children[0];
    

    checkbox[0].parentNode.addEventListener('click', function(event) {
        var self = event.target;
        var i = checkbox.length;
      //  ===================== Запускаем таймер тут
        if(self.className != 'checkbox'){}else{
            var number_of_checkbox = checkTargetNumber(self);
            
            var prew_check = checkbox[checkAktiveBanner()];
            self.className += " checkbox-active";
            prew_check.className = "checkbox";
            prew_check = self;

            slider_background.children[number_of_checkbox].className = "banner-field";
            prew_background.className += " hidden-banner";
            prew_background = slider_background.children[number_of_checkbox];
            //=======================при изменении подхватываем тут
        }
        var lololo = document.getElementsByClassName("main-banner")[0];
        //==============чекаем и перелистываем тут

        function checkTargetNumber(a){
        while(i--){
            if (checkbox[i] == a){
                var x = i;
                break
            }
        }
        return(x);
        }
    });

}


//============================ функциия для изменения баннера по таймеру====================
function changeMainBanner(){
    var active_banner_number = checkAktiveBanner();
    var checkbox = document.body.getElementsByClassName("checkbox");
    var prew_check = checkbox[active_banner_number];
    

    var slider_background = document.getElementById("banners-field");
    var prew_background = slider_background.children[active_banner_number];

    checkbox[nextBannerNumber(active_banner_number)].className += " checkbox-active";
    prew_check.className = "checkbox";
    prew_check = checkbox[nextBannerNumber(active_banner_number)];

    slider_background.children[nextBannerNumber(active_banner_number)].className = "banner-field";
    prew_background.className += " hidden-banner";
    prew_background = slider_background.children[nextBannerNumber(active_banner_number)];

function nextBannerNumber(current_banner_number){
        if(current_banner_number<2){
            return(current_banner_number +1)
        }else{
            return 0
        }
    }

}

function checkAktiveBanner(){
    var slider_background = document.getElementById("banners-field");

    for(var i = 0; i< slider_background.children.length; i++){
    if (slider_background.children[i].className != "banner-field"){}else{
        return i;
        break
    }}
}

/*
    ==================Manufacturers-slider=======================
    */

function manufacturers(){
    var elem = document.body;
    var right_arrow = elem.getElementsByClassName('manufacturers-slider-right-arrow')[0];
    var left_arrow = elem.getElementsByClassName('manufacturers-slider-left-arrow')[0];
    var arrows = elem.getElementsByClassName('slider_arrows');
    var gods = elem.getElementsByClassName('manufacturers-slider-item');
    var slider = elem.getElementsByClassName('manufacturers-slider-wrapper')[0];

    left_arrow.addEventListener('click', function(event){
        slider.children[4].outerHTML = "";
        addNewGoadsLeft("./images/companies-logo/company_logo_1.jpg");
    })

    right_arrow.addEventListener('click', function(event){
        slider.children[0].outerHTML = "";
        addNewManufacturersRight("./images/companies-logo/company_logo_5.jpg");
    })
    window.onresize = resiezeFuncManufact;
    window.onload = resiezeFuncManufact();

    function resiezeFuncManufact(){
        var a = elem.getElementsByClassName('manufacturers-slider-wrapper')[0].clientHeight;
        a += 30;
        a = (a/2)+19 + 'px';
        arrows[2].style.top= a;
        arrows[3].style.top= a;    
    }
    function addNewManufacturersRight(goods_image){
        slider.innerHTML += '<div class="manufacturers-slider-item"><img src="' + goods_image + '" class="manufacturers-slider-ico"></div>'
    }

    function addNewGoadsLeft(goods_image){
        slider.innerHTML = '<div class="manufacturers-slider-item"><img src="' + goods_image + '" class="manufacturers-slider-ico"></div>' + slider.innerHTML;
    }

}

//================================enter=================================

function enterToYourAccount(){
    var enter_field = document.getElementById("enter-to-account");

    enter_field.addEventListener('click', function(){
        

    })

}