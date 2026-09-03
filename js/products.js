window.PC = window.PC || {};
PC.PRODUCTS = [
  { id:"dog-kibble", name:"成犬鮮肉糧 12kg", sku:"PC-FD-1201", supplier:"北島糧倉", sid:"north-island", brand:"北島鮮肉", category:"food", moq:6, wholesale:188, retail:328, unit:"袋", stock:86, pack:"12kg × 1", summary:"高肉含量日常主糧，店舖週轉款。", detail:"紐西蘭草飼配方，粗蛋白 ≥ 32%。適合每週補貨的中型店。建議陳列在主糧牆中段。" },
  { id:"cat-kit", name:"幼貓無穀糧 6kg", sku:"PC-FD-1204", supplier:"北島糧倉", sid:"north-island", brand:"北島鮮肉", category:"food", moq:8, wholesale:156, retail:288, unit:"袋", stock:54, pack:"6kg × 1", summary:"幼貓入口糧，適合專賣店。", detail:"無穀、添加 DHA。6kg 店舖裝方便客人試轉糧。" },
  { id:"cat-can", name:"成貓鮮肉主食罐 24罐", sku:"PC-FD-1208", supplier:"北島糧倉", sid:"north-island", brand:"北島主食罐", category:"food", moq:4, wholesale:216, retail:368, unit:"箱", stock:40, pack:"85g × 24", summary:"24 罐箱裝，寵物酒店常用。", detail:"主食級鮮肉罐，水分高。酒店與寄宿常用箱裝。" },
  { id:"joint", name:"關節保健軟粒 60粒", sku:"PC-TR-3310", supplier:"澳研保健", sid:"aus-lab", brand:"澳研關節", category:"treats", moq:12, wholesale:62, retail:128, unit:"樽", stock:120, pack:"60 粒／樽", summary:"復購高，適合陳列在收銀。", detail:"葡萄糖胺 + 軟骨素軟粒。建議放收銀旁做加購。" },
  { id:"dental", name:"潔齒棒整箱 24盒", sku:"PC-TR-3302", supplier:"澳研保健", sid:"aus-lab", brand:"齒研所", category:"treats", moq:8, wholesale:48, retail:89, unit:"箱", stock:64, pack:"7 支 × 24 盒", summary:"牙科線熱門，整箱出貨。", detail:"每日一條潔齒棒。整箱出貨，適合月訂。" },
  { id:"freeze", name:"草飼冷凍乾燥肉塊 500g", sku:"PC-TR-3320", supplier:"澳研保健", sid:"aus-lab", brand:"原塊凍乾", category:"treats", moq:10, wholesale:78, retail:158, unit:"袋", stock:48, pack:"500g", summary:"100% 原肉凍乾，零防腐。", detail:"單一蛋白，可作獎勵或拌糧。需防潮陳列。" },
  { id:"puzzle", name:"漏食益智球", sku:"PC-TY-5501", supplier:"森工坊", sid:"forest", brand:"森工坊 Play", category:"toys", moq:12, wholesale:28, retail:68, unit:"個", stock:200, pack:"單個彩盒", summary:"MOQ 低，適合試鋪。", detail:"可調開口大小。適合端架與收銀機。" },
  { id:"rope", name:"雙結棉繩潔牙玩具", sku:"PC-TY-5504", supplier:"森工坊", sid:"forest", brand:"森工坊 Play", category:"toys", moq:24, wholesale:16, retail:39, unit:"條", stock:310, pack:"混色 3 色", summary:"消耗品，可做端架。", detail:"純棉雙結，咬合力中等。低客單消耗品。" },
  { id:"bed", name:"可水洗卵形寵物床", sku:"PC-HM-9103", supplier:"森工坊", sid:"forest", brand:"森居", category:"home", moq:4, wholesale:96, retail:198, unit:"張", stock:36, pack:"M 碼可拆洗", summary:"可水洗，換季好賣。", detail:"外套可機洗。換季與開業套裝常用。" },
  { id:"tree", name:"中型劍麻貓跳台", sku:"PC-HM-9110", supplier:"森工坊", sid:"forest", brand:"森居", category:"home", moq:2, wholesale:280, retail:580, unit:"座", stock:18, pack:"扁平箱，店舖自組", summary:"店舖門面陳列款。", detail:"劍麻柱 + 三層平台。建議店內展示一組。" },
  { id:"shampoo", name:"溫和寵物浴露露 400ml", sku:"PC-GR-4401", supplier:"澄光護理", sid:"clear-care", brand:"澄光洗護", category:"grooming", moq:12, wholesale:32, retail:78, unit:"支", stock:150, pack:"400ml", summary:"溫和配方，常備消耗。", detail:"燕麥配方，適合敏感皮膚。美容室與零售皆可。" },
  { id:"wipe", name:"溫和清潔濕紙巾 80片", sku:"PC-GR-4408", supplier:"澄光護理", sid:"clear-care", brand:"澄光洗護", category:"grooming", moq:20, wholesale:18, retail:42, unit:"包", stock:240, pack:"80 片", summary:"收銀旁好賣。", detail:"無酒精配方。低價加購款。" },
  { id:"litter", name:"豆腐砂 18L", sku:"PC-GR-4410", supplier:"澄光護理", sid:"clear-care", brand:"澄光砂所", category:"grooming", moq:8, wholesale:54, retail:108, unit:"包", stock:92, pack:"18L", summary:"回轉快的店舖貨。", detail:"結團快、可沖廁。香港倉常備。" },
  { id:"nail", name:"專業指甲護理套裝", sku:"PC-GR-4412", supplier:"澄光護理", sid:"clear-care", brand:"美爪工具", category:"grooming", moq:12, wholesale:64, retail:138, unit:"套", stock:70, pack:"剪＋鋤＋止血粉", summary:"節日禮盒檔期用。", detail:"禮盒裝，適合節日檔與開業禮。" },
  { id:"leash", name:"防水牽繩項圈套組", sku:"PC-TV-7701", supplier:"行旅製造", sid:"trail", brand:"行旅", category:"travel", moq:10, wholesale:42, retail:98, unit:"套", stock:88, pack:"項圈 + 1.5m 繩", summary:"可配色陳列。", detail:"PVC 防水，雨天好賣。可按色系陳列。" },
  { id:"carrier", name:"硬殼航空箱", sku:"PC-TV-7708", supplier:"行旅製造", sid:"trail", brand:"行旅", category:"travel", moq:4, wholesale:168, retail:358, unit:"個", stock:22, pack:"IATA 規格 M", summary:"旅行季節主力。", detail:"符合常見航空尺寸。旅行旺季提前備貨。" },
  { id:"led", name:"LED 夜行安全項圈", sku:"PC-TV-7712", supplier:"行旅製造", sid:"trail", brand:"夜行", category:"travel", moq:24, wholesale:32, retail:79, unit:"條", stock:160, pack:"S/M/L 混裝", summary:"S/M/L 混裝出貨。", detail:"USB 充電，三種閃法。夜間安全款。" },
  { id:"fountain", name:"智慧恆溫飲水機 3L", sku:"PC-HM-9108", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Home", category:"home", moq:4, wholesale:198, retail:420, unit:"台", stock:28, pack:"主機 + 濾芯 × 2", summary:"超靜音雙層過濾。", detail:"入門高客單。建議店內通電展示。" },
  { id:"feeder", name:"智慧定量饅食機", sku:"PC-HM-9112", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Home", category:"home", moq:4, wholesale:260, retail:520, unit:"台", stock:16, pack:"6L 糧桶", summary:"高客單入門智慧款。", detail:"App 定時定量。需向客人示範綁定。" },
  { id:"gps", name:"迷你 GPS 定位器", sku:"PC-TV-7720", supplier:"智芯寵物", sid:"smart-core", brand:"智芯 Link", category:"travel", moq:8, wholesale:148, retail:328, unit:"個", stock:34, pack:"主機 + 充電線", summary:"需向客人說明 App。", detail:"輕量項圈掛件。售出需協助開通 SIM／App。" },
  { id:"unbranded-demo", name:"無品牌示範列（不入目錄）", sku:"PC-XX-0000", supplier:"森工坊", sid:"forest", brand:"", category:"toys", moq:10, wholesale:20, retail:40, unit:"個", stock:0, pack:"—", summary:"示範：内品牌唔入目錄。", detail:"系統會自動剔除無品牌 SKU。" }
];
PC.listed = () => PC.PRODUCTS.filter((p) => !!(p.brand && String(p.brand).trim()));
PC.VALUES = [
  ["信任 Trust", "以透明、誠實、長期合作為基礎，建立供應商與客戶之間的互信關係。"],
  ["效率 Efficiency", "簡化流程、優化系統，讓每一筆交易更快、更順暢、更低成本。"],
  ["品質 Quality", "嚴格把關產品與服務標準，確保客戶收到可靠、穩定的貨源。"],
  ["共贏 Win-Win", "以供應商、零售商、平台三方共同成長為目標，創造可持續的商業價值。"],
  ["創新 Innovation", "持續優化平台體驗與服務模式，用科技解決傳統批發痛點。"],
  ["責任 Responsibility", "遵守法規、重視合規與商業道德，對客戶、合作夥伴及社會負責。"]
];
PC.STEPS = [
  ["01", "申請開戶", "零售店提交商業登記／店址，1–2 個工作天審核。"],
  ["02", "解鎖批發價", "通過後可見 MOQ、批發價與建議零售毛利。"],
  ["03", "落批發單", "按供應商／品牌篩選，達到各 SKU MOQ 即可提交。"],
  ["04", "倉出／對帳", "香港倉現貨 3–5 日；跨境貨按供應商交期。"]
];
