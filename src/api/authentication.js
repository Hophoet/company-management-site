import {get_authenticated_user_url, login_url, register_url, is_admin_url} from './setup';

function login(username, password){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    
    //myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('Accept', 'application/json');
    //myHeaders.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    //myHeaders.append('Origin','http://localhost:3000');


    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };
    fetch(login_url, requestOptions)
        .then(response => {
            let status_code = response.status;
            return response.json();
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })

   })
}

function isAdmin(authToken){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(is_admin_url, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })

   })
}

function getAuthenticatedUser(authToken){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };
    fetch(get_authenticated_user_url, requestOptions)
        .then(response => {
            return response.json();
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })

   })
}

function register(username, password){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password1", password);
    formdata.append("password2", password);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(register_url, requestOptions)
        .then(response => {
            let status_code = response.status;
            return response.json();
        })
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        })

   })
}


export {
    login,
    register,
    isAdmin,
    getAuthenticatedUser
}