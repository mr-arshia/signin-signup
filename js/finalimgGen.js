// انتخاب عناصر
const imageContainer = document.querySelector('.imgbox2');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

// باز کردن مدال وقتی روی عکس کلیک می‌شه
imageContainer.addEventListener('click', () => {
  modal.style.display = 'flex'; // مدال رو نمایش می‌دیم
  modalImage.src = imageContainer.querySelector('img').src; // عکس رو به مدال منتقل می‌کنیم
});

// بستن مدال وقتی روی دکمه بستن کلیک می‌شه
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'; // مدال رو مخفی می‌کنیم
});

//*--------------------*//

const dropdownToggle = document.querySelector('.dropdown-toggle');
const promptsList = document.querySelector('.prompts-list');

dropdownToggle.addEventListener('click', () => {
  promptsList.classList.toggle('open'); // باز و بسته کردن لیست
});

//*--------------------*//

// انتخاب عناصر
const dimensionButtons = document.querySelectorAll('.dimension-btn');
// تغییر سایز تصویر
dimensionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const ratio = button.getAttribute('data-ratio'); // نسبت انتخاب‌شده
        console.log('سایز انتخاب شده:', ratio);
        // اینجا می‌تونید سایز تصویر رو تنظیم کنید
    });
});

//*--------------------*//

// انتخاب تکست‌اریا
const textarea = document.getElementById('prompt-textarea');

// انتخاب دکمه‌های پرامپت
const promptButtons = document.querySelectorAll('.prompt-btn');

// اضافه کردن متن پرامپت به تکست‌اریا
promptButtons.forEach(button => {
  button.addEventListener('click', () => {
    const promptText = button.textContent; // متن پرامپت
    textarea.value = promptText; // انتقال متن به تکست‌اریا
  });
});

//*--------------------*//


const countButtons = document.querySelectorAll('.count-btn');

countButtons.forEach(button => {
  button.addEventListener('click', () => {
    // حذف کلاس active از همه دکمه‌ها
    countButtons.forEach(btn => btn.classList.remove('active'));
    
    // اضافه کردن کلاس active به دکمه انتخاب‌شده
    button.classList.add('active');
    
    // دریافت تعداد انتخاب‌شده
    const selectedCount = button.getAttribute('data-count');
    console.log('تعداد عکس‌های انتخاب‌شده:', selectedCount);
  });
});

//*--------------------*//

const historyActionButtons = document.querySelectorAll('.history-action-btn');

historyActionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const thumbnail = button.closest('.history-item').querySelector('.history-thumbnail');
    const imageUrl = thumbnail.src; // آدرس عکس کوچک
    console.log('عکس انتخاب شده:', imageUrl);
    // اینجا می‌تونید عکس رو به صورت بزرگ‌تر نمایش بدید
  });
});