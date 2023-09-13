// 


// -------example no2
function getUsers(callback) {
    setTimeout(() => {
        callback([
            { username: 'john', email: 'john@test.com' },
            { username: 'jane', email: 'jane@test.com' },
        ]);
    }, 9000);
}

function findUser(username, callback) {
    getUsers((users) => {
        const user = users.find((user) => user.username === username);
        callback(user);
    });
}

findUser('jane', console.log);