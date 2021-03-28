import { get_employees_url, add_employee_url, update_employee_url } from './setup'


function getEmployees(authToken){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    let status_code = 0;
    fetch(get_employees_url, requestOptions)
        .then(response => {
            status_code = response.status;
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

function addEmployee(authToken, username, password, salary, pictureName){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("salary", salary);
    formdata.append("picture", fileInput.files[0], pictureName);
    formdata.append("password", password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:formdata,
      redirect: 'follow'
    };
    let status_code = 0;
    fetch(add_employee_url, requestOptions)
        .then(response => {
            status_code = response.status;
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



function updateEmployee(authToken, employee_id, username, salary, pictureName){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("employee_id", employee_id);
    formdata.append("username", username);
    formdata.append("salary", salary);
    formdata.append("picture", fileInput.files[0], pictureName);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:formdata,
      redirect: 'follow'
    };

    let status_code = 0;
    fetch(update_employee_url, requestOptions)
        .then(response => {
            status_code = response.status;
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