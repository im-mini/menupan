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
