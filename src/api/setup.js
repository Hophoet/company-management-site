
const domain = 'http://localhost:8000';
// Authentication
const login_url = `${domain}/rest-auth/login`
const register_url = `${domain}/rest-auth/registration`
// Employees management
const get_employees_url = `${domain}/api/employees`
const add_employee_url = `${domain}/api/employees/add`
const update_employee_url = `${domain}/api/employees/update`
const delete_employee_url = `${domain}/api/employees/delete`
// Tasks management
const add_task_url = `${domain}/api/tasks/add`
const update_task_url = `${domain}/api/tasks/update`


export {
    domain,
    login_url,
    register_url,
    get_employees_url,
    add_employee_url,
    update_employee_url,
    delete_employee_url,
    add_task_url,
    update_task_url
}