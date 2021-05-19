var checkArr = [];
function validateForm() {
  var fnameErr =
    (lnameErr =
    emailErr =
    mobileErr =
    positionErr =
    companyErr =
    countryErr =
      true);
  var isValid = false;
  var regex = /^[a-zA-Z\s]+$/;
  var emailRegex =
    /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!hotmail.co.uk)(?!hotmail.fr)(?!msn.com)(?!yahoo.fr)(?!wanadoo.fr)(?!orange.fr)(?!comcast.net)(?!yahoo.co.uk)(?!yahoo.com.br)(?!yahoo.co.in)(?!live.com)(?!rediffmail.com)(?!free.fr)(?!gmx.de)(?!web.de)(?!yandex.ru)(?!ymail.com)(?!libero.it)(?!outlook.com)(?!uol.com.br)(?!bol.com.br)(?!mail.ru)(?!cox.net)(?!hotmail.it)(?!sbcglobal.net)(?!sfr.fr)(?!live.fr)(?!verizon.net)(?!live.co.uk)(?!googlemail.com)(?!yahoo.es)(?!ig.com.br)(?!live.nl)(?!bigpond.com)(?!terra.com.br)(?!yahoo.it)(?!neuf.fr)(?!yahoo.de)(?!alice.it)(?!rocketmail.com)(?!att.net)(?!laposte.net)(?!facebook.com)(?!bellsouth.net)(?!yahoo.in)(?!hotmail.es)(?!charter.net)(?!yahoo.ca)(?!yahoo.com.au)(?!rambler.ru)(?!hotmail.de)(?!tiscali.it)(?!shaw.ca)(?!yahoo.co.jp)(?!sky.com)(?!earthlink.net)(?!optonline.net)(?!freenet.de)(?!t-online.de)(?!aliceadsl.fr)(?!virgilio.it)(?!home.nl)(?!qq.com)(?!telenet.be)(?!me.com)(?!yahoo.com.ar)(?!tiscali.co.uk)(?!yahoo.com.mx)(?!voila.fr)(?!gmx.net)(?!mail.com)(?!planet.nl)(?!tin.it)(?!live.it)(?!ntlworld.com)(?!arcor.de)(?!yahoo.co.id)(?!frontiernet.net)(?!hetnet.nl)(?!live.com.au)(?!yahoo.com.sg)(?!zonnet.nl)(?!club-internet.fr)(?!juno.com)(?!optusnet.com.au)(?!blueyonder.co.uk)(?!bluewin.ch)(?!skynet.be)(?!sympatico.ca)(?!windstream.net)(?!mac.com)(?!centurytel.net)(?!chello.nl)(?!live.ca)(?!aim.com)(?!bigpond.net.au)([\w-]+\.)+[\w-]{2,4})?$/;
  var phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  var fname = document.getElementById("firstName").value;
  var lname = document.getElementById("lastName").value;
  var email = document.getElementById("businessEmail").value;
  email = email.toLowerCase();
  var phone = document.getElementById("phoneNumber").value;
  var position = document.getElementById("position").value;
  var company = document.getElementById("company").value;
  var country = document.getElementById("country").value;
  var defaultCountry = "Please select";
  var isChecked = document.getElementById("checkbox").checked;
  email = email.toLowerCase();

  //localStorage.setItem("token", email);

  if (fname.length < 1) {
    document.getElementById("error-fname").innerHTML =
      "First name cannot be empty";
  } else {
    if (regex.test(fname) === false) {
      document.getElementById("error-fname").innerHTML =
        "Please Enter Valid First Name";
    } else {
      document.getElementById("error-fname").innerHTML = " ";

      fnameErr = false;
    }
  }

  if (lname.length < 1) {
    document.getElementById("error-lname").innerHTML =
      "Last name cannot be empty";
  } else {
    if (regex.test(lname) === false) {
      document.getElementById("error-lname").innerHTML =
        " Please Enter Valid Last Name";
    } else {
      document.getElementById("error-lname").innerHTML = " ";

      lnameErr = false;
    }
  }

  if (email.length < 1) {
    document.getElementById("error-email").innerHTML = "Email cannot be empty";
  } else {
    if (emailRegex.test(email) === false) {
      document.getElementById("error-email").innerHTML =
        "Only business email allowed";
    } else {
      document.getElementById("error-email").innerHTML = " ";

      emailErr = false;
    }
  }

  if (country === defaultCountry) {
    document.getElementById("error-country").innerHTML =
      "Please select a country";
  } else {
    if (regex.test(country) === false) {
      document.getElementById("error-country").innerHTML =
        "Please select a country";
    } else {
      document.getElementById("error-country").innerHTML = " ";
      countryErr = false;
    }
  }

  if (phone.length < 1) {
    document.getElementById("error-phone").innerHTML =
      "Phone number cannot be empty";
  } else {
    if (phoneRegex.test(phone) === false) {
      document.getElementById("error-phone").innerHTML = "Invalid phone number";
    } else {
      document.getElementById("error-phone").innerHTML = " ";

      mobileErr = false;
    }
  }

  if (position.length < 1) {
    document.getElementById("error-position").innerHTML =
      "Designation cannot be empty";
  } else {
    if (regex.test(position) === false) {
      document.getElementById("error-position").innerHTML =
        "Only alphabets allowed";
    } else {
      document.getElementById("error-position").innerHTML = " ";

      positionErr = false;
    }
  }

  if (company.length < 1) {
    document.getElementById("error-company").innerHTML =
      "Company name cannot be empty";
  } else {
    if (regex.test(company) === false) {
      document.getElementById("error-company").innerHTML =
        "Only alphabets allowed";
    } else {
      document.getElementById("error-company").innerHTML = " ";

      companyErr = false;
    }
  }

  if (!isChecked) {
    document.getElementById("error-checkbox").innerHTML =
      "Please select terms and conditions.";
  } else {
    document.getElementById("error-checkbox").innerHTML = "";
  }

  if (
    (fnameErr ||
      lnameErr ||
      emailErr ||
      mobileErr ||
      positionErr ||
      companyErr ||
      countryErr ||
      !isChecked) == false
  ) {
    isValid = true;
  }

  if (isValid == true) {
    $.ajax({
      url: "https://api.apispreadsheets.com/data/12609/",
      type: "post",
      data: $("#registrationForm").serializeArray(),
      success: function () {
        if (isValid == true) {
          document.getElementById("registrationForm").reset();
          window.location.href = "../Html/successPage.html";
        }
      },
      error: function () {
        alert("There was an error :(");
      },
    });
  }
}

