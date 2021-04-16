function updateRecurringType(checkbox) {
    const rrRecurring = document.getElementsByName("rr_recurring");
    if (checkbox.checked === true) {
        rrRecurring[0].value = 'on';
    } else {
        rrRecurring[0].value = '';			
    }
}