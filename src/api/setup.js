
const domain = 'http://localhost:8000';
const login_url = `${domain}/rest-auth/login`
const register_url = `${domain}/rest-auth/registration`
const get_employees_url = `${domain}/api/employees`
const add_employee_url = `${domain}/api/employees/add`
export {
    domain,
    login_url,
    register_url,
    get_employees_url,
    add_employee_url
}