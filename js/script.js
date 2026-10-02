// ===========================================================
// MENÚ DIGITAL — lógica de front (sin backend, todo vive en el navegador)
// Usa CATEGORIAS y MENU_DATA definidos en data.js
// ===========================================================
(function () {
  'use strict';

  const IMG_BASE = 'assets/categorias/';
  const STORAGE_KEY = 'menu_digital_cuenta_v1';

  const fmt = (n) => n.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';

  // -------------------- estado del carrito --------------------
  /** cada línea: { id, catId, name, variantLabel, price, img, qty } */
  let cart = [];

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      cart = raw ? JSON.parse(raw) : [];
    } catch (e) { cart = []; }
  }
  function saveCart() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (e) {}
  }
  function lineId(catId, name, variantLabel) {
    return catId + '|' + name + '|' + (variantLabel || '');
  }
  function addToCart({ catId, name, variantLabel, price, img }) {
    const id = lineId(catId, name, variantLabel);
    const existing = cart.find((l) => l.id === id);
    if (existing) existing.qty += 1;
    else cart.push({ id, catId, name, variantLabel, price, img, qty: 1 });
    saveCart();
    renderCart();
    bumpFab();
  }
  function changeQty(id, delta) {
    const line = cart.find((l) => l.id === id);
    if (!line) return;
    line.qty += delta;
    if (line.qty <= 0) cart = cart.filter((l) => l.id !== id);
    saveCart();
    renderCart();
  }
  function removeLine(id) {
    cart = cart.filter((l) => l.id !== id);
    saveCart();
    renderCart();
  }
  function clearCart() {
    cart = [];
    saveCart();
    renderCart();
  }
  function cartTotals() {
    const count = cart.reduce((s, l) => s + l.qty, 0);
    const total = cart.reduce((s, l) => s + l.qty * l.price, 0);
    return { count, total };
  }

  // -------------------- referencias DOM --------------------
  const $splash = document.getElementById('splash');
  const $app = document.getElementById('app');
  const $viewHome = document.getElementById('view-home');
  const $viewCategory = document.getElementById('view-category');
  const $homeGrid = document.getElementById('home-grid');
  const $btnBack = document.getElementById('btn-back');
  const $catHeroImg = document.getElementById('cat-hero-img');
  const $catIcon = document.getElementById('cat-icon');
  const $catTitle = document.getElementById('cat-title');
  const $catCount = document.getElementById('cat-count');
  const $catList = document.getElementById('cat-list');
  const $catSearch = document.getElementById('cat-search');

  const $fabCart = document.getElementById('btn-cart');
  const $cartCount = document.getElementById('cart-count');
  const $cartTotal = document.getElementById('cart-total');

  const $sheet = document.getElementById('cart-sheet');
  const $cartBackdrop = document.getElementById('cart-backdrop');
  const $btnCloseCart = document.getElementById('btn-close-cart');
  const $cartItems = document.getElementById('cart-items');
  const $cartEmpty = document.getElementById('cart-empty');
  const $sheetTotal = document.getElementById('sheet-total');
  const $btnClearCart = document.getElementById('btn-clear-cart');
  const $toast = document.getElementById('toast');

  let currentCatId = null;

  // -------------------- render: home --------------------
  function renderHome() {
    $homeGrid.innerHTML = '';
    CATEGORIAS.forEach((cat, i) => {
      const btn = document.createElement('button');
      btn.className = 'cat-card';
      btn.style.animationDelay = (i * 0.05) + 's';
      const imgSrc = cat.cover ? IMG_BASE + cat.folder + '/' + cat.cover : '';
      btn.innerHTML = `
        ${imgSrc ? `<img class="cat-card__img" src="${imgSrc}" alt="${cat.nombre}" loading="lazy">` : ''}
        <div class="cat-card__shade"></div>
        <div class="cat-card__body">
          <span class="cat-card__icon">${cat.icon}</span>
          <span class="cat-card__name">${cat.nombre}</span>
          <span class="cat-card__count">${cat.count} opciones</span>
        </div>`;
      btn.addEventListener('click', () => openCategory(cat.id));
      $homeGrid.appendChild(btn);
    });
  }

  // -------------------- render: categoría --------------------
  function openCategory(catId) {
    const cat = MENU_DATA[catId];
    if (!cat) return;
    currentCatId = catId;
    document.body.setAttribute('data-tema', cat.tema);

    const heroImg = cat.covers && cat.covers[0] ? IMG_BASE + cat.folder + '/' + cat.covers[0] : '';
    $catHeroImg.src = heroImg;
    $catHeroImg.alt = cat.nombre;
    $catIcon.textContent = cat.icon;
    $catTitle.textContent = cat.nombre;
    $catCount.textContent = cat.items.length + ' opciones';
    $catSearch.value = '';

    renderItems(cat.items);

    $viewHome.hidden = true;
    $viewCategory.hidden = false;
    window.scrollTo(0, 0);
  }

  function renderItems(items) {
    $catList.innerHTML = '';
    if (!items.length) {
      $catList.innerHTML = '<p class="cat__empty">No se encontraron productos.</p>';
      return;
    }
    const cat = MENU_DATA[currentCatId];
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'item-card';
      card.style.animationDelay = Math.min(i * 0.04, 0.5) + 's';
      const imgSrc = item.img ? IMG_BASE + cat.folder + '/' + item.img : '';

      let bodyHtml = `<div class="item-card__body"><p class="item-card__name">${item.name}</p>`;
      if (item.variants.length === 1) {
        const v = item.variants[0];
        bodyHtml += `
          <div class="item-card__single">
            <span class="item-card__price">${v.label ? v.label + ' · ' : ''}${fmt(v.price)}</span>
            <button class="btn-add btn-add--full" data-action="add" data-vi="0">
              <span class="btn-add__plus">+</span> Añadir
            </button>
          </div>`;
      } else {
        bodyHtml += '<div class="item-card__variants">';
        item.variants.forEach((v, vi) => {
          bodyHtml += `
            <button class="btn-add" data-action="add" data-vi="${vi}">
              <span class="btn-add__plus">+</span> ${v.label} ${fmt(v.price)}
            </button>`;
        });
        bodyHtml += '</div>';
      }
      bodyHtml += '</div>';

      card.innerHTML = (imgSrc ? `<img class="item-card__img" src="${imgSrc}" alt="${item.name}" loading="lazy">` : '') + bodyHtml;

      card.querySelectorAll('[data-action="add"]').forEach((btn) => {
        btn.addEventListener('click', (ev) => {
          const vi = parseInt(btn.getAttribute('data-vi'), 10);
          const variant = item.variants[vi];
          addToCart({
            catId: currentCatId,
            name: item.name,
            variantLabel: variant.label,
            price: variant.price,
            img: item.img,
          });
          flyToCart(ev.currentTarget);
          showToast('Añadido a tu cuenta');
        });
      });

      $catList.appendChild(card);
    });
  }

  function closeCategory() {
    $viewCategory.hidden = true;
    $viewHome.hidden = false;
    document.body.removeAttribute('data-tema');
  }

  // búsqueda dentro de categoría
  $catSearch.addEventListener('input', () => {
    const q = $catSearch.value.trim().toLowerCase();
    const cat = MENU_DATA[currentCatId];
    if (!cat) return;
    const filtered = q ? cat.items.filter((it) => it.name.toLowerCase().includes(q)) : cat.items;
    renderItems(filtered);
  });

  $btnBack.addEventListener('click', closeCategory);

  // -------------------- carrito: UI --------------------
  function renderCart() {
    const { count, total } = cartTotals();
    $cartCount.textContent = count === 1 ? '1 producto' : count + ' productos';
    $cartTotal.textContent = fmt(total);
    $sheetTotal.textContent = fmt(total);
    $fabCart.hidden = false;
    $fabCart.classList.toggle('is-out', count === 0 && !sheetIsOpen());

    $cartItems.innerHTML = '';
    if (cart.length === 0) {
      $cartEmpty.hidden = false;
      return;
    }
    $cartEmpty.hidden = true;
    cart.forEach((line) => {
      const cat = MENU_DATA[line.catId];
      const imgSrc = line.img && cat ? IMG_BASE + cat.folder + '/' + line.img : '';
      const row = document.createElement('div');
      row.className = 'cart-line';
      row.innerHTML = `
        ${imgSrc ? `<img class="cart-line__img" src="${imgSrc}" alt="">` : ''}
        <div class="cart-line__body">
          <p class="cart-line__name">${line.name}</p>
          ${line.variantLabel ? `<p class="cart-line__variant">${line.variantLabel}</p>` : ''}
          <p class="cart-line__price">${fmt(line.price * line.qty)}</p>
        </div>
        <div class="cart-line__qty">
          <button class="qty-btn" data-act="minus">−</button>
          <span class="cart-line__qty-num">${line.qty}</span>
          <button class="qty-btn" data-act="plus">+</button>
        </div>
        <button class="cart-line__remove" data-act="remove">✕</button>`;
      row.querySelector('[data-act="minus"]').addEventListener('click', () => changeQty(line.id, -1));
      row.querySelector('[data-act="plus"]').addEventListener('click', () => changeQty(line.id, 1));
      row.querySelector('[data-act="remove"]').addEventListener('click', () => removeLine(line.id));
      $cartItems.appendChild(row);
    });
  }

  function sheetIsOpen() { return $sheet.classList.contains('is-open'); }
  function openSheet() {
    $sheet.hidden = false;
    requestAnimationFrame(() => $sheet.classList.add('is-open'));
  }
  function closeSheet() {
    $sheet.classList.remove('is-open');
    setTimeout(() => { $sheet.hidden = true; renderCart(); }, 320);
  }

  $fabCart.addEventListener('click', openSheet);
  $btnCloseCart.addEventListener('click', closeSheet);
  $cartBackdrop.addEventListener('click', closeSheet);
  $btnClearCart.addEventListener('click', () => {
    if (cart.length === 0) return;
    if (confirm('¿Vaciar toda la cuenta?')) clearCart();
  });

  function bumpFab() {
    $fabCart.classList.remove('is-bump');
    // forzar reflow para reiniciar la animación
    void $fabCart.offsetWidth;
    $fabCart.classList.add('is-bump');
  }

  // -------------------- toast --------------------
  let toastTimer = null;
  function showToast(msg) {
    $toast.textContent = msg;
    $toast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => $toast.classList.remove('is-show'), 1400);
  }

  // -------------------- animación "+1" volando al carrito --------------------
  function flyToCart(sourceEl) {
    const start = sourceEl.getBoundingClientRect();
    const endRect = $fabCart.getBoundingClientRect();
    const fly = document.createElement('div');
    fly.className = 'fly';
    fly.textContent = '+1';
    fly.style.left = (start.left + start.width / 2 - 16) + 'px';
    fly.style.top = (start.top + start.height / 2 - 12) + 'px';
    document.body.appendChild(fly);

    const dx = (endRect.left + endRect.width / 2) - (start.left + start.width / 2);
    const dy = (endRect.top + endRect.height / 2) - (start.top + start.height / 2);

    requestAnimationFrame(() => {
      fly.style.transform = `translate(${dx}px, ${dy}px) scale(.5)`;
      fly.style.opacity = '0';
    });
    setTimeout(() => fly.remove(), 600);
  }

  // -------------------- splash --------------------
  function initSplash() {
    const MIN_TIME = 1300;
    const start = Date.now();
    const finish = () => {
      const elapsed = Date.now() - start;
      const wait = Math.max(0, MIN_TIME - elapsed);
      setTimeout(() => {
        $splash.classList.add('is-hidden');
        $app.hidden = false;
        setTimeout(() => $splash.remove(), 650);
      }, wait);
    };
    const bgImg = new Image();
    bgImg.onload = finish;
    bgImg.onerror = finish;
    bgImg.src = 'assets/inicio.png';
    // red de seguridad por si la imagen nunca dispara load/error
    setTimeout(finish, 2500);
  }

  // -------------------- init --------------------
  function init() {
    loadCart();
    renderHome();
    renderCart();
    initSplash();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
