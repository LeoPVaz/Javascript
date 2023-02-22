const defaultUser = {
    name: '',
    email: '',
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Anna',
    email: 'Anna123@gamil.com'
}

const adm1 = {
    ...defaultUser,
    name: 'Adão',
    email: 'AdãoADM@gamil.com',
    level: 2
}

console.log(adm1)