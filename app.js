
const result = document.getElementById("result")
const generate_password = document.getElementById("generate-btn")

const uppercase_checkbox = document.getElementById("uppercase-option")
const lowercase_checkbox = document.getElementById("lowercase-option")
const numbers_checkbox = document.getElementById("numbers-option")
const symbols_checkbox = document.getElementById("symbols-option")


function password_generator(password_length) {
  
  if (password_length > 0 && password_length <= 100) {
    
    let pattern = ""
    
    if (!uppercase_checkbox.checked && !lowercase_checkbox.checked &&
      !numbers_checkbox.checked && !symbols_checkbox.checked) {
      
      alert("🔴 Please choose an option")
    } else {
      
      if (uppercase_checkbox.checked) {
        pattern += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      
      if (lowercase_checkbox.checked) {
        pattern += "abcdefghijklmnopqrstuvwxyz"
      }
      
      if (numbers_checkbox.checked) {
        pattern += "0123456789"
      }
      
      if (symbols_checkbox.checked) {
        pattern += "~!@-#$_"
      }

      
      const password_maker = (
          length = password_length,
          chars = pattern
        ) => Array
        .from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => chars[x % chars.length])
        .join('')

      
      result.value = password_maker()

      
      navigator.clipboard.writeText(result.value);

      
      alert("🟢 A new password has been generated")
    }
  } else {
    
    alert("🔴 Invalid password length")
  }
}


generate_password.onclick = function() {
  
  const password_length = Number(document.getElementById("password-length").value)

  
  password_generator(password_length)
}
