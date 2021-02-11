 var textAnimation = bodymovin.loadAnimation({
    container: document.getElementById('logoText'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    assetsPath: './images/txtAnimation/images/',
    path: './images/txtAnimation/txtAnimation.json'
  })

  var dogAnimation = bodymovin.loadAnimation({
    container: document.getElementById('logoDog'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    assetsPath: './images/dogAnimation/images/',
    path: './images/dogAnimation/dogAnimation.json'
  })

  textAnimation.addEventListener('DOMLoaded', function (e) {
    setInterval(function () {
      textAnimation.play();
    }, 1500);
  })


  dogAnimation.addEventListener('DOMLoaded', function (e) {
    document.querySelector('.face').addEventListener("click", function () {
      dogAnimation.goToAndPlay(0);
    })
  })


  // MOBILE RENDERING
  var textAnimationMobile = bodymovin.loadAnimation({
    container: document.getElementById('logoTextMobile'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    assetsPath: './images/txtAnimation/images/',
    path: './images/mobileTxtAnimation/txtAnimationMobile.json'
  })

  var dogAnimationMobile = bodymovin.loadAnimation({
    container: document.getElementById('logoDogMobile'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    assetsPath: './images/dogAnimation/images/',
    path: './images/mobileDogAnimation/dogAnimationMobile.json'
  })

  textAnimationMobile.addEventListener('DOMLoaded', function (e) {
    setInterval(function () {
      textAnimationMobile.play();
    }, 1500);
  })

  dogAnimationMobile.addEventListener('DOMLoaded', function (e) {

    document.querySelector('#faceMobile').addEventListener("click", function () {
      dogAnimationMobile.goToAndPlay(0);
    })
  })
  
