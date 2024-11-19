'use strict';

const dataList = [...document.querySelectorAll('li')];
const ul = document.querySelector('ul');

function stringToNum(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

function sortList(list) {
  list.sort(
    (a, b) => stringToNum(b.dataset.salary) - stringToNum(a.dataset.salary),
  );

  list.forEach((el) => ul.appendChild(el));
}

function getEmployees(list) {
  return list.map((el) => ({
    name: el.textContent,
    position: el.dataset.position,
    salary: el.dataset.salary,
    age: el.dataset.age,
  }));
}

sortList(dataList);
getEmployees(dataList);
