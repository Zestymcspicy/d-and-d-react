// import CharacterContext from './CharacterContext.js';
const url = "http://localhost:5000";



exports.getAllCharacters = (signal, setFunction) => {
  // const abortController = new AbortController();
  // const signal = abortController.signal;


  fetch('http://localhost:5000/characters/get', {signal: signal})
  .then(res => res.json())
  .then(data => {
    console.log(data.body)
    return(data.body);
  })
  .catch(err => console.log(err))


  // return function cleanup() {
  //   abortController.abort()
  // }
}



  exports.userSignIn = (displayName, password) => {
    return fetch(`${url}/users/login/`, {
        method: "POST",
        body: `displayName=${displayName}&password=${password}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .catch(err => console.log(err))
      .then(res => res.json())
      .then(data => {
        if (data.success === true) {
          // user = data.user;
          // postAuthObj = {
          //   icon: user.icon,
          //   name: user.displayName,
          //   auth_id: user._id
          // console.log(data.user);
          return data.user;
          };
          // $("#sign-in-modal").modal("toggle");
          //basic setup on login
          // setForUser();
          // return false;
        // } else {
          // $("#signInAlert").text(data.message);
          // $("#signInAlert").removeAttr("hidden");
        // }
      });
  }

exports.addUser = (displayName, password, passwordMatch, email, err) => {
    return fetch(`${url}/users/create/`, {
        method: "POST",
        body: `displayName=${displayName}&password=${
        password
      }&email=${email}&passwordMatch=${passwordMatch}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.message === "success") {
          return data.user;
          // $("#sign-in-modal").modal("toggle");
          //basic setup on login
          // setForUser();
          // return false;
        } else {
          if (!data.displayName) {
            data.displayName = "";
          }
          if (!data.email) {
            data.email = "";
          }
          if (!data.password) {
            data.password = "";
          }
          if (!data.passwordMatch) {
            data.passwordMatch = "";
          }
          const errorMessage = `${data.displayName}
          ${data.email}
          ${data.password}
          ${data.passwordMatch}`;
          return errorMessage;
          // $("#signInAlert").text(errorMessage);
          // $("#signInAlert").removeAttr("hidden");
        }
      })
      .catch(err => console.log(err));
  }
