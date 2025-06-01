const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

populateForm();
form.addEventListener('input', onInputChange);
form.addEventListener('submit', onFormSubmit);

function onInputChange(e) {
  const { name, value } = e.target;
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  savedData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (!savedData) return;
  if (savedData.email) form.elements.email.value = savedData.email;
  if (savedData.message) form.elements.message.value = savedData.message;
}

function onFormSubmit(e) {
  e.preventDefault();
  const { email, message } = form.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const submittedData = {
    email: email.value.trim(),
    message: message.value.trim(),
  };

  console.log(submittedData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}
