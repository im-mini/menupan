{
          "franchises": [
            {
              "id": "gongcha",
              "name": "공차",
              "category": "cafe",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "gc_01",
                  "name": "블랙 밀크티",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 4700,
                  "tags": ["베스트", "밀크티", "카페인"],
                  "option_groups": [
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "Large", "extra": 0, "default": true },
                        { "name": "Jumbo", "extra": 1200 }
                      ]
                    },
                    {
                      "group_name": "토핑",
                      "required": false,
                      "options": [
                        { "name": "없음", "extra": 0, "default": true },
                        { "name": "펄 추가", "extra": 500 },
                        { "name": "밀크폼 추가", "extra": 500 }
                      ]
                    },
                    {
                      "group_name": "당도",
                      "required": true,
                      "options": [
                        { "name": "50%(기본)", "extra": 0, "default": true },
                        { "name": "스테비아 변경", "extra": 500 }
                      ]
                    }
                  ]
                },
                {
                  "id": "gc_02",
                  "name": "타로 밀크티",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 5200,
                  "tags": ["인기", "밀크티", "카페인"],
                  "option_groups": [
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "Large", "extra": 0, "default": true },
                        { "name": "Jumbo", "extra": 1200 }
                      ]
                    },
                    {
                      "group_name": "토핑",
                      "required": false,
                      "options": [
                        { "name": "없음", "extra": 0, "default": true },
                        { "name": "펄 추가", "extra": 500 },
                        { "name": "코코넛 젤리", "extra": 500 }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "mcdonalds",
              "name": "맥도날드",
              "category": "fastfood",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "mc_01",
                  "name": "빅맥",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 5500,
                  "tags": ["베스트", "소고기", "맥런치"],
                  "option_groups": [
                    {
                      "group_name": "세트 선택",
                      "required": true,
                      "options": [
                        { "name": "단품", "extra": 0, "default": true },
                        { "name": "세트", "extra": 1700 }
                      ]
                    },
                    {
                      "group_name": "런치 할인",
                      "required": true,
                      "options": [
                        { "name": "미적용", "extra": 0, "default": true },
                        { "name": "적용", "extra": -1700 }
                      ]
                    }
                  ]
                },
                {
                  "id": "mc_02",
                  "name": "맥스파이시 상하이버거",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 5800,
                  "tags": ["신제품", "치킨", "매운맛"],
                  "option_groups": [
                    {
                      "group_name": "세트 선택",
                      "required": true,
                      "options": [
                        { "name": "단품", "extra": 0, "default": true },
                        { "name": "세트", "extra": 1700 }
                      ]
                    }
                  ]
                },
                {
                  "id": "mc_03",
                  "name": "맥너겟",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 4500,
                  "tags": ["사이드", "치킨"],
                  "option_groups": [
                    {
                      "group_name": "수량",
                      "required": true,
                      "options": [
                        { "name": "6조각", "extra": 0, "default": true },
                        { "name": "10조각", "extra": 2000 }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "starbucks",
              "name": "스타벅스",
              "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
              "category": "cafe",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "sb_01",
                  "name": "아메리카노",
                  "base_price": 4500,
                  "tags": ["베스트", "커피", "카페인"],
                  "option_groups": [
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "톨(355ml)", "extra": 0, "default": true },
                        { "name": "그란데(473ml)", "extra": 500 },
                        { "name": "벤티(591ml)", "extra": 1000 }
                      ]
                    },
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "HOT", "extra": 0, "default": true },
                        { "name": "ICE", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "샷 추가",
                      "required": false,
                      "options": [
                        { "name": "없음", "extra": 0, "default": true },
                        { "name": "1샷 추가", "extra": 600 },
                        { "name": "2샷 추가", "extra": 1200 }
                      ]
                    }
                  ]
                },
                {
                  "id": "sb_02",
                  "name": "카페 라떼",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 5000,
                  "tags": ["베스트", "커피", "우유"],
                  "option_groups": [
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "톨(355ml)", "extra": 0, "default": true },
                        { "name": "그란데(473ml)", "extra": 500 },
                        { "name": "벤티(591ml)", "extra": 1000 }
                      ]
                    },
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "HOT", "extra": 0, "default": true },
                        { "name": "ICE", "extra": 0 }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "shabu-allday",
              "name": "샤브올데이",
              "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
              "category": "korean",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "sa_01",
                  "name": "무한리필 이용권",
                  "base_price": 18900,
                  "tags": ["무한리필", "인기", "가족모임"],
                  "option_groups": [
                    {
                      "group_name": "시간대",
                      "required": true,
                      "options": [
                        { "name": "평일 점심", "extra": 0, "default": true },
                        { "name": "평일 저녁", "extra": 5000 },
                        { "name": "주말/공휴일", "extra": 5000 }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "subway",
              "name": "서브웨이",
              "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
              "category": "fastfood",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "sw_01",
                  "name": "이탈리안 비엠티",
                  "base_price": 6700,
                  "tags": ["베스트", "샌드위치", "든든한"],
                  "option_groups": [
                    {
                      "group_name": "빵 길이",
                      "required": true,
                      "options": [
                        { "name": "15cm", "extra": 0, "default": true },
                        { "name": "30cm", "extra": 5000 }
                      ]
                    },
                    {
                      "group_name": "세트 선택",
                      "required": true,
                      "options": [
                        { "name": "단품", "extra": 0, "default": true },
                        { "name": "세트", "extra": 2000 }
                      ]
                    }
                  ]
                },
                {
                  "id": "sw_02",
                  "name": "터키 베이컨 아보카도",
                  "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=200",
                  "base_price": 7200,
                  "tags": ["신메뉴", "샌드위치", "아보카도"],
                  "option_groups": [
                    {
                      "group_name": "빵 길이",
                      "required": true,
                      "options": [
                        { "name": "15cm", "extra": 0, "default": true },
                        { "name": "30cm", "extra": 5000 }
                      ]
                    },
                    {
                      "group_name": "세트 선택",
                      "required": true,
                      "options": [
                        { "name": "단품", "extra": 0, "default": true },
                        { "name": "세트", "extra": 2000 }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        };