function verifyLogin() {
  var emailRegex =
    /^([\w-\.]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!hotmail.co.uk)(?!hotmail.fr)(?!msn.com)(?!yahoo.fr)(?!wanadoo.fr)(?!orange.fr)(?!comcast.net)(?!yahoo.co.uk)(?!yahoo.com.br)(?!yahoo.co.in)(?!live.com)(?!rediffmail.com)(?!free.fr)(?!gmx.de)(?!web.de)(?!yandex.ru)(?!ymail.com)(?!libero.it)(?!outlook.com)(?!uol.com.br)(?!bol.com.br)(?!mail.ru)(?!cox.net)(?!hotmail.it)(?!sbcglobal.net)(?!sfr.fr)(?!live.fr)(?!verizon.net)(?!live.co.uk)(?!googlemail.com)(?!yahoo.es)(?!ig.com.br)(?!live.nl)(?!bigpond.com)(?!terra.com.br)(?!yahoo.it)(?!neuf.fr)(?!yahoo.de)(?!alice.it)(?!rocketmail.com)(?!att.net)(?!laposte.net)(?!facebook.com)(?!bellsouth.net)(?!yahoo.in)(?!hotmail.es)(?!charter.net)(?!yahoo.ca)(?!yahoo.com.au)(?!rambler.ru)(?!hotmail.de)(?!tiscali.it)(?!shaw.ca)(?!yahoo.co.jp)(?!sky.com)(?!earthlink.net)(?!optonline.net)(?!freenet.de)(?!t-online.de)(?!aliceadsl.fr)(?!virgilio.it)(?!home.nl)(?!qq.com)(?!telenet.be)(?!me.com)(?!yahoo.com.ar)(?!tiscali.co.uk)(?!yahoo.com.mx)(?!voila.fr)(?!gmx.net)(?!mail.com)(?!planet.nl)(?!tin.it)(?!live.it)(?!ntlworld.com)(?!arcor.de)(?!yahoo.co.id)(?!frontiernet.net)(?!hetnet.nl)(?!live.com.au)(?!yahoo.com.sg)(?!zonnet.nl)(?!club-internet.fr)(?!juno.com)(?!optusnet.com.au)(?!blueyonder.co.uk)(?!bluewin.ch)(?!skynet.be)(?!sympatico.ca)(?!windstream.net)(?!mac.com)(?!centurytel.net)(?!chello.nl)(?!live.ca)(?!aim.com)(?!bigpond.net.au)([\w-]+\.)+[\w-]{2,4})?$/;
  var passwordRegex = new RegExp(
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/
  );
  var Loginemail = document.getElementById("LoginbusinessEmail").value;
  var LoginPassword = document.getElementById("LoginPassword").value;
  var businessEmailErr = (loginPasswordErr = false);
  Loginemail = Loginemail.toLowerCase();

  if (Loginemail.length < 1) {
    document.getElementById("error-LoginEmail").innerHTML =
      "Email cannot be empty";
  } else {
    if (emailRegex.test(Loginemail) === false) {
      document.getElementById("error-LoginEmail").innerHTML =
        "Only business email allowed";
    } else {
      document.getElementById("error-LoginEmail").innerHTML = " ";
      businessEmailErr = true;
    }
  }

  if (LoginPassword.length < 1) {
    document.getElementById("error-LoginPassword").innerHTML =
      "Password cannot be empty";
  } else {
    if (passwordRegex.test(LoginPassword) === false) {
      document.getElementById("error-LoginPassword").innerHTML =
        "Invalid password. Try entering a valid password";
    } else {
      document.getElementById("error-LoginPassword").innerHTML = "";
      loginPasswordErr = true;
    }
  }

  // console.log(businessEmailErr, loginPasswordErr, isValidUser);
  if ((businessEmailErr && loginPasswordErr) === true) {
    localStorage.setItem("email", Loginemail);
    localStorage.setItem("password", LoginPassword);
    fetch("https://api.apispreadsheets.com/data/12609/").then((res) => {
      if (res.status === 200) {
        // SUCCESS
        res
          .json()
          .then((data) => {
            const yourData = data;
            const dataArray = Object.entries(yourData);
            dataArray.forEach(([key, value]) => {
              value.map((item) => {
                if (
                  Loginemail === item.businessEmail &&
                  LoginPassword === item.password
                ) {
                  document.getElementById("error-LoginPassword").innerHTML =
                    " ";
                  loginPasswordErr = businessEmailErr = true;
                  localStorage.setItem("email", Loginemail);
                  localStorage.setItem("password", LoginPassword);
                  sessionStorage.setItem(
                    "AuthenticationState",
                    "Authenticated"
                  );
                  if (sessionStorage.getItem("AuthenticationState") === null) {
                    document.getElementById("loginForm").reset();
                    window.location.href = "../Html/index.html";
                  } else {
                    document.getElementById("loginForm").reset();
                    window.location.href = "../Html/userPage.html";
                  }
                }
                if (
                  Loginemail !== item.businessEmail ||
                  LoginPassword !== item.password
                ) {
                  document.getElementById("error-LoginPassword").innerHTML =
                    "Invalid email or password. Please try again.";
                  loginPasswordErr = businessEmailErr = false;
                }
              });
            });
          })
          .catch((err) => console.log(err));
      } else {
        // ERROR
      }
    });
  }
}

function routeBack() {
  window.location.href = "../Html/index.html";
  localStorage.clear();
  sessionStorage.clear();
}

function logout() {
  localStorage.clear();
  sessionStorage.clear();
  routeBack();
}

function giveCustomLink() {
  var emailToken = localStorage.getItem("email");
  var passwordToken = localStorage.getItem("password");
  fetch("https://api.apispreadsheets.com/data/12609/").then((res) => {
    if (res.status === 200) {
      // SUCCESS
      res
        .json()
        .then((data) => {
          const yourData = data;
          const dataArray = Object.entries(yourData);
          dataArray.forEach(([key, value]) => {
            value.map((item) => {
              if (sessionStorage.getItem("AuthenticationState") === null) {
                window.location.href = "../Html/index.html";
              }
              if (sessionStorage.getItem("AuthenticationState") !== null) {
                if (
                  emailToken === item.businessEmail &&
                  passwordToken === item.password
                ) {
                  console.log("its here");
                  console.log(item.customLink);
                  document.getElementById("customLink").innerHTML =
                    item.customLink;
                }
              }
            });
          });
        })
        .catch((err) => console.log(err));
    } else {
      // ERROR
    }
  });
}
