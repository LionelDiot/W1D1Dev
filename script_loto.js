const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (firstname ==='') {
  const errorMsg = document.createElement("div");
    errorMsg.textContent = "Tu n'as pas de prénom";
    document.body.appendChild(errorMsg);
    return ;
  }

  if (lastname === '') {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = "Tu n'as pas de nom";
    document.body.appendChild(errorMsg);
    return ;
  }

  if (!email.match(/^[a-zA-Z0-9._-]{8,30}@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,3}$/) && !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.[a-zA-Z]{2,3}$/)) {
    const errorMsg = document.createElement("div");
    errorMsg.textContent = "Invalid email address";
    document.body.appendChild(errorMsg);
    return;
  }
  
  if (!lotoNumbers.match) {
    
  }
}