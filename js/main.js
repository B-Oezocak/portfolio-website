const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('change',function(){
  document.body.classList.toggle("dark-mode");
});