"use strict"

window.onload = function () {
    mainSlider();
    newGodsSlider();
}

function newGodsSlider(){
    var elem = document.body;
    var right_arrow = elem.getElementsByClassName('slider_arrow_right')[0];
    var left_arrow = elem.getElementsByClassName('slider_arrow_left')[0];
    var arrows = elem.getElementsByClassName('slider_arrows');
    var gods = elem.getElementsByClassName('new-goods-slider-item');
    var slider = elem.getElementsByClassName('new-goods-slider')[0];



    left_arrow.addEventListener('click', function(event){
        slider.innerHTML = '';
        addNewGoads("hidden", "./images/slider_ico_4.jpg");
    })
     right_arrow.addEventListener('click', function(event){
        addNewGoads("hidden", "./images/slider_ico_4.jpg");
    })

    window.onresize = resiezeFunc;
    window.onload = resiezeFunc();
    function resiezeFunc(){
        var a = slider.clientHeight;
        a = (a/2)+12 + 'px';
        arrows[0].style.top= a;
        arrows[1].style.top= a;
        
    }

    function addNewGoads(goods_name, goods_image){
        slider.innerHTML += '<div class="new-goods-slider-item"><a href="#item"><img src="' + goods_image + '" class="new-goods-slider-item-ico"></a><a href="#item"><div class="new-goods-slider-item-button">' + goods_name + '</div></a></div>'
    }

}



function mainSlider(){
    var elem = document.body;
    var checkbox = elem.getElementsByClassName("checkbox");
    var prew_check = checkbox[0];
    var slider_background = document.getElementsByClassName("banner-field")[0];

    checkbox[0].parentNode.addEventListener('click', function(event) {
        var self = event.target;
        var i = checkbox.length;

        if(self.className != 'checkbox'){}else{

            self.className += " checkbox-active";
            var number_of_checkbox = checkTargetNumber(self);

            prew_check.className = "checkbox";
            prew_check = self;
            slider_background.style.backgroundImage = 'url(../images/main_banner_' + number_of_checkbox + '.jpg)';
        }
        function checkTargetNumber(a){
        
        while(i--){
            if (checkbox[i] == a){
                var x = i;
                break
            }
        }
        return(x+1);
        }
    });

}



