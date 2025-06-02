
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('lengthValue');
    const passwordField = document.getElementById('password');
    const copy = document.getElementById("copy-btn")

    function updateLength(value) {
      lengthValue.textContent = value;
    }

    function changeLength(data) {
      let newValue = parseInt(lengthSlider.value) + data;
      if (newValue >= 4 && newValue <= 30) {
        lengthSlider.value = newValue;
        updateLength(newValue);
      }
    }

    function generatePassword() {
      const length = parseInt(lengthSlider.value);
      const useUpper = document.getElementById('uppercase').checked;
      const useLower = document.getElementById('lowercase').checked;
      const useNumber = document.getElementById('numbers').checked;
      const useSymbol = document.getElementById('symbols').checked;

      let chars = '';
      if (useUpper) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (useLower) chars += 'abcdefghijklmnopqrstuvwxyz';
      if (useNumber) chars += '0123456789';
      if (useSymbol) chars += '!@#$%^&*()_+~';
    

      if (chars.length === 0) {
        passwordField.value = '';
        passwordField.innerText = "please click to generate"
        copy.innerText = "password field is empty"
        return;
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
      }

      passwordField.value = password;
    }

    function copyPassword() {
      navigator.clipboard.writeText(passwordField.value);
    }

    // Set initial state
    updateLength(lengthSlider.value);
    generatePassword();

function myFunction() {
  let nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}