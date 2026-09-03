window.PC = window.PC || {};

PC.CATS = [
  { id: "all", label: "全部品類", icon: "fa-layer-group" },
  { id: "food", label: "主糧", icon: "fa-bowl-food" },
  { id: "treats", label: "零食保健", icon: "fa-pills" },
  { id: "toys", label: "玩具", icon: "fa-baseball" },
  { id: "grooming", label: "清潔護理", icon: "fa-shower" },
  { id: "home", label: "居家寝具", icon: "fa-couch" },
  { id: "travel", label: "出外用品", icon: "fa-suitcase" },
];

PC.SUPPLIERS = [
  {
    id: "north-island", name: "北島糧倉", nameEn: "North Island Grains",
    origin: "新西蘭／台灣", since: 2014, role: "品牌商 + 區域倉", lead: "3–5 日香港倉出",
    blurb: "專注犬貓主糧與主食罐。香港倉常備週轉，適合每週補貨的零售店。",
    brands: [
      { name: "北島鮮肉", type: "自有品牌", line: "成犬／幼貓乾糧", note: "高肉含量日常主糧，12kg 與 6kg 店舖裝。" },
      { name: "北島主食罐", type: "自有品牌", line: "成貓鮮肉罐", note: "24 罐箱裝，適合專賣店與寵物酒店。" },
    ],
  },
  {
    id: "aus-lab", name: "澳研保健", nameEn: "Aust Lab Wellness",
    origin: "澳洲／日本", since: 2016, role: "品牌代理", lead: "5–8 日",
    blurb: "保健與機能零食。強調批次證明與成分表，方便零售向客人解釋。",
    brands: [
      { name: "澳研關節", type: "代理品牌", line: "關節軟粒", note: "60 粒樽裝，復購高，適合收銀旁陳列。" },
      { name: "齒研所", type: "代理品牌", line: "潔齒棒", note: "24 盒整箱出貨，牙科線熱門。" },
      { name: "原塊凍乾", type: "代理品牌", line: "草飼凍乾肉", note: "500g 袋裝，適合作加餐陳列。" },
    ],
  },
  {
    id: "forest", name: "森工坊", nameEn: "Forest Studio",
    origin: "台灣／中國", since: 2018, role: "設計製造", lead: "7–12 日",
    blurb: "玩具、貓家具與居家寝具。重視可陳列外觀，適合店舖門面。",
    brands: [
      { name: "森工坊 Play", type: "自有品牌", line: "益智玩具／潔牙繩", note: "MOQ 低，適合試鋪與端架。" },
      { name: "森居", type: "自有品牌", line: "寵物床／貓跳台", note: "可水洗系列，適合店舖門面陳列。" },
    ],
  },
  {
    id: "clear-care", name: "澄光護理", nameEn: "Clear Care",
    origin: "韓國／台灣", since: 2015, role: "品牌商", lead: "3–6 日香港倉出",
    blurb: "洗護、貓砂與如廁用品。配方溫和，主打店舖常備消耗品。",
    brands: [
      { name: "澄光洗護", type: "自有品牌", line: "浴露露／濕巾", note: "400ml 與 80 片裝，易做端架。" },
      { name: "澄光砂所", type: "自有品牌", line: "豆腐砂／尿墊", note: "18L 砂，回轉快的店舖貨。" },
      { name: "美爪工具", type: "代理品牌", line: "指甲護理套裝", note: "禮盒裝，節日檔期用。" },
    ],
  },
  {
    id: "trail", name: "行旅製造", nameEn: "Trail Goods",
    origin: "香港／東莞", since: 2017, role: "設計製造", lead: "4–7 日",
    blurb: "出外與旅行裝備。防水、夜間安全與航空箱是主力。",
    brands: [
      { name: "行旅", type: "自有品牌", line: "牽繩／胸背／航空箱", note: "店舖可配色陳列，旅行季節主力。" },
      { name: "夜行", type: "自有品牌", line: "LED 安全項圈", note: "S/M/L 混裝出貨，夜間安全款。" },
    ],
  },
  {
    id: "smart-core", name: "智芯寵物", nameEn: "SmartCore Pets",
    origin: "深圳／台灣", since: 2020, role: "科技品牌", lead: "5–10 日",
    blurb: "智慧飲水、饅食、影像與定位。適合想加高客單的零售店。",
    brands: [
      { name: "智芯 Home", type: "自有品牌", line: "飲水機／饅食機", note: "3L 恆溫飲水是入門高客單款。" },
      { name: "智芯 Link", type: "自有品牌", line: "零食相機／GPS", note: "需向客人說明充電與 App。" },
    ],
  },
];
