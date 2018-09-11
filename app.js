const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

let comand = '';

function runCommand(e){
e.preventDefault();


if (comand === 'print') {
  let htmlStr = '';
  for (i = 0; i < employeeList.length; i++) {
    htmlStr += `<p> ${employeeList[i].name}</p>`;
    htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
    htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
  }
  render(htmlStr);
}



if (comand === 'verify') {

  let message = 'Employee not Found';
  for (i = 0; i < employeeList.length; i++) {
    if ($('#check').val() === employeeList[i].name.toLowerCase()) {
      message = 'Employee Found';
    }
  }
  render(message);
}



if (comand === 'lookUp') {
  
  for (i = 0; i < employeeList.length; i++) {
    if ($('#look').val() === employeeList[i].name.toLowerCase()) {
      render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
    }
  }
}


if (comand === 'contains') {
  const verifyInfo = $('#contain').val();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(verifyInfo)) {
      render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
    }
  }
}



if (comand.toLowerCase() === 'update') {
const employeeName = $('#upd').val()
const updateInfo = $('#update').val();
if (updateInfo.toLowerCase() === 'officeNum') {
  const newOffice = $('#update').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === employeeName.toLowerCase()) {
      employeeList[i].officeNum = newOffice;
      render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
    }
  }
} else if (updateInfo.toLowerCase() === 'phoneNum'.toLowerCase()) {
  const newPhone = $('#updates').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase() === employeeName.toLowerCase()) {
      employeeList[i].phoneNum = newPhone
      render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
    }
  }
} else {
  render(noField);
}
}


if (comand === 'add') {
let newName =  $('#ad').val();
let newOffice =  $('#addd').val();
let newTele =  $('#adds').val();
const newEmployee = {
  name: newName,
  officeNum: newOffice,
  phoneNum: newTele
}
employeeList.push(newEmployee);
for (let i = 0; i < employeeList.length; i++) {
  render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
}

}

if (comand === 'delete') {
let nameDel =  $('#dele').val();

for (let i = 0; i < employeeList.length; i++) {
  if (employeeList[i].name.toLowerCase() === nameDel.toLowerCase()) {
    employeeList.splice(i, 1);
  }
}
for (let i = 0; i < employeeList.length; i++) {
  render(`${employeeList[i].name} ${employeeList[i].officeNum} ${employeeList[i].phoneNum}`);
}
}
}

function render(htmlStr){
$('#display').html(htmlStr);
}

function print(event) {

  comand = 'print';
  runCommand(event);

}
function verify(event) {
  
  comand = 'verify';
  runCommand(event);
}
function showVerify (event){
  $('#first').removeClass('inputf');
}


function lookUp(event) {
  comand = 'lookUp'
  runCommand(event);
}
function showLookUp (event){
  $('#second').removeClass('inputf')
}

function contains(event) {
  comand = 'contains';
  runCommand(event);
}
function showContains (event){
  $('#third').removeClass('inputf');
}

function update(event) {
  comand = 'update';
  runCommand(event);
}
function showUpdate (event){
  $('#fourth').removeClass('inputf');
}

function add(event) {
  comand = 'add';
  runCommand(event);
}
function showAdd (event){
  $('#fifth').removeClass('inputf');
}

function deletes(event) {
  comand = 'delete';
  runCommand(event);
}
function showDelete (event){
  $('#sixth').removeClass('inputf');
}





$('#print').on('click', print);
$('#verify').on('click', showVerify);
$('#renders').on('click', verify);
$('#lookUp').on('click', showLookUp);
$('#lup').on('click', lookUp);
$('#contains').on('click', showContains);
$('#has').on('click', contains);
$('#update').on('click', showUpdate);
$('#up').on('click', update);
$('#add').on('click', showAdd);
$('#addition').on('click', add);
$('#delete').on('click', showDelete);
$('#remove').on('click', deletes);


