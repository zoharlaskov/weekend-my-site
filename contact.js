document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  let errors = false;

  // אימות שדות חובה
  if (!formData.get("name")) {
    alert("Please enter your name");
    errors = true;
  }

  if (!formData.get("email")) {
    alert("Please enter your email");
    errors = true;
  }

  if (!formData.get("message")) {
    alert("Please enter your message");
    errors = true;
  }

  // אימות כתובת דוא"ל תקינה
  const email = formData.get("email");
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    errors = true;
  }

  if (!errors) {
    // אין שגיאות - ניתן לשלוח את הטופס
    // כאן נוכל להוסיף לדוגמה קריאה לפונקציה שתשלח את הטופס לשרת
    alert("Form submitted successfully");
    // ניתן גם להפנות לעמוד תודה או לבצע פעולה נוספת
  }
});

// פונקציה לאימות כתובת דוא"ל
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
