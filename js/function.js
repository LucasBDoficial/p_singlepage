$(function(){

//      SLIDER DEPOIMENTOS      //

    $('.depoimentos_regua').slick({
        centerMode: true,
        centerPadding: '250px',
        slidesToShow: 1,
        dots: true,
        arrows: false,
            responsive:[{
                breakpoint: 770,
                settings: {centerPadding: '150px',}
            },
                {breakpoint: 640,
                settings: {centerPadding: '90px',}
            },
                {breakpoint: 420,
                settings: {centerPadding: '0px',}
            }
        ]
    });

//      CLICAR E IR NA PAGINA       //

    $('[goto=sobrenos]').click(function(){
        $('html,body').animate({'scrollTop':$('#sobrenos').offset().top});
        return false;
    })

    $('[goto=depoimentos]').click(function(){
        $('html,body').animate({'scrollTop':$('#depoimentos').offset().top});
        return false;
    })

    $('[goto=trabalhos]').click(function(){
        $('html,body').animate({'scrollTop':$('#trabalhos').offset().top});
        return false;
    })

    $('[goto=contato]').click(function(){
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        return false;
    })

//      MENU RESPONSIVO MOBI       //

    $('.menu_mobi').click(function(){
        $('.guia_mobi').slideToggle();
    })  

    $('[goto=inicio]').click(function(){
        $('.guia_mobi').slideToggle();
    })

    $('[goto=sobrenos1]').click(function(){
        $('html,body').animate({'scrollTop':$('#sobrenos1').offset().top});
        return false;
    })
});