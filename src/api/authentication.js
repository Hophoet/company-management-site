import {domain, login_url} from './setup';

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


export {
    login 
}