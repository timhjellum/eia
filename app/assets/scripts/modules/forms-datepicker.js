class DatePicker {
  constructor() {
    //console.log('date picker found');
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        //document.write(today);

        var dateControl = document.querySelector('input[type="date"]');
        dateControl.value = today;

    }
}
export default DatePicker;