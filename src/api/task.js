import { add_task_url, update_task_url } from './setup';

function addTask(authToken, employee_id, title, description, deadline){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("employee_id", employee_id);
    formdata.append("deadline", deadline);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body:formdata,
      redirect: 'follow'
    };
    fetch(add_employee_url, requestOptions)
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



function updateTask(authToken, task_id, title, description, deadline){
   return new Promise( (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sessionid=bc2iakrk8931d7vuemt4zokzh8mtwy7clq; csrftoken=nljayGbkE6SoP9XjdkfPwvIRDWGrfJbypkiOZnWsJs8VznBw9EuN6UCr18pzOXh4mDq9");
    myHeaders.append("Authorization", "Token 	"+authToken); 

    var formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("task_id", task_id);
    formdata.append("deadline", deadline);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body:formdata,
      redirect: 'follow'
    };

    fetch(update_task_url, requestOptions)
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




