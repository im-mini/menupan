// js/app.js

let menuData = { franchises: [] };
let currentCategory = 'all';
let currentSearchQuery = '';
let selectedOptions = {};
let countOptions = {};

// 1) 불러올 브랜드 파일 목록
const BRAND_FILES = [
  'starbucks',
  'twosome',
  'mega_coffee',
  'gongcha',
  'ediya',
  'paikdabang',
  'mammoth_coffee',
  'the_venti',
  'mcdonalds',
  'burger_king',
  'lotteria',
  'nobrand_burger',
  'subway',
  'domino_pizza',
  'pizza_school',
  'pizza_maru',
  'kyochon',
  'bbq',
  'bhc',
  'yubdduck',
  'shinjeong',
  'bonjuck',
  'poke_allday',
  'hongkong_banjum',
  'vips',
  'mibundang',
  'shabu-allday'
];

// 2) 모든 브랜드 JSON 로드
async function loadMenuData() {
  const promises = BRAND_FILES.map(id =>
    fetch(`data/brand/${id}.json`).then(res => {
      if (!res.ok) {
        console.warn('Failed to load brand json:', id);
      }
      return res.json();
    })
  );

  const brands = await Promise.all(promises);

  // 3) menuData 구성
  menuData.franchises = brands.filter(Boolean);

  // 4) 초기 렌더링
  renderApp(currentCategory, currentSearchQuery);
}

// 5) DOM 로드 후 데이터 로딩 시작
document.addEventListener('DOMContentLoaded', () => {
  loadMenuData();

  // 나머지 이벤트 바인딩(ESC로 바텀시트 닫기 등)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSheet();
    }
  });
});
