$(function () {
  $('#fullpage').fullpage({
    //options here
    scrollingspeed: 1000,
    anchors: ['intro', 'skills', 'work', 'about', 'contact'],
    sectionsColor: [
      '#24252a',
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
      'SKILLS',
      'WORK',
      'ABOUT',
      'CONTACT',
      '감사합니다.',
    ],
    // scrollHorizontally: true,
    navigationPosition: 'right',

    onLeave: function (origin, destination, direction) {
      if (origin.index == 1) {
        $('.skills .inner .skills_box').hide();
      }
    },
    afterLoad: function (origin, destination, direction) {
      if (destination.index == 1) {
        $('.skills .inner .skills_box').show();
      }
    },
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
          var amount = 439 - (439 * now) / 100;
          // console.log(now);
          title.text(Math.floor(now));
          circle.css({ strokeDashoffset: amount });
        },
      }
    );
  });

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
    var idx = $(this).index();

    // B그룹과 연결(탭내용이 슬라이더일경우)
    // $('.work .menu_slider_wrap').eq(idx).addClass('active').siblings().removeClass('active');

    // B그룹과 연결(탭내용이 슬라이더가 아닐경우)
    $('.work .work_list li').eq(idx).show().siblings().hide();
  });

  // 클립보드 복사
  function copyToClipboard(val) {
    var t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  $('.phone').click(function () {
    copyToClipboard('010-8822-9636');
  });
  $('.kakao').click(function () {
    copyToClipboard('milktree123');
  });

  //about, contact copy
  $(function () {
    // 토스트 띄우기
    let removeToast;

    function toast(string) {
      const toast = document.getElementById('toast');

      toast.classList.contains('reveal')
        ? (clearTimeout(removeToast),
          (removeToast = setTimeout(function () {
            document.getElementById('toast').classList.remove('reveal');
          }, 1000)))
        : (removeToast = setTimeout(function () {
            document.getElementById('toast').classList.remove('reveal');
          }, 1000));
      toast.classList.add('reveal'),
        (toast.innerText = '클립보드에 복사 되었습니다.');
    }

    //pc - phone number copy

    var filter = 'win16|win32|win64|mac';

    $('.phone').click(function (e) {
      if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
          // 모바일
          var tel = $('#phone').val();
          location.href = 'tel:' + tel;
        } else {
          // pc
          $('#phone').select();

          try {
            var successful = document.execCommand('copy');
            toast();
          } catch (err) {
            alert('이 브라우저는 지원하지 않습니다.');
          }
        }
      }
    });

    https: $('.kakao').click(function (e) {
      $('#kakao').select();
      var successful = document.execCommand('copy');
      toast();
    });
  });

  // 클립보드 복사 2
  function copyToClipboard(val) {
    var t = document.createElement('textarea');
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }
  $('.phone2').click(function () {
    copyToClipboard('010-8822-9636');
  });
  $('.kakao2').click(function () {
    copyToClipboard('milktree123');
  });

  //about, contact copy
  $(function () {
    // 토스트 띄우기
    let removeToast;

    function toast(string) {
      const toast = document.getElementById('toast2');

      toast.classList.contains('reveal')
        ? (clearTimeout(removeToast),
          (removeToast = setTimeout(function () {
            document.getElementById('toast2').classList.remove('reveal');
          }, 1000)))
        : (removeToast = setTimeout(function () {
            document.getElementById('toast2').classList.remove('reveal');
          }, 1000));
      toast.classList.add('reveal'),
        (toast.innerText = '클립보드에 복사 되었습니다.');
    }

    //pc - phone number copy

    var filter = 'win16|win32|win64|mac';

    $('.phone2').click(function (e) {
      if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
          // 모바일
          var tel = $('#phone2').val();
          location.href = 'tel:' + tel;
        } else {
          // pc
          $('#phone2').select();

          try {
            var successful = document.execCommand('copy');
            toast();
          } catch (err) {
            alert('이 브라우저는 지원하지 않습니다.');
          }
        }
      }
    });

    https: $('.kakao2').click(function (e) {
      $('#kakao2').select();
      var successful = document.execCommand('copy');
      toast();
    });
  });
});
