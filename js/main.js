$(function () {
  $('#fullpage').fullpage({
    //options here
    anchors: ['intro', 'skills', 'work', 'about', 'contact'],
    navigation: true,
    // scrollBar: true,
    navigationTooltips: [
      'INTRO',
      'SKILLS',
      'WORK',
      'ABOUT',
      'CONTACT',
      '감사합니다.',
    ],
    // autoScrolling: true,
    // scrollHorizontally: true,
    navigationPosition: 'right',
    sectionsColor: [
      '#24252a',
      '#24252a',
      '#24252a',
      '#24252a',
      '#24252a',
      '#24252a',
    ],
    onLeave: function (origin, destination, direction) {
      if (origin.index == 1) {
        $('.home .inner .txt_wrap').hide();
      }
    },
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 1) {
        $('.home .inner .txt_wrap').show();
      }
    },
    // afterLoad: function (anchorLink, index) {
    // console.log('현재 섹션 번호는' + index);
    // if (index == 5) {
    //   alert('감사합니다.');
    // }
    // },
    // afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    //   console.log('현재 슬라이드 번호는' + slideIndex);
    // },
  });
  var content = '안녕하십니까 배움에 대한 열정을 가진 조남웅 입니다.';
  var text = document.querySelector('.intro .inner .txt_wrap em');
  var i = 0;

  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt;
      i++;
    }
  }
  setInterval(typing, 100);

  // 차트
  var chart = $('.chart');

  chart.each(function () {
    var item = $(this);
    var title = item.find('h2');
    var targetNum = title.attr('data-num');
    var circle = item.find('circle');

    $({ rate: 0 }).animate(
      { rate: targetNum },
      {
        duration: 1500,
        progress: function () {
          var now = this.rate;
          var amount = 630 - (630 * now) / 100;
          console.log(now);
          title.text(Math.floor(now));
          circle.css({ strokeDashoffset: amount });
        },
      }
    );
  });
});
