/**
 * ============================
 * 타입 정의 (JSDoc 기반 스키마)
 * ============================
 */

/**
 * @typedef {'cafe' | 'fastfood' | 'pizza' | 'chikin' | 'bunsik' | 'korean' | 'salad' | 'chinise' | 'buffet' | 'english' | 'japanese' | 'other'} Category
 */

/**
 * @typedef {Object} Option
 * @property {string} name           - 옵션 이름
 * @property {number} extra          - 추가 금액 (음수면 할인)
 * @property {boolean} [default]     - 기본 선택 여부
 * @property {string} [description]  - 사이즈 등 설명
 * @property {boolean} [count]       - 개수 기반 옵션인지 여부 (샷추가 등)
 */

/**
 * @typedef {Object} OptionGroup
 * @property {string} group_name     - 옵션 그룹명 (사이즈, 온도 등)
 * @property {boolean} required      - 필수 선택 여부
 * @property {Option[]} options      - 옵션 리스트
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} id
 * @property {string} [category]     - 메뉴 내 소분류 (coffee, tea, burger 등)
 * @property {string} name
 * @property {string} [image]
 * @property {number} base_price
 * @property {string[]} tags
 * @property {OptionGroup[]} option_groups
 */

/**
 * @typedef {Object} Franchise
 * @property {string} id
 * @property {string} name
 * @property {Category} category
 * @property {string} last_updated   - YYYY-MM-DD
 * @property {string} [image]
 * @property {MenuItem[]} items
 */

/**
 * @typedef {Object} MenuData
 * @property {Franchise[]} franchises
 */

/**
 * ============================
 * 전역 상태
 * ============================
 */

/** @type {MenuData} */
const menuData = {
  franchises: []
};

let currentCategory = 'all';
let currentSearchQuery = '';
let currentBrandId = null; // ✅ 현재 선택된 브랜드 ID

/** @type {Record<string, string>} */
let selectedOptions = {}; // { group_name: option_name }
/** @type {Record<string, number>} */
let countOptions = {};    // { group_name: count }

/**
 * ============================
 * 유틸 / 공통 함수
 * ============================
 */

/**
 * 검색어 하이라이트
 * @param {string} text
 * @param {string} query
 * @returns {string}
 */
function highlightText(text, query) {
  if (!query) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // 특수문자 이스케이프
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}

/**
 * 검색 핸들러 (헤더 input에서 oninput으로 호출)
 * @param {string} query
 */
function handleSearch(query) {
  currentSearchQuery = query.trim().toLowerCase();
  renderApp(currentCategory, currentSearchQuery);
}

/**
 * 메뉴가 검색어와 매칭되는지 확인
 * @param {MenuItem} item
 * @param {string} brandName
 * @param {string} query
 * @returns {boolean}
 */
function isItemMatchSearch(item, brandName, query) {
  if (!query) return true;

  // 메뉴명
  if (item.name.toLowerCase().includes(query)) return true;

  // 태그
  if (item.tags && item.tags.some(tag => tag.toLowerCase().includes(query))) return true;

  // 브랜드명
  if (brandName.toLowerCase().includes(query)) return true;

  return false;
}

/**
 * ============================
 * 메인 UI 렌더링
 * ============================
 */

/**
 * 메인 앱 렌더링
 * @param {string} filter   - 'all' | 카테고리
 * @param {string} searchQuery
 */
