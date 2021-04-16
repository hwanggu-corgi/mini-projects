function updateRecurringType(checkbox) {
    const rrRecurring = document.getElementsByName("rr_recurring");
    var $ppForm = jQuery('#donateForm').closest('form');
    if (checkbox.checked === true) {
        rrRecurring[0].value = 'on';
    } else {
        rrRecurring[0].value = '';			
    }

    updateFee();
    $ppForm.mwPayment().updateRecurring();
}