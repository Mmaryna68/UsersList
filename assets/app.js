"use strict";
///cоздаем массив в которм будут храниться обьекты пользователей
const arrlistUser = [];

const containerUser = document.querySelector(".content");
const sendForm = document.querySelector(".form__btn");

//ипуты
const firstNameUser = document.querySelector("#first");
const lastNameUser = document.querySelector("#last");
const emailUser = document.querySelector("#email");
const form = document.querySelector("form");

//вешаем оброботчик события на кнопку отправить форму
sendForm.addEventListener("click", () => {
  //добовляет в массив обьект с пользователем
  pushArrUser();
  // отрисовывает масиив с обьектами на странице
  createListUserPage(arrlistUser);
  // чиcтит нашу форму
  form.reset();
});
/// собирает данные с инпутов и складывает их в обьект
function createObjUser() {
  return {
    firstNameUser: firstNameUser.value,
    lastNameUser: lastNameUser.value,
    emailUser: emailUser.value,
  };
}
/// вызывет полченный обьект из верхней функции и добавляет его в массив
function pushArrUser() {
  arrlistUser.push(createObjUser());
}
/// получает обьект и из его данных отрисовывает верстку
function createTemplate({ firstNameUser, lastNameUser, emailUser }) {
  const divPages = document.createElement("div");
  divPages.classList.add("item");
  const template = `<p>FIRSTNAMEUSER:${firstNameUser}</p><p>LASTNAMEUSER${lastNameUser}</p><p>EMAILUSER:${emailUser}</p>`;
  divPages.innerHTML = template;
  containerUser.append(divPages);
}
/// перебирает акутуальный массив и передает по очереди каждый обьект в функцию которая отрисовывает верстку
function createListUserPage(arr) {
  containerUser.innerHTML = "";
  arr.forEach((item) => createTemplate(item));
}
