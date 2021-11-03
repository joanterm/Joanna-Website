// FORMSPREE DEFAULT CODE TO SUBMIT FORM THROUGH THEIR SERVER

let form = document.getElementById("form-collector");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thank you for reaching out. Your request was sent successfully.";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form."
  });
}
form.addEventListener("submit", handleSubmit)