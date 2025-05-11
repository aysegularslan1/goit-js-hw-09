const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

//localStorage verilerini forma yaz
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  try {
    const { email, message } = JSON.parse(savedData);
    form.elements.email.value = email || '';
    form.elements.message.value = message || '';
  } catch (error) {
    console.error('Veri parse edilemedi:', error);
  }
}

//her değişiklikte veriyi kaydet
form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

//formu gönder, konsola yaz, temizle
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  if (!formData.email || !formData.message) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  console.log('Form gönderildi:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
