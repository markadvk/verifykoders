// Function to validate custom date format
function isValidDateFormat(date, format) {
  const dateRegex = format === "DD/MM/YYYY" ? /^\d{2}\/\d{2}\/\d{4}$/ : /^\d{4}\/\d{2}\/\d{2}$/;
  return dateRegex.test(date);
}

document.getElementById('submitBtn').addEventListener('click', function() {
  // Get the selected dates
  const basicDate = document.getElementById('basicDatePicker').value;
  const dateRange = document.getElementById('dateRangePicker').value;
  const customDate = document.getElementById('customDatePicker').value;
  const customDateWriter = document.getElementById('customDateWriter').value;

  // Validate the manually entered date
  const isCustomDateValid = isValidDateFormat(customDateWriter, "DD/MM/YYYY");

  // Display the results
  document.getElementById('basicDateResult').innerText = basicDate ? basicDate : 'No date selected';
  document.getElementById('dateRangeResult').innerText = dateRange ? dateRange : 'No range selected';
  document.getElementById('customDateResult').innerText = customDate ? customDate : 'No date selected';

  if (customDateWriter && isCustomDateValid) {
    document.getElementById('customDateWriterResult').innerText = customDateWriter;
  } else {
    document.getElementById('customDateWriterResult').innerText = 'Invalid date format (Expected DD/MM/YYYY)';
  }

  document.getElementById('calendarResults').style.display = 'block';
});

// Initialize the Date Range Picker with Flatpickr
flatpickr("#dateRangePicker", {
  mode: "range",
  dateFormat: "Y-m-d",
});

// Initialize the Custom Date Picker with Flatpickr
flatpickr("#customDatePicker", {
  dateFormat: "Y/m/d",
});
