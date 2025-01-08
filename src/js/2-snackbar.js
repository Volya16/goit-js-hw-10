const feedbackFormEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const fillFormFields = () => {
  try {
  const formDataFromLs = JSON.parse(localStorage.getItem('localStorageKey'));
  
  if (formDataFromLs === null) {
    return;
  }

  formData = formDataFromLs;

  for (const key in formDataFromLs) {
    feedbackFormEl.elements[key].value = formDataFromLs[key];
  }

} catch (error) {
  console.log(error);
}
}

fillFormFields();


const onFormFieldInput = (event) => {
  const { target: formFieldEl } = event;
  const { value: fieldValue, name: fieldName } = formFieldEl;
  formData[fieldName] = fieldValue.trim();
  
  localStorage.setItem('localStorageKey',JSON.stringify(formData));
};

const onFormSubmit = (event) => {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields!');
    return;
  }

  console.log(formData);

  feedbackFormEl.reset();
  localStorage.removeItem('localStorageKey');
}


feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);
