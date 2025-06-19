const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const messageTextarea = form.elements.message;
const formData = {
  email: '',
  message: '',
};

const emailInput = form.elements.email;
emailInput.addEventListener('focus', () => {
  emailInput.placeholder = 'Enter your email';
});

const savedData = localStorage.getItem(FORM_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  emailInput.value = formData.email || '';
  messageTextarea.value = formData.message || '';
}

const onFormFieldChange = event => {
  const { name, value } = event.target;
  formData[name] = value.trim()
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(FORM_KEY);
  formData = { email: "", message: "" };
  form.reset();
};

form.addEventListener('input', onFormFieldChange);
form.addEventListener('submit', onFeedbackFormSubmit);