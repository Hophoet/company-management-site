
const domain = 'https://companymanagementapi.herokuapp.com'//https:companymanagementapi.herokuapp.com';

// Authentication
const login_url = `${domain}/auth/login/`
const get_authenticated_user_url = `${domain}/api/user/`
const register_url = `${domain}/register`
const is_admin_url = `${domain}/api/is-admin/`


// Employees management
const get_employees_url = `${domain}/api/employees`
const add_employee_url = `${domain}/api/employees/add`
const update_employee_url = `${domain}/api/employees/update`
const delete_employee_url = `${domain}/api/employees/delete`

// Tasks management
const get_tasks_url = `${domain}/api/tasks`
const get_employee_tasks_url = `${domain}/api/employee/tasks`
const add_task_url = `${domain}/api/tasks/add`
const update_task_url = `${domain}/api/tasks/update`
const delete_task_url = `${domain}/api/tasks/delete`

export {
    domain,
    login_url,
    register_url,
    get_employees_url,
    add_employee_url,
    update_employee_url,
    delete_employee_url,
    get_tasks_url,
    add_task_url,
    update_task_url,
    delete_task_url,
    is_admin_url,
    get_employee_tasks_url,
    get_authenticated_user_url
}