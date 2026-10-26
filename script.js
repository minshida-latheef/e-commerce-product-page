// Context State Tracker Engine variables
let currentCartQuantity = 0;

// Gather DOM Node Target pointers
const mainProductImg = document.getElementById('main-product-img');
const galleryThumbs = document.querySelectorAll('.thumb');
const colorDots = document.querySelectorAll('.color-dot');
const colorLabel = document.getElementById('color-label');
const priceDisplay = document.getElementById('price-display');

const qtyInput = document.getElementById('qty-input');
const qtyMinusBtn = document.getElementById('qty-minus');
const qtyPlusBtn = document.getElementById('qty-plus');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const cartCountBadge = document.getElementById('cart-count');

const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const protectionPlanBtns = document.querySelectorAll('.size-selector .size-btn');

/* 1. Image Thumbnail Switcher Mechanics */
galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', (e) => {
        // Drop current active visual indicators classes
        document.querySelector('.thumb.active').classList.remove('active');
        // Map target values to display
        e.target.classList.add('active');
        mainProductImg.src = e.target.src;
    });
});

/* 2. Color Variant Picker Engine Mapping Operations */
colorDots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        document.querySelector('.color-dot.active').classList.remove('active');
        e.target.classList.add('active');

        // Extract metadata attributes bound out of DOM element nodes
        const selectedColorName = e.target.getAttribute('data-color');
        const selectedColorPrice = e.target.getAttribute('data-price');
        const selectedColorImg = e.target.getAttribute('data-img');

        // Update textual UI contexts properties
        colorLabel.innerText = selectedColorName;
        priceDisplay.innerText = `$${selectedColorPrice}`;
        mainProductImg.src = selectedColorImg;

        // Automatically set the main thumbnail index view sync tracking points
        document.querySelector('.thumb.active').classList.remove('active');
        galleryThumbs[0].src = selectedColorImg;
        galleryThumbs[0].classList.add('active');
    });
});

/* 3. Protection Plan Toggle Toggles */
protectionPlanBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.size-selector .size-btn.active').classList.remove('active');
        e.target.classList.add('active');
    });
});

/* 4. Quantity Increment Matrix Controls */
qtyPlusBtn.addEventListener('click', () => {
    let currentVal = parseInt(qtyInput.value);
    if (currentVal < parseInt(qtyInput.max)) {
        qtyInput.value = currentVal + 1;
    }
});

qtyMinusBtn.addEventListener('click', () => {
    let currentVal = parseInt(qtyInput.value);
    if (currentVal > parseInt(qtyInput.min)) {
        qtyInput.value = currentVal - 1;
    }
});

/* 5. Add To Cart Animation Trigger Event Mapping */
addToCartBtn.addEventListener('click', () => {
    const purchaseAmount = parseInt(qtyInput.value);
    currentCartQuantity += purchaseAmount;

    // Apply scaling animation visual feedback flags to navbar bag icon structure
    cartCountBadge.innerText = currentCartQuantity;
    cartCountBadge.style.transform = 'scale(1.3)';
    
    // Provide user validation alert overlay notification checks
    setTimeout(() => {
        cartCountBadge.style.transform = 'scale(1)';
    }, 200);

    alert(`Successfully added (${purchaseAmount}) item(s) to your shopping bag!`);
    // Restore quantity choice field value cleanly to single base baseline options
    qtyInput.value = 1;
});

/* 6. Technical Layout Tab Content Transition Switches */
tabLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetTabId = e.target.getAttribute('data-tab');

        // Reset tracking visibility matrix blocks states values styles classes
        document.querySelector('.tab-link.active').classList.remove('active');
        document.querySelector('.tab-content.active').classList.remove('active');

        // Set matching chosen view elements visible dynamically
        e.target.classList.add('active');
        document.getElementById(targetTabId).classList.add('active');
    });
});
