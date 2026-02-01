const menuData = {
          "franchises": [
            {
              "id": "starbucks",
              "name": "스타벅스",
              "category": "cafe",
              "last_updated": "2026-01-29",
              "items": [
                {
                  "id": "sb_coffe_01",
                  "category" : "coffee",
                  "name": "아메리카노",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110563]_20250626094353711.jpg",
                  "base_price": 4700,
                  "tags": ["베스트", "아메리카노", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_02",
                  "category" : "coffee",
                  "name": "카페 라떼",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833725.jpg",
                  "base_price": 5200,
                  "tags": ["베스트", "라떼", "카페라떼", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_03",
                  "category" : "coffee",
                  "name": "바닐라 라떼",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/10/[9200000006346]_20251029141759604.jpg",
                  "base_price": 5200,
                  "tags": ["바닐라", "라떼", "베스트", "바닐라라떼", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 0, "default": true },
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_04",
                  "category" : "coffee",
                  "name": "플랫 화이트",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[9200000005181]_20250626095819133.jpg",
                  "base_price": 5800,
                  "tags": ["플랫 화이트", "카페인", "디카페인", "리스트레토"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_05",
                  "category" : "coffee",
                  "name": "돌체 라떼",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[128692]_20210426091933665.jpg",
                  "base_price": 6100,
                  "tags": ["돌체라떼", "라떼", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "돌체 시럼", "extra": 0, "default": true},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_06",
                  "category" : "coffee",
                  "name": "카페 모카",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110566]_20250626113005628.jpg",
                  "base_price": 5700,
                  "tags": ["카페모카", "모카", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "모카 시럼", "extra": 0, "default": true},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": true,
                      "options": [
                        { "name": "없이", "extra": 0},
                        { "name": "적게", "extra": 0},
                        { "name": "보통", "extra": 0, "default": true},
                        { "name": "많이", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_07",
                  "category" : "coffee",
                  "name": "카푸치노",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110566]_20250626113005628.jpg",
                  "base_price": 5200,
                  "tags": ["카푸치노", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_08",
                  "category" : "coffee",
                  "name": "카라멜 마키아또",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[126197]_20210415154609863.jpg",
                  "base_price": 6100,
                  "tags": ["카라멜", "카라멜마키아토", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800, "default": true},
                        { "name": "바닐라 시럼 없이", "extra": 0},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": true,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 0, "default": true},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_09",
                  "category" : "coffee",
                  "name": "화이트 초콜릿 모카",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110572]_20250626113205748.jpg",
                  "base_price": 6100,
                  "tags": ["모카", "모카라떼", "라떼", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": -800, "description": "237ml"},
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "화이트모카 시럼", "extra": 0, "default": true},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": true,
                      "options": [
                        { "name": "없이", "extra": 0},
                        { "name": "적게", "extra": 0, "default": true},
                        { "name": "보통", "extra": 0 },
                        { "name": "많이", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_10",
                  "category" : "coffee",
                  "name": "커피 스타벅스 더블 샷",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110611]_20250626095539402.jpg",
                  "base_price": 5300,
                  "tags": ["더블샷", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "아이스", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": 0, "default": true, "description": "207ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "하프앤하프", "extra": 0, "default": true}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "클래식 시럼", "extra": 0, "default": true},
                        { "name": "클래식 시럼 없이", "extra": 0},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_11",
                  "category" : "coffee",
                  "name": "바닐라 스타벅스 더블 샷",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110611]_20250626095539402.jpg",
                  "base_price": 5300,
                  "tags": ["바닐라", "더블샷", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "아이스", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": 0, "default": true, "description": "207ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "하프앤하프", "extra": 0, "default": true}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 0, "default": true},
                        { "name": "클래식 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_12",
                  "category" : "coffee",
                  "name": "헤이즐넛 스타벅스 더블 샷",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[110611]_20250626095539402.jpg",
                  "base_price": 5300,
                  "tags": ["헤이즐넛", "더블샷", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "아이스", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": 0, "default": true, "description": "207ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "하프앤하프", "extra": 0, "default": true}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "헤이즐넛 시럼", "extra": 0, "default": true},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 800},
                        { "name": "보통", "extra": 800 },
                        { "name": "많이", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_13",
                  "category" : "coffee",
                  "name": "밀크카라멜 라떼",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2025/06/[9200000006238]_20250613084659816.jpg",
                  "base_price": 5800,
                  "tags": ["카라멜", "라떼", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true },
                        { "name": "아이스", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "톨", "extra": 0, "default": true, "description": "355ml"},
                        { "name": "그란데", "extra": 600, "description": "473ml"},
                        { "name": "벤티", "extra": 1400,  "description": "591ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": true,
                      "options": [
                        { "name": "솔티드 카라멜 시럼", "extra": 0, "default": true},
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        {"name": "적게", "extra": 800},
                        {"name": "보통", "extra": 800} ,
                        {"name": "많이", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_14",
                  "category" : "coffee",
                  "name": "에스프레소",
                  "image": "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[20]_20210415144112678.jpg",
                  "base_price": 3900,
                  "tags": ["에스프레소", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "1샷", "extra": 0, "default": true, "description": "22ml"},
                        { "name": "2샷", "extra": 800, "description": "44ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_15",
                  "category" : "coffee",
                  "name": "에스프레소 마키아또",
                  "image":	"https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[25]_20210415144211211.jpg",
                  "base_price": 3900,
                  "tags": ["에스프레소", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "1샷", "extra": 0, "default": true, "description": "22ml"},
                        { "name": "2샷", "extra": 800, "description": "44ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_16",
                  "category" : "coffee",
                  "name": "에스프레소 콘 파나",
                  "image":	"https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[30]_20210415144252244.jpg",
                  "base_price": 4100,
                  "tags": ["에스프레소", "카페인", "디카페인"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "1샷", "extra": 0, "default": true, "description": "22ml"},
                        { "name": "2샷", "extra": 800, "description": "44ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "우유",
                      "required": true,
                      "options": [
                        { "name": "우유", "extra": 0, "default": true},
                        { "name": "저지방 우유", "extra": 0},
                        { "name": "무지방 우유", "extra": 0},
                        { "name": "두유", "extra": 0},
                        { "name": "오트(귀리)", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": true,
                      "options": [
                        { "name": "적게", "extra": 0},
                        { "name": "보통", "extra": 0, "default": true},
                        { "name": "많이", "extra": 0 }
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
                  ]
                },
                {
                  "id": "sb_coffe_17",
                  "category" : "coffee",
                  "name": "시그니처 코르타도",
                  "image":	"https://image.istarbucks.co.kr/upload/store/skuimg/2025/10/[9200000006338]_20251029141124907.jpg",
                  "base_price": 4100,
                  "tags": ["코르타도", "카페인", "디카페인", "리스트레토"],
                  "option_groups": [
                    {
                      "group_name": "온도",
                      "required": true,
                      "options": [
                        { "name": "핫", "extra": 0, "default": true }
                      ]
                    },
                    {
                      "group_name": "사이즈",
                      "required": true,
                      "options": [
                        { "name": "숏", "extra": 0, "default": true, "description": "207ml"}
                      ]
                    },
                    {
                      "group_name": "원두",
                      "required": true,
                      "options": [
                        { "name": "스그니처", "extra": 0, "default": true },
                        { "name": "블론드", "extra": 0 },
                        { "name": "디카페인", "extra": 300},
                        { "name": "1/2 디카페인", "extra": 300 }
                      ]
                    },
                    {
                      "group_name": "샷추가",
                      "required": false,
                      "options": [
                        { "name": "1샷", "extra": 800, "count" : true}
                      ]
                    },
                    {
                      "group_name": "시럽",
                      "required": false,
                      "options": [
                        { "name": "바닐라 시럼", "extra": 800},
                        { "name": "헤이즐넛 시럼", "extra": 800 },
                        { "name": "카라멜 시럽", "extra": 800 }
                      ]
                    },
                    {
                      "group_name": "휘핑 크림",
                      "required": false,
                      "options": [
                        { "name": "적게", "extra": 8000},
                        { "name": "보통", "extra": 800},
                        { "name": "많이", "extra": 800}
                      ]
                    },
                    {
                      "group_name": "드리즐",
                      "required": false,
                      "options": [
                        { "name": "카라멜 드리즐", "extra": 800},
                        { "name": "초콜릿 드리즐", "extra": 800 }
                      ]
                    },
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
