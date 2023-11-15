const form = document.querySelector('form');
const successMessage = document.querySelector('.success');
const formSign = document.querySelector('.form-sign');
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    successMessage.classList.remove('hide');
    formSign.classList.add('hide');
    document.querySelector('.success-p').innerHTML=`<p>A confirmation email has been sent to <b>${email.value}</b>.
    Please open it and click the button inside to confirm your subscription.
  </p>`
});
function backToForm(params) {
    function reloadPage() {
        location.reload();
      }
      reloadPage()
    
}
