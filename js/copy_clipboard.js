// 클립보드 복사
window.onload = function () {
  function copyToClipboardAndDisplayMessage(copyTarget, message) {
    const tempInput = document.createElement('input');
    tempInput.value = copyTarget.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // 복사
    document.body.removeChild(tempInput);
  
    if (window.innerWidth > 768) {
      message.style.display = 'block';
      message.style.opacity = 1;
      setTimeout(function () {
        message.style.opacity = 0;
      }, 1000);
      setTimeout(function () {
        message.style.display = 'none';
      }, 1300);
    }
  }

  function addCopyEventListener(link, copyTarget, message) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      copyToClipboardAndDisplayMessage(copyTarget, message);
    });
  }
  
  // 첫 번째 링크
  const copyLink1 = document.getElementById('copyLink1');
  const copyTarget1 = document.getElementById('copyTarget1');
  const message = document.getElementById('message');
  addCopyEventListener(copyLink1, copyTarget1, message);

  // 두 번째 링크
  const copyLink2 = document.getElementById('copyLink2');
  const copyTarget2 = document.getElementById('copyTarget2');
  addCopyEventListener(copyLink2, copyTarget2, message);

  // 세 번째 링크
  const copyLink3 = document.getElementById('copyLink3');
  const copyTarget3 = document.getElementById('copyTarget3');
  addCopyEventListener(copyLink3, copyTarget3, message);

  // 네 번째 링크
  const copyLink4 = document.getElementById('copyLink4');
  const copyTarget4 = document.getElementById('copyTarget4');
  addCopyEventListener(copyLink4, copyTarget4, message);
};
// window.onload = function () {
//   function copyToClipboardAndDisplayMessage(copyTarget, message) {
//     const tempInput = document.createElement('input');
//     tempInput.value = copyTarget.textContent;
//     document.body.appendChild(tempInput);
//     tempInput.select();
//     document.execCommand('copy'); // 복사
//     document.body.removeChild(tempInput);

//     if (window.innerWidth > 768) {
//       message.style.cssText = 'display: block; opacity: 1;';
//       setTimeout(function () {
//         message.style.opacity = 0;
//       }, 1000);
//       setTimeout(function () {
//         message.style.display = 'none';
//       }, 1300);
//     }
//   }

//   function addCopyEventListener(link, copyTarget, message) {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       copyToClipboardAndDisplayMessage(copyTarget, message);
//     });
//   }

//   for (let i = 1; i <= 4; i++) {
//     const copyLink = document.getElementById(`copyLink${i}`);
//     const copyTarget = document.getElementById(`copyTarget${i}`);
//     const message = document.getElementById(`message${i}`);
//     addCopyEventListener(copyLink, copyTarget, message);
//   }
// };