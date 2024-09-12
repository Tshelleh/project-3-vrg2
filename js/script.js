// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
var btns_copy=document.querySelectorAll(".btn-copy")
btns_copy.forEach(btn_copy=>{

    btn_copy.addEventListener('click', function() {
    
        alert("تم نسخ النص!")
       
            });
})