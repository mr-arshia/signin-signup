function showPasswordField() {
  
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const message = document.getElementById('message');
  
  // Reset errors
  nameInput.classList.remove('error');
  phoneInput.classList.remove('error');
  
  // Validate inputs
  let valid = true;
  if (!nameInput.value.trim()) {
    nameInput.classList.add('error');
    valid = false;
  }
  if (!phoneInput.value.trim()) {
    phoneInput.classList.add('error');
    valid = false;
  }
}
  function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const lengthCriteria = document.getElementById('length-criteria');
    const uppercaseCriteria = document.getElementById('uppercase-criteria');
    const lowercaseCriteria = document.getElementById('lowercaseCriteria');
    const numberCriteria = document.getElementById('number-criteria');

    if (password.length > 8) {
      lengthCriteria.style.color = 'green';
    } else {
      lengthCriteria.style.color = 'red';
    }
  
    if (/[A-Z]/.test(password)) {
      uppercaseCriteria.style.color = 'green';
    } else {
      uppercaseCriteria.style.color = 'red';
    }

    if (/[a-z]/.test(password)) {
      lowercaseCriteria.style.color = 'green';
    } else {
      lowercaseCriteria.style.color = 'red';
    }
  
    if (/\d/.test(password)) {
      numberCriteria.style.color = 'green';
    } else {
      numberCriteria.style.color = 'red';
    }
  }
  