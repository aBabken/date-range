function takeData() {
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




















// let dateMinus = (first, second) => {
//     first = moment(first).format('YYYY-MM-DD');
//     second = moment(second).format('YYYY-MM-DD');
//     var itr = moment.twix(new Date(first), new Date(second)).iterate('date');
//     var range = [];
//     while(itr.hasNext()) {
//         range.push(itr.next().format('DD.MM.YYYY'));
//     }
//     return range;
// }
// console.log(dateMinus('10.10.2019', '04.10.2019'));