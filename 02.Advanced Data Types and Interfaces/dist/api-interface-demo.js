const API_URL = 'https://jsonplaceholder.typicode.com/users';
const getUsers = () => {
    fetch(API_URL, { method: 'GET' })
        .then(res => res.json())
        .then((users) => {
        users.forEach((user) => {
            console.log(user);
        });
    })
        .catch(err => {
        console.log(`Error: ${err}`);
    });
};
getUsers();
