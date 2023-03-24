const clearBtn = document.getElementById("clr-btn");
clearBtn.addEventListener("click", function() {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
});
