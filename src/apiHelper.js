const url = "http://localhost:5000";


exports.getAllCharacters = () => {
    return fetch(`${url}/characters/get`)
      .then(res => res.json())
      .then(data => {
        // allCharacters = data.body
        // allCharacters.forEach(x => userIconObj[x.name] = x.icon)
        return data
      })
      .catch(err => console.log(err));
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
// }