function renderApp(filter = 'all', searchQuery = '') {
  const container = document.getElementById('app');
  const brandTabs = document.getElementById('brand-tabs');
  if (!container) return;

  currentCategory = filter;
  container.innerHTML = '';

  // 1) 카테고리 기준으로 브랜드 필터
  let filteredFranchises = menuData.franchises.filter(
    (brand) => filter === 'all' || brand.category === filter
  );

  const isSearchMode = !!searchQuery;

  /**
   *  검색 모드일 때: 여러 브랜드 + 여러 메뉴 섞여서 보여줌 (기존 방식)
   *  검색이 아닐 때: currentBrandId 에 해당하는 브랜드 하나만 보여줌
   */

  if (isSearchMode) {
    // ✅ 검색 모드: 브랜드 탭 숨김 & multi-brand 결과
    if (brandTabs) {
      brandTabs.classList.add('hidden');
      brandTabs.innerHTML = '';
    }

    filteredFranchises = filteredFranchises
      .map((brand) => {
        // 브랜드명이 검색어와 매칭되면 메뉴 전체 노출
        if (brand.name.toLowerCase().includes(searchQuery)) {
          return brand;
        }
        // 아니면 메뉴 단위로 필터링
        const matchedItems = brand.items.filter((item) =>
          isItemMatchSearch(item, brand.name, searchQuery)
        );
        if (matchedItems.length > 0) {
          return { ...brand, items: matchedItems };
        }
        return null;
      })
      .filter((brand) => brand !== null);
  } else {
    // ✅ 일반 모드: 브랜드 하나만 보여주기

    // 선택된 브랜드가 없거나, 현재 카테고리에 없는 브랜드면
    // 필터링된 브랜드 중 첫 번째로 자동 선택
    if (!currentBrandId || !filteredFranchises.some(b => b.id === currentBrandId)) {
      currentBrandId = filteredFranchises[0]?.id || null;
    }

    // 브랜드 탭 렌더링
    if (brandTabs) {
      if (filteredFranchises.length > 0) {
        brandTabs.classList.remove('hidden');
        brandTabs.innerHTML = filteredFranchises.map(brand => `
          <button
            onclick="selectBrand('${brand.id}')"
            class="brand-tab-btn px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all
                   ${brand.id === currentBrandId ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}">
            ${brand.name}
          </button>
        `).join('');
      } else {
        brandTabs.classList.add('hidden');
        brandTabs.innerHTML = '';
      }
    }

    // 실제로 화면에 보여줄 브랜드 하나만 선택
    if (currentBrandId) {
      filteredFranchises = filteredFranchises.filter(b => b.id === currentBrandId);
    } else {
      filteredFranchises = [];
    }
  }

  // 결과 없음
  if (filteredFranchises.length === 0) {
    container.innerHTML = `
      <div class="text-center py-20">
        <i class="fas fa-search text-gray-400 text-5xl mb-4"></i>
        <p class="text-gray-600">
          ${searchQuery ? '검색 결과가 없습니다.' : '해당 카테고리의 메뉴가 없습니다.'}
        </p>
        ${
          searchQuery
            ? '<p class="text-sm text-gray-400 mt-2">다른 검색어로 시도해보세요.</p>'
            : ''
        }
      </div>
    `;
    return;
  }

  // 브랜드 섹션 렌더링 (검색 모드든 단일 브랜드 모드든 공통)
  filteredFranchises.forEach((brand) => {
    const section = document.createElement('section');
    section.id = `section-${brand.id}`;
    section.className =
      'bg-white rounded-2xl shadow-sm p-5 mb-4 scroll-mt-[220px]';

    section.innerHTML = `
      <!-- 브랜드 헤더 -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold flex items-center gap-2">
          <span class="w-1 h-6 bg-red-600 rounded"></span> 
          ${highlightText(brand.name, searchQuery)}
        </h2>
        <span class="text-xs text-gray-400">
          <i class="far fa-clock"></i> ${brand.last_updated} 업데이트
        </span>
      </div>
      
      <!-- 메뉴 아이템 그리드 -->
      <div class="grid grid-cols-1 gap-3">
        ${
          brand.items
            .map(
              (item) => `
          <div onclick="openSheet('${brand.id}', '${item.id}')"
               class="border border-gray-200 p-4 rounded-xl hover:border-red-300 hover:shadow-md transition-all cursor-pointer active:scale-[0.98]">
            <div class="flex justify-between items-center">
              <!-- 메뉴 정보 -->
              <div class="flex-1">
                <div class="flex gap-1.5 mb-2 flex-wrap">
                  ${
                    (item.tags || [])
                      .map(
                        (tag) => `
                    <span class="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-bold">
                      #${highlightText(tag, searchQuery)}
                    </span>
                  `
                      )
                      .join('')
                  }
                </div>
                <h3 class="font-bold text-gray-900 mb-1">
                  ${highlightText(item.name, searchQuery)}
                </h3>
                <p class="text-xs text-gray-500">
                  <i class="fas fa-sliders-h"></i> 옵션 선택 가능
                </p>
              </div>
              
              <!-- 가격 및 화살표 -->
              <div class="text-right ml-4">
                <p class="font-black text-lg text-gray-900">
                  ${item.base_price.toLocaleString()}원~
                </p>
                <i class="fa-solid fa-chevron-right text-gray-300 text-sm mt-1"></i>
              </div>
            </div>
          </div>
        `
            )
            .join('')
        }
      </div>
    `;

    container.appendChild(section);
  });
}

