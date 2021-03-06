$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1200,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron_left.png" alt=""></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron_right.png"></button>',
            responsive: [
                {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows:false
                }
            }
            ]
          });

          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });


      

          function toggleSlide(item){
            $(item).each(function(i){
              $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
              }) 
            });
          };
          toggleSlide('.catalog-item__link');
          toggleSlide('.catalog-item__back');


          /* modal появление и скрытие окон*/

          $('[data-modal=consultation]').on('click', function() {
            $('.overlay,#consultation').fadeIn();
          });
          $('.modal__close').on('click', function(){
            $('.overlay, #consultation, #thanks, #order').fadeOut();
          });
         /* скрипт который берет текст из названия товара и подставляет в модальное окно и выводит его */
          $('.catalog-item__btn').each(function(i){
              $(this).on('click', function(){
                $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
                $('.overlay, #order').fadeIn();
              })
          })

          $('#consultation-form').validate();
          // кнопка повляется при прокрутке и исчезает
          $(window).scroll(function(){
            if($(this).scrollTop()>1600){
              $('.pageup').fadeIn();
            } else {
              $('.pageup').fadeOut();
            }
          });

          $(function(){
            $("a[href^='#']").click(function(){
                    const _href = $(this).attr("href");
                    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                    return false;
            });
    });
  });