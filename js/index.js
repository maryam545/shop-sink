var tooltipTriggerList = [].slice.call( document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggeeEl) {
  return new bootstrap.Tooltip(tooltipTriggeeEl)
});