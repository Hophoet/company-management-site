import {domain, login_url, register_url} from './setup';

function login(username, password){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    
    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(login_url, requestOptions)
        .then(response => {
            console.log('yep')
            let status_code = response.status;
            console.log(response)
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
            console.log(response)
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
    login 
}