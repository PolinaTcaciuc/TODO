function theme(toggleValue) {
  if (toggleValue === 'notcheck') {
    SetDarkTheme();
  } else {
    SetWhiteTheme();
  }
}
/* ------------------- dark theme ------------------- */

function SetDarkTheme() {
  localStorage.setItem('theme', 'dark');
  document.querySelector('html').removeAttribute('class');
  document.querySelector('html').classList.add('dark');
  const body = document.querySelector('.body');
  if (document.querySelector('.sun')) {
    document.querySelector('.sun').remove();
    const cloudsWhite = document.querySelectorAll('.cloud');
    for (let i = 0; i < cloudsWhite.length; i++) {
      cloudsWhite[i].remove();
    }
  }
  const twinkling = document.createElement('div');
  const clouds = document.createElement('div');
  twinkling.classList.add('twinkling');
  clouds.classList.add('clouds');
  body.append(twinkling);
  body.append(clouds);
}
/* ------------------- white theme ------------------- */

function SetWhiteTheme() {
  localStorage.setItem('theme', 'white');
  const deviceScreen = window.screen.width;
  const header = document.querySelector('.header');

  document.querySelector('html').removeAttribute('class');
  document.querySelector('html').classList.add('white');
  if (document.querySelector('.twinkling')) {
    document.querySelector('.twinkling').remove();
    document.querySelector('.clouds').remove();
  }
  if (!document.querySelector('.sun') && deviceScreen > '1000') {
    const sunContainer = document.createElement('div');
    const sun = document.createElement('div');
    sunContainer.classList.add('sun');
    sun.classList.add('ball');
    sunContainer.prepend(sun);
    header.append(sunContainer);
    sunContainer.style.animationPlayState = 'running';
  }
  if (!document.querySelector('.cloud') && deviceScreen > '500') {
    for (let i = 0; i < 4; ++i) {
      const cloud = document.createElement('div');
      cloud.classList.add('cloud');
      header.prepend(cloud);
    }
  }
  if (!document.querySelector('.cloud') && deviceScreen < '500') {
    for (let i = 0; i < 2; ++i) {
      const cloud = document.createElement('div');
      cloud.classList.add('cloud');
      header.prepend(cloud);
    }
  }
}

export default theme;
