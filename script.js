function takeData() {             // Main function
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let a = moment(new Date(one)).twix(new Date(two))
    if (typeof(a.count("days")) === 'number') {
        document.querySelector('.gap').innerHTML = "Answer: " + a.count("days");
    }
   
}
console.clear();              // Просто так захотелось
$( "#one" ).datepicker();
$( "#two" ).datepicker();