/**
 * 브랜드 탭 클릭 시 호출
 * @param {string} brandId
 */
function selectBrand(brandId) {
  currentBrandId = brandId;
  renderApp(currentCategory, currentSearchQuery);
}

/**
 * ============================
 * 바텀시트 / 옵션 선택
 * ============================
 */

/**
 * 바텀시트 열기
 * @param {string} brandId
 * @param {string} itemId
 */
function openSheet(brandId, itemId) {
  const brand = menuData.franchises.find((b) => b.id === brandId);
  if (!brand) return;
  const item = brand.items.find((i) => i.id === itemId);
  if (!item) return;

  // 옵션 상태 초기화
  selectedOptions = {};
  countOptions = {};

  // 필수/기본값 설정
  item.option_groups.forEach((group) => {
    const nonCountOptions = group.options.filter((opt) => !opt.count);
    const defaultOption = nonCountOptions.find((opt) => opt.default);

    if (group.required) {
      if (defaultOption) {
        selectedOptions[group.group_name] = defaultOption.name;
      } else if (nonCountOptions.length > 0) {
        selectedOptions[group.group_name] = nonCountOptions[0].name;
      }
      // count 옵션만 있는 필수 그룹은 여기선 선택 X (사용자 입력 기준)
    } else {
      if (defaultOption) {
        selectedOptions[group.group_name] = defaultOption.name;
      }
    }
  });

  const content = document.getElementById('sheet-content');
  if (!content) return;

  content.innerHTML = `
    <!-- 메뉴 제목 -->
    <h3 class="text-2xl font-black mb-2 text-gray-900">${item.name}</h3>
    <div class="flex gap-2 mb-1">
      ${(item.tags || [])
        .map((t) => `<span class="text-xs text-gray-500">#${t}</span>`)
        .join('')}
    </div>
    <p class="text-sm text-gray-500 mb-6">
      <i class="fas fa-store"></i> ${brand.name}
    </p>
    
    <!-- 옵션 그룹들 -->
    <div class="space-y-6">
      ${item.option_groups
        .map(
          (group) => `
        <div>
          <div class="flex items-center justify-between mb-3">
            <p class="text-sm font-bold text-gray-700">
              ${group.group_name}
              ${group.required ? '<span class="text-red-500">*</span>' : ''}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-2">
            ${group.options
              .map((opt) => {
                const isCount = !!opt.count;
                const isSelected = selectedOptions[group.group_name] === opt.name;

                if (isCount) {
                  const spanId = `count-${group.group_name.replace(/\s/g, '-')}`;
                  return `
                    <div class="col-span-2 border-2 border-gray-200 p-3 rounded-xl count-option">
                      <div>
                        <p class="text-sm font-medium text-gray-900">${opt.name}</p>
                        <p class="text-xs text-gray-500 mt-1">
                          ${
                            opt.extra > 0
                              ? '+' + opt.extra.toLocaleString() + '원'
                              : opt.extra < 0
                              ? opt.extra.toLocaleString() + '원'
                              : '기본'
                          } / 개당
                        </p>
                      </div>
                      <div class="flex items-center gap-3">
                        <button onclick="decreaseCount('${group.group_name}', '${opt.name}', ${opt.extra}, '${brandId}', '${itemId}', event)" class="count-btn">
                          <i class="fas fa-minus text-xs"></i>
                        </button>
                        <span class="count-value" id="${spanId}">
                          ${countOptions[group.group_name] ?? 0}
                        </span>
                        <button onclick="increaseCount('${group.group_name}', '${opt.name}', ${opt.extra}, '${brandId}', '${itemId}', event)" class="count-btn">
                          <i class="fas fa-plus text-xs"></i>
                        </button>
                      </div>
                    </div>
                  `;
                }

                // 일반 옵션
                return `
                  <button 
                    onclick="selectOption('${group.group_name}', '${opt.name}', ${opt.extra}, '${brandId}', '${itemId}')"
                    class="option-btn ${
                      isSelected ? 'selected' : ''
                    } border-2 border-gray-200 p-3 rounded-xl text-left hover:border-red-300 transition-all"
                    data-group="${group.group_name}"
                    data-option="${opt.name}">
                    <p class="text-sm font-medium text-gray-900">${opt.name}</p>
                    <p class="text-xs text-gray-500 mt-1">
                      ${
                        opt.extra > 0
                          ? '+' + opt.extra.toLocaleString() + '원'
                          : opt.extra < 0
                          ? opt.extra.toLocaleString() + '원'
                          : '기본'
                      }
                    </p>
                  </button>
                `;
              })
              .join('')}
          </div>
        </div>
      `
        )
        .join('')}
    </div>
    
    <!-- 하단 가격 및 구매 버튼 -->
    <div class="mt-8 pt-6 border-t sticky bottom-0 bg-white">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-xs text-gray-500 mb-1">최종 예상 금액</p>
          <p id="final-price" class="text-3xl font-black text-red-600">
            ${calculateTotalPrice(item, selectedOptions, countOptions).toLocaleString()}원
          </p>
        </div>
        <button class="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-colors active:scale-95">
          <i class="fas fa-shopping-cart mr-2"></i>구매하기
        </button>
      </div>
    </div>
  `;

  const overlay = document.getElementById('overlay');
  const sheet = document.getElementById('bottom-sheet');

  if (sheet) {
    // ✅ 항상 맨 위부터 보이도록
    sheet.scrollTop = 0;
    sheet.classList.add('active');
  }
  overlay && overlay.classList.remove('hidden');
}

/**
 * 총 가격 계산
 * @param {MenuItem} item
 * @param {Record<string, string>} selectedOpts
 * @param {Record<string, number>} countOpts
 * @returns {number}
 */
function calculateTotalPrice(item, selectedOpts, countOpts) {
  let totalPrice = item.base_price;

  item.option_groups.forEach((group) => {
    const selectedOptionName = selectedOpts[group.group_name];
    const selectedOption = group.options.find(
      (opt) => opt.name === selectedOptionName
    );

    if (selectedOption) {
      if (selectedOption.count) {
        const rawCount = countOpts[group.group_name];
        const count = typeof rawCount === 'number' ? rawCount : 0;
        totalPrice += selectedOption.extra * count;
      } else {
        totalPrice += selectedOption.extra;
      }
    }
  });

  return totalPrice;
}

/**
 * 카운트 +1
 */
function increaseCount(groupName, optionName, extraPrice, brandId, itemId, e) {
  e.stopPropagation();

  const current = countOptions[groupName] ?? 0;
  const next = current + 1;
  countOptions[groupName] = next;

  if (!selectedOptions[groupName]) {
    selectedOptions[groupName] = optionName;
  }

  const spanId = `count-${groupName.replace(/\s/g, '-')}`;
  const countElement = document.getElementById(spanId);
  if (countElement) {
    countElement.textContent = String(next);
  }

  updatePrice(brandId, itemId);
}

/**
 * 카운트 -1
 */
function decreaseCount(groupName, optionName, extraPrice, brandId, itemId, e) {
  e.stopPropagation();

  const current = countOptions[groupName] ?? 0;
  if (current <= 0) return;

  const next = current - 1;
  countOptions[groupName] = next;

  const spanId = `count-${groupName.replace(/\s/g, '-')}`;
  const countElement = document.getElementById(spanId);
  if (countElement) {
    countElement.textContent = String(next);
  }

  if (next === 0) {
    delete selectedOptions[groupName];
  }

  updatePrice(brandId, itemId);
}

/**
 * 옵션 선택
 */
function selectOption(groupName, optionName, extraPrice, brandId, itemId) {
  selectedOptions[groupName] = optionName;

  const allButtons = document.querySelectorAll(
    `[data-group="${groupName}"]`
  );
  allButtons.forEach((btn) => btn.classList.remove('selected'));

  const selectedButton = document.querySelector(
    `[data-group="${groupName}"][data-option="${optionName}"]`
  );
  if (selectedButton) {
    selectedButton.classList.add('selected');
  }

  updatePrice(brandId, itemId);
}

/**
 * 가격 업데이트
 */
function updatePrice(brandId, itemId) {
  const brand = menuData.franchises.find((b) => b.id === brandId);
  if (!brand) return;
  const item = brand.items.find((i) => i.id === itemId);
  if (!item) return;

  const totalPrice = calculateTotalPrice(item, selectedOptions, countOptions);

  const priceElement = document.getElementById('final-price');
  if (!priceElement) return;

  priceElement.classList.add('price-animate');
  priceElement.textContent = `${totalPrice.toLocaleString()}원`;

  setTimeout(() => {
    priceElement.classList.remove('price-animate');
  }, 300);
}

/**
 * 바텀시트 닫기
 */
function closeSheet() {
  const overlay = document.getElementById('overlay');
  const sheet = document.getElementById('bottom-sheet');
  overlay && overlay.classList.add('hidden');
  sheet && sheet.classList.remove('active');
  selectedOptions = {};
  countOptions = {};
}

/**
 * 카테고리 필터링
 */
function filterByCategory(category, e) {
  currentCategory = category;
  currentSearchQuery = currentSearchQuery; // 그대로 유지
  // 카테고리 바뀔 때 브랜드 선택은 renderApp 안에서 자동 정리됨
  renderApp(category, currentSearchQuery);

  const buttons = document.querySelectorAll('.category-btn');
  buttons.forEach((btn) => {
    btn.classList.remove('active', 'bg-black', 'text-white');
    btn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-700');
  });

  e.target.classList.add('active');
  e.target.classList.remove(
    'bg-white',
    'border',
    'border-gray-300',
    'text-gray-700'
  );
  e.target.classList.add('bg-black', 'text-white');
}

/**
 * ============================
 * 데이터 로딩 (brand JSON 합치기)
 * ============================
 */

/**
 * brand JSON들을 불러와서 menuData.franchises에 합치기
 * @returns {Promise<void>}
 */
async function loadMenuData() {
  // 실제로 만드는 JSON 파일 이름들
  const BRAND_IDS = [
    'starbucks'
    // 'gongcha', 'ediya', ... 이런 식으로 계속 추가
  ];

  const promises = BRAND_IDS.map((id) =>
    fetch(`data/brand/${id}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load ${id}.json: ${res.status}`);
        }
        return res.json();
      })
      .then(
        /** @param {Franchise} data */
        (data) => data
      )
      .catch((err) => {
        console.warn('브랜드 데이터 로딩 실패:', id, err.message);
        return null;
      })
  );

  const results = await Promise.all(promises);
  /** @type {Franchise[]} */
  const brands = results.filter((b) => b !== null);

  menuData.franchises = brands;

  renderApp(currentCategory, currentSearchQuery);
}

/**
 * ============================
 * 초기화
 * ============================
 */

document.addEventListener('DOMContentLoaded', () => {
  loadMenuData().catch((err) => {
    console.error('메뉴 데이터 로딩 중 오류:', err);
    renderApp(currentCategory, currentSearchQuery);
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSheet();
  }
});

/**
 * ============================
 * 전역으로 노출 (HTML inline onclick 용)
 * ============================
 */
window.handleSearch     = handleSearch;
window.filterByCategory = filterByCategory;
window.openSheet        = openSheet;
window.closeSheet       = closeSheet;
window.increaseCount    = increaseCount;
window.decreaseCount    = decreaseCount;
window.selectOption     = selectOption;
window.selectBrand      = selectBrand;
