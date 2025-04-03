if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initScript);
} else {
  initScript();
}

function initScript() {
  console.log("JavaScript Loaded with async!"); //did this for debugging

  const phoneInput = document.getElementById("phone");

  if (!phoneInput) {
    console.error("Phone input field not found!");
    return;
  }

  phoneInput.addEventListener("input", function () {
    let numbers = phoneInput.value.replace(/\D/g, "");
    let formattedNumber = "";

    if (numbers.length > 0) {
      formattedNumber = `(${numbers.substring(0, 3)}`;
    }
    if (numbers.length >= 4) {
      formattedNumber += `) ${numbers.substring(3, 6)}`;
    }
    if (numbers.length >= 7) {
      formattedNumber += `-${numbers.substring(6, 10)}`;
    }

    phoneInput.value = formattedNumber;
  });

  phoneInput.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      return;
    }
    const numbers = phoneInput.value.replace(/\D/g, "");
    if (numbers.length >= 10) {
      event.preventDefault();
    }
  });
}
