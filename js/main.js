$(function () {
  $('#fullpage').fullpage({
    //options here
    scrollingspeed: 1000,
    anchors: ['intro', 'work', 'about', 'contact'],
    sectionsColor: [
      '#24252a',
      '#24252a',
      '#24252a',
      '#24252a',
      '#8384D6',
    ],
    navigation: true,
    scrollOverflow: true,
    // autoScrolling: false,
    // bigSectionsDestination: top,
    navigationTooltips: [
      'INTRO',
      'WORK',
      'ABOUT',
      'CONTACT',
      '감사합니다.',
    ],
    // scrollHorizontally: true,
    navigationPosition: 'right',

    // onLeave: function (origin, destination, direction) {
    //   if (origin.index == 1) {
    //     $('.skills .inner .skills_box').hide();
    //   }
    // },
    // afterLoad: function (origin, destination, direction) {
    //   if (destination.index == 1) {
    //     $('.skills .inner .skills_box').show();
    //   }
    // },
    // 768이하로 끄기
    // responsiveWidth: 768,

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

  // 스크롤 애니메이션
  // $(window).resize(function () {});
  // $('.skills .inner').hide();
  // $(function () {
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 600) {
  //       $('.skills .inner').fadeIn();
  //     } else {
  //       $('.skills .inner').fadeOut();
  //     }
  //   });
  // });

  // 타이핑
  const content = '배움에 대한 열정을 가진 조남웅 입니다.';
  const text = document.querySelector('.intro .inner .txt_wrap em');
  let i = 0;

  function typing() {
    if (i < content.length) {
      let txt = content.charAt(i);
      text.innerHTML += txt;
      i++;
    }
  }
  setInterval(typing, 100);

  // 차트
  // let chart = $('.chart');

  // chart.each(function () {
  //   let item = $(this);
  //   let title = item.find('h2');
  //   let targetNum = title.attr('data-num');
  //   let circle = item.find('circle');

  //   $({ rate: 0 }).animate(
  //     { rate: targetNum },
  //     {
  //       duration: 1500,
  //       progress: function () {
  //         let now = this.rate;
  //         let amount = 439 - (439 * now) / 100;
  //         // console.log(now);
  //         title.text(Math.floor(now));
  //         circle.css({ strokeDashoffset: amount });
  //       },
  //     }
  //   );
  // });

  // 스크롤 애니메이션 (수정필요)
  // window.addEventListener('scroll', function () {
  //   let value = window.scrollY;
  //   console.log('scrollY', value);
  // });

  // WORK 탭메뉴
  $('.work .tab_list a').on('click', function (e) {
    // li클릭시 안쪽 a부터 이벤트가 발생하여 상위요소로 이벤트가 전파(버블링)되며 a의 기본이벤트가 발생하면 페이지 위로 올라감, 기본이벤트를 막으려면 e(이벤트객체) 매개변수를 이용
    e.preventDefault();

    // 이벤트리스너 안에서 $(this)는 이벤트발생대상을 의미
    $(this).addClass('active').siblings().removeClass('active');

    // A그룹중 클릭한 li의 순서값
    const idx = $(this).index();

    // B그룹과 연결(탭내용이 슬라이더일경우)
    // $('.work .menu_slider_wrap').eq(idx).addClass('active').siblings().removeClass('active');

    // B그룹과 연결(탭내용이 슬라이더가 아닐경우)
    $('.work .work_list li').eq(idx).show().siblings().hide();
  });
});
