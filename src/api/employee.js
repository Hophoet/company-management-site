import { get_employees_url,  delete_employee_url,
         add_employee_url, update_employee_url } from './setup'


function getEmployees(authToken){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 	"+authToken); 
    myHeaders.append("Cookie", "messages=\"[[\\\"__json_message\\\"\\0540\\05425\\054\\\"Successfully signed in as test1.\\\"]]:1lQoad:J14TtrmfGc4_A8x1trPMMK67ZY60HVCA7gmo5pjG2jQ\"; csrftoken=sPoaHZWcbupywrMAmM20ODuPdBjiASsz77Oleh01NhWPcyEclCBLBvoEMXecJvQ4; sessionid=ryctcyd7m3hutocdrugy409yueejqcfk");
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    let status_code = 0;
    fetch(get_employees_url, requestOptions)
        .then(response => {
            //status_code = response.status;
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

function addEmployee(authToken, username, password, salary, picture){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("salary", salary);
    formdata.append("picture", picture);
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



function updateEmployee(authToken, employee_id, username, salary, picture){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("employee_id", employee_id);
    formdata.append("username", username);
    formdata.append("salary", salary);
    formdata.append("picture", picture, 'pic');

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



function deleteEmployee(authToken, employee_id){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("employee_id", employee_id);

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body:formdata,
      redirect: 'follow'
    };

    let status_code = 0;
    fetch(delete_employee_url, requestOptions)
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



export {
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
}