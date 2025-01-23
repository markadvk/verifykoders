document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the selected dates
    const basicDate = document.getElementById('basicDatePicker').value;
    const dateRange = document.getElementById('dateRangePicker').value;
    const customDate = document.getElementById('customDatePicker').value;
  
    // Display the results
    document.getElementById('basicDateResult').innerText = basicDate ? basicDate : 'No date selected';
    document.getElementById('dateRangeResult').innerText = dateRange ? dateRange : 'No range selected';
    document.getElementById('customDateResult').innerText = customDate ? customDate : 'No date selected';
  
    document.getElementById('calendarResults').style.display = 'block';
  });
  
  // Initialize the Date Range Picker with Flatpickr (example library)
  flatpickr("#dateRangePicker", {
    mode: "range",
    dateFormat: "Y-m-d"
  });
  
  // Initialize the Custom Date Picker with Flatpickr
  flatpickr("#customDatePicker", {
    dateFormat: "Y/m/d"
  });
  