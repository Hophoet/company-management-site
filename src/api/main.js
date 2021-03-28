import { get_employees_url } from './setup'


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
