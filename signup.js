let name1 = document.querySelector('#name');
let email1 = document.querySelector('#email');
let phonenumber1 = document.querySelector('#phonenumber');
let pwd1 = document.querySelector('#pwd');
let btnsubmit = document.querySelector('#btnsubmit');


btnsubmit.addEventListener('click', (e) => {
  e.preventDefault();

  let name = name1.value;
  let email = email1.value;
  let phonenumber = phonenumber1.value;
  let pwd = pwd1.value;

  let obj = {
    name: name,
    email: email,
    phonenumber: phonenumber,
    pwd: pwd
  };

  axios
    .post("http://localhost:3000/user/register", obj)
    .then((result) => {
      if (result.data.suc == true) {
        alert("sign up  completed ! please login into your account");
        name1.value = "";
        email1.value = "";
        phonenumber1.value = "";
        pwd1.value = "";
      } else {
        if (
          result.data.fail == true) {
          alert(result.data.msg);
        }
        if (result.data.failed == true) {
          alert(result.data.msg);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
})