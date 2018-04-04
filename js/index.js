// function plus() {
//     const num1, num2;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1+num2;
//     document.getElementById('out').innerHTML = result;
// }
// function minus() {
//     const num1, num2;
//     num1 = document.getElementById('n1').value;
//     num1 = parseInt(num1);
//     num2 = document.getElementById('n2').value;
//     num2 = parseInt(num2);
//     result = num1-num2;
//     document.getElementById('out').innerHTML = result;
// }


function display(id){//функция вывода чисел на дисплей
    pole = document.calc.disp.value;
    if (value>0)
        {
            znach = value.toString()+id.toString();
            znach = Number(znach);
            document.calc.disp.value = znach;
        }