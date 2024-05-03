function end_loader() {
  $('.loader').fadeOut(800);
}
$(window).on('load', function () {
  setTimeout(function () {
    end_loader();
  }, 1300)
});

const loading = document.querySelector( '.loading' );

window.addEventListener( 'load', () => {
  loading.classList.add( 'hide' );
}, false );









/* ===========================================================================  */
/*                             ハンバーガーメニュ-                                 */
/* =========================================================================== */

$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});

// $(".openbtn").click(function () {
//     $(this).toggleClass('active');
// });
//     //ハンバーガーメニュー
//     $('#js-hamburger-menu, .navigation__link').on('click', function () {
//       $('.navigation').slideToggle(500)
//       $('.hamburger-menu').toggleClass('hamburger-menu--open')
//     });
    
    
// $(function () {
//   $('.slider').slick({
//     // autoplay:false,
//     // infinite: false,//スライドをループさせるかどうか。初期値はtrue。
//     speed: 1000,//スライドのスピード。初期値は300。
//     slidesToShow: 2,//スライドを画面に3枚見せる
//     slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
//     prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
//     nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
//     centerMode: true,//要素を中央ぞろえにする
//     variableWidth: false,//幅の違う画像の高さを揃えて表示
//     dots: true,//下部ドットナビゲーションの表示
//   });
// });
        
        
        
        /* ===========================================================================  */
          /*                              スライドボックス                                */
          /* ==========================================================================*/
          
      /* ===========================================================================  */
          /*                              動画                                         */
          /* ==========================================================================*/
          
          // Get the video
          var video = document.getElementById("myVideo");
          
          // Get the button
          var btn = document.getElementById("myBtn");
          
          // Pause and play the video, and change the button text
          function myFunction() {
            if (video.paused) {
              video.play();
              btn.innerHTML = "Pause";
            } else {
              video.pause();
              btn.innerHTML = "Play";
            };
          }
          


