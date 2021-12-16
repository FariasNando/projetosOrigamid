const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;
    if (sections.length) {
      function animaScroll() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top - windowMetade;
          if (sectionTop <= 0) {
            section.classList.add('ativo');
          }
        })
    }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();


