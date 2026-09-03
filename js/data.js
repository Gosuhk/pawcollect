window.PC = window.PC || {};
PC.CATS = [
  { id: "all", label: "全部品類" },
  { id: "food", label: "主糧" },
  { id: "treats", label: "零食保健" },
  { id: "toys", label: "玩具" },
  { id: "grooming", label: "清潔護理" },
  { id: "home", label: "居家寝具" },
  { id: "travel", label: "出外用品" },
];
PC.SUPPLIERS = [
  { id: "north-island", name: "北島糧倉", nameEn: "North Island Grains", origin: "新西蘭／台灣", since: 2014, role: "品牌商 + 區域倉",
    blurb: "專注犬貓主糧與主食罐。香港倉常備週轉，適合每週補貨的零售店。",
    brands: [
      { name: "北島鮮肉", type: "自有品牌", line: "成犬／幼貓乾糧", note: "高肉含量日常主糧，12kg 與 6kg 店舖裝。" },
      { name: "北島主食罐", type: "自有品牌", line: "成貓鮮肉罐", note: "24 罐箱裝，適合專賣店與寵物酒店。" },
    ]},
  { id: "aus-lab", name: "澳研保健", nameEn: "Aust Lab Wellness", origin: "澳洲／日本", since: 2016, role: "品牌代理",
    blurb: "保健與機能零食。強調批次證明與成分表，方便零售向客人解釋。",
    brands: [
      { name: "澳研關節", type: "代理品牌", line: "關節軟粒", note: "60 粒樽裝，復購高，適合收銀旁陳列。" },
      { name: "齒研所", type: "代理品牌", line: "潔齒棒", note: "24 盒整箱出貨，牙科線熱門。" },
      { name: "原塊凍乾", type: "代理品牌", line: "草飼凍乾肉", note: "500g 袋裝，適合作加餐陳列。" },
    ]},
  { id: "forest", name: "森工坊", nameEn: "Forest Studio", origin: "台灣／中國", since: 2018, role: "設計製造",
    blurb: "玩具、貓家具與居家寝具。重視可陳列外觀，適合店舖門面。",
    brands: [
      { name: "森工坊 Play", type: "自有品牌", line: "益智玩具／潔牙繩", note: "MOQ 低，適合試鋪與端架。" },
      { name: "森居", type: "自有品牌", line: "寵物床／貓跳台", note: "可水洗系列，適合店舖門面陳列。" },
    ]},
  { id: "clear-care", name: "澄光護理", nameEn: "Clear Care", origin: "韓國／台灣", since: 2015, role: "品牌商",
    blurb: "洗護、貓砂與如廁用品。配方溫和，主打店舖常備消耗品。",
    brands: [
      { name: "澄光洗護", type: "自有品牌", line: "浴露露／濕巾", note: "400ml 與 80 片裝，易做端架。" },
      { name: "澄光砂所", type: "自有品牌", line: "豆腐砂／尿墊", note: "18L 砂，回轉快的店舖貨。" },
      { name: "美爪工具", type: "代理品牌", line: "指甲護理套裝", note: "禮盒裝，節日檔期用。" },
    ]},
  { id: "trail", name: "行旅製造", nameEn: "Trail Goods", origin: "香港／東莞", since: 2017, role: "設計製造",
    blurb: "出外與旅行裝備。防水、夜間安全與航空箱是主力。",
    brands: [
      { name: "行旅", type: "自有品牌", line: "牽繩／胸背／航空箱", note: "店舖可配色陳列，旅行季節主力。" },
      { name: "夜行", type: "自有品牌", line: "LED 安全項圈", note: "S/M/L 混裝出貨，夜間安全款。" },
    ]},
  { id: "smart-core", name: "智芯寵物", nameEn: "SmartCore Pets", origin: "深圳／台灣", since: 2020, role: "科技品牌",
    blurb: "智慧飲水、饅食、影像與定位。適合想加高客單的零售店。",
    brands: [
      { name: "智芯 Home", type: "自有品牌", line: "飲水機／饅食機", note: "3L 恆溫飲水是入門高客單款。" },
      { name: "智芯 Link", type: "自有品牌", line: "零食相機／GPS", note: "需向客人說明充電與 App。" },
    ]},
];
PC.PRODUCTS = [
  { id:"dog-kibble", name:"成犬鮮肉糧 12kg", sku:"PC-FD-1201", supplier:"北島糧倉", sid:"north-island", brand:"北島鮮肉", category:"food", moq:6, wholesale:188, retail:328, unit:"袋", summary:"高肉含量日常主糧，店舖週轉款。" },
  { id:"cat-kit", name:"幼貓無穀糧 6kg", sku:"PC-FD-1204", supplier:"北島糧倉", sid:"north-island", brand:"北島鮮肉", category:"food", moq:8, wholesale:156, retail:288, unit:"袋", summary:"幼貓入口糧，適合專賣店。" },
  { id:"cat-can", name:"成貓鮮肉主食罐 24罐", sku:"PC-FD-1208", supplier:"北島糧倉", sid:"north-island", brand:"北島主食罐", category:"food", moq:4, wholesale:216, retail:368, unit:"箱", summary:"24 罐箱裝，寵物酒店常用。" },
  { id:"joint", name:"關節保健軟粒 60粒", sku:"PC-TR-3310", supplier:"澳研保健", sid:"aus-lab", brand:"澳研關節", category:"treats", moq:12, wholesale:62, retail:128, unit:"樽", summary:"復購高，適合陳列在收銀。" },
  { id:"dental", name:"潔齒棒整箱 24盒", sku:"PC-TR-3302", supplier:"澳研保健", sid:"aus-lab", brand:"齒研所", category:"treats", moq:8, wholesale:48, retail:89, unit:"箱", summary:"牙科線熱門，整箱出貨。" },
  { id:"freeze", name:"草飼冷凍乾燥肉塊 500g", sku:"PC-TR-3320", supplier:"澳研保健", sid:"aus-lab", brand:"原塊凍乾", category:"treats", moq:10, wholesale:78, retail:158, unit:"袋", summary:"100% 原肉凍乾，零防腐。" },
  { id:"puzzle", name:"漏食益智球", sku:"PC-TY-5501", supplier:"森工坊", sid:"forest", brand:"森工坊 Play", category:"toys", moq:12, wholesale:28, retail:68, unit:"個", summary:"MOQ 低，適合試鋪。" },
  { id:"rope", name:"雙結棉繩潔牙玩具", sku:"PC-TY-5504", supplier:"森工坊", sid:"forest", brand:"森工坊 Play", category:"toys", moq:24, wholesale:16, retail:39, unit:"條", summary:"消耗品，可做端架。" },
  { id:"bed", name:"可水洗卵形寵物床", sku:"PC-HM-9103", supplier:"森工坊", sid:"forest", brand:"森居", category:"home", moq:4, wholesale:96, retail:198, unit:"張", summary:"可水洗，換季好賣。" },
  { id:"tree", name:"中型劍麻貓跳台", sku:"PC-HM-9110", supplier:"森工坊", sid:"forest", brand:"森居", category:"home", moq:2, wholesale:280, retail:580, unit:"座", summary:"店舖門面陳列款。" },
  { id:"shampoo", name:"溫和寵物浴露露 400ml", sku:"PC-GR-4401", supplier:"澄光護理", sid:"clear-care", brand:"澄光洗護", category:"grooming", moq:12, wholesale:32, retail:78, unit:"支", summary:"溫和配方，常備消耗。" },
  { id:"wipe", name:"溫和清潔濕紙巾 80片", sku:"PC-GR-4408", supplier:"澄光護理", sid:"clear-care", brand:"澄光洗護", category:"grooming", moq:20, wholesale:18, retail:42, unit:"包", summary:"收銀旁好賣。" },
  { id:"litter", name:"豆腐砂 18L", sku:"PC-GR-4410", supplier:"澄光護理", sid:"clear-care", brand:"澄光砂所", category:"grooming", moq:8, wholesale:54, retail:108, unit:"包", summary:"回轉快的店舖貨。" },
  { id:"nail", name:"專業指甲護理套裝", sku:"PC-GR-4412", supplier:"澄光護理", sid:"clear-care", brand:"美爪工具", category:"grooming", moq:12, wholesale:64, retail:138, unit:"套", summary:"節日禮盒檔期用。" },
  { id:"leash", name:"防水牽繩項圈套組", sku:"PC-TV-7701", supplier:"行旅製造", sid:"trail", brand:"行旅", category:"travel", moq:10, wholesale:42, retail:98, unit:"套", summary:"可配色陳列。" },
  { id:"carrier", name:"硬殼航空箱", sku:"PC-TV-7708", supplier:"行旅製造", sid:"trail", brand:"行旅", category:"travel", moq:4, wholesale:168, retail:358, unit:"個", summary:"旅行季節主力。" },
  { id:"led", name:"LED 夜行安全項圈", sku:"PC-TV-7712", supplier:"行旅製造", sid:"trail", brand:"夜行", category:"travel", moq:24, wholesale:32, retail:79, unit:"條", summary:"S/M/L 混裝出貨。" },
  { id:"fountain", name:"智慧恆溫飲水機 3L", sku:"PC-HM-9108", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Home", category:"home", moq:4, wholesale:198, retail:420, unit:"台", summary:"超靜音雙頻過濾。" },
  { id:"feeder", name:"智慧定量饅食機", sku:"PC-HM-9112", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Home", category:"home", moq:4, wholesale:260, retail:520, unit:"台", summary:"高客單入門智慧款。" },
  { id:"gps", name:"迷你 GPS 定位器", sku:"PC-TV-7720", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Link", category:"travel", moq:8, wholesale:148, retail:328, unit:"個", summary:"需向客人說明 App。" },
  { id:"unbranded-demo", name:"無品牌示範列（不入目錄）", sku:"PC-XX-0000", supplier:"森工坊", sid:"forest", brand:"", category:"toys", moq:10, wholesale:20, retail:40, unit:"個", summary:"示範：冇品牌唔入目錄。" },
];
PC.listed = () => PC.PRODUCTS.filter(p => !!(p.brand && String(p.brand).trim()));
PC.VALUES = [
  ["信任 Trust", "以透明、誠實、長期合作為基礎，建立供應商與客戶之間的互信關係。"],
  ["效率 Efficiency", "簡化流程、優化系統，讓每一筆交易更快、更順暢、更低成本。"],
  ["品質 Quality", "嚴格把關產品與服務標準，確保客戶收到可靠、穩定的貨源。"],
  ["共贏 Win-Win", "以供應商、零售商、平台三方共同成長為目標，創造可持續的商業價值。"],
  ["創新 Innovation", "持續優化平台體驗與服務模式，用科技解決傳統批發痛點。"],
  ["責任 Responsibility", "遵守法規、重視合規與商業道德，對客戶、合作夥伴及社會負責。"],
];
