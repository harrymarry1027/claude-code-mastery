// DOM 요소
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const contactForm = document.getElementById('contactForm');

// 다크모드 초기화 (다크모드 기본, 명시적으로 false일 때만 라이트모드)
function initDarkMode() {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'false') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
}

// 다크모드 토글
darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);
});

// 네비게이션 스크롤 시 배경 변경
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// 모바일 햄버거 메뉴 토글
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.add('hidden');
  });
});

// 스크롤 애니메이션 (IntersectionObserver)
const fadeElements = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// 테크 티커: 마우스 호버 시 일시정지
const ticker = document.querySelector('.animate-marquee');
if (ticker) {
  const tickerContainer = ticker.parentElement;
  tickerContainer.addEventListener('mouseenter', () => {
    ticker.style.animationPlayState = 'paused';
  });
  tickerContainer.addEventListener('mouseleave', () => {
    ticker.style.animationPlayState = 'running';
  });
}

// 문의 폼 제출 처리 (데모용)
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get('name');

  // 폼 내용을 성공 메시지로 교체
  contactForm.innerHTML = `
    <div class="form-success text-center py-8">
      <svg class="w-16 h-16 mx-auto text-green-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <p class="text-lg font-semibold">${name}님, 메시지가 전송되었습니다!</p>
      <p class="text-gray-500 dark:text-slate-400 mt-2">빠른 시일 내에 답변 드리겠습니다.</p>
    </div>
  `;
});

// 초기화 실행
initDarkMode();
