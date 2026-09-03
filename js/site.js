(function () {
  const KEY = "pc_member";
  const CART = "pc_cart";
  const session = () => JSON.parse(localStorage.getItem(KEY) || "null");
  const setSession = (v) => localStorage.setItem(KEY, JSON.stringify(v));
  const cart = () => JSON.parse(localStorage.getItem(CART) || "[]");
  const setCart = (v) => localStorage.setItem(CART, JSON.stringify(v));
  window.PC = window.PC || {};
  PC.session = session;
  PC.verified = () => !!(session() && session().verified);
  PC.money = (n) => "HK$" + n;
  PC.catLabel = (id) => (PC.CATS.find((c) => c.id === id) || {}).label || id;
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "fixed bottom-4 right-4 z-[80] rounded-lg bg-orange-500 px-4 py-2 text-sm text-white shadow-lg";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }
  PC.toast = toast;
  PC.addCart = function (id) {
    if (!PC.verified() || session().role !== "retailer") { openModal(); return; }
    const p = PC.PRODUCTS.find((x) => x.id === id);
    const lines = cart();
    const line = lines.find((x) => x.id === id);
    if (line) line.qty += p.moq; else lines.push({ id, qty: p.moq });
    setCart(lines);
    toast("已加入 " + p.name);
    const n = document.getElementById("cartCount");
    if (n) n.textContent = lines.reduce((s, i) => s + i.qty, 0);
  };
  window.openModal = function () { document.getElementById("authModal").classList.remove("hidden"); };
  window.closeModal = function () { document.getElementById("authModal").classList.add("hidden"); };
  window.pcLogin = function (role) {
    const company = document.getElementById("authCompany").value.trim() || (role === "supplier" ? "示範供應商" : "示範零售店");
    setSession({ verified: true, role, company, contact: "聯絡人" });
    closeModal();
    toast(role === "retailer" ? "已解鎖批發價" : "已進入供應商檢視");
    location.reload();
  };
  window.pcLogout = function () { localStorage.removeItem(KEY); location.reload(); };
  const page = document.body.dataset.page;
  const s = session();
  const count = cart().reduce((n, i) => n + i.qty, 0);
  const header = document.getElementById("siteHeader");
  if (header) {
    header.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <a href="index.html" class="flex items-center gap-3">
          <span class="bg-orange-500 text-white w-10 h-10 rounded-xl flex items-center justify-center"><i class="fa-solid fa-paw"></i></span>
          <span>
            <span class="text-xl font-extrabold">PetWholesale<span class="text-orange-500">Pro</span></span>
            <span class="block text-xs text-slate-400">爪集 · B2B Pet Supplies Hub</span>
          </span>
        </a>
        <nav class="hidden md:flex items-center gap-7 text-sm font-medium">
          <a href="index.html" class="${page==="home"?"text-orange-400":"hover:text-orange-400"}">首頁</a>
          <a href="catalog.html" class="${page==="catalog"?"text-orange-400":"hover:text-orange-400"}">批發專區</a>
          <a href="suppliers.html" class="${page==="suppliers"?"text-orange-400":"hover:text-orange-400"}">供應商</a>
          <a href="about.html" class="${page==="about"?"text-orange-400":"hover:text-orange-400"}">關於我們</a>
        </nav>
        <div class="flex items-center gap-3">
          ${s ? `<button onclick="pcLogout()" class="hidden sm:block text-sm text-slate-300">${s.company}</button>` : ""}
          <a href="cart.html" class="text-sm border border-slate-700 rounded-lg px-3 py-2">批發單 <span id="cartCount">${count}</span></a>
          ${s ? "" : `<button onclick="openModal()" class="text-sm border border-orange-500 text-orange-400 px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white">批發商登入 / 審核</button>`}
        </div>
      </div>`;
  }
  const footer = document.getElementById("siteFooter");
  if (footer) {
    footer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div class="md:col-span-2">
          <p class="text-xl font-extrabold">PetWholesale<span class="text-orange-500">Pro</span></p>
          <p class="mt-3 max-w-md text-sm text-slate-400 leading-relaxed">爪集 · 大中華區最值得信賴的 B2B 寵物用品批發網絡。連結優質供應商與零售商，推動高效、透明的商業流通。</p>
        </div>
        <div>
          <p class="text-xs tracking-widest text-slate-500">目錄</p>
          <a href="catalog.html" class="mt-3 block text-sm hover:text-orange-400">批發專區</a>
          <a href="suppliers.html" class="mt-2 block text-sm hover:text-orange-400">供應商網絡</a>
          <a href="import.html" class="mt-2 block text-sm hover:text-orange-400">匯入貨盤</a>
        </div>
        <div>
          <p class="text-xs tracking-widest text-slate-500">公司</p>
          <a href="about.html" class="mt-3 block text-sm hover:text-orange-400">願景使命價值</a>
          <a href="apply.html" class="mt-2 block text-sm hover:text-orange-400">申請零售開戶</a>
          <a href="supplier-apply.html" class="mt-2 block text-sm hover:text-orange-400">供應商入駐</a>
        </div>
      </div>`;
  }
  if (!document.getElementById("authModal")) {
    const m = document.createElement("div");
    m.id = "authModal";
    m.className = "hidden fixed inset-0 z-[70] bg-black/70 flex items-center justify-center p-4";
    m.innerHTML = `
      <div class="w-full max-w-md rounded-2xl border border-slate-700 bg-slate-900 p-6">
        <div class="flex justify-between items-center">
          <h2 class="text-xl font-extrabold">批發會員身分驗證</h2>
          <button onclick="closeModal()" class="text-slate-400">關閉</button>
        </div>
        <p class="mt-2 text-sm text-slate-400">示範站填公司名稱即可解鎖。正式版本需審核。</p>
        <input id="authCompany" placeholder="公司 / 店舖名稱" class="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2" />
        <div class="mt-4 grid grid-cols-2 gap-3">
          <button onclick="pcLogin('retailer')" class="rounded-lg bg-orange-500 py-2.5 font-semibold">零售商登入</button>
          <button onclick="pcLogin('supplier')" class="rounded-lg border border-slate-600 py-2.5">供應商登入</button>
        </div>
      </div>`;
    document.body.appendChild(m);
  }
})();
