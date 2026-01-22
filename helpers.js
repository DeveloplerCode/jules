
const validateEmail = (email) => {
    if (typeof email !== 'string') {
        return false;
    }
    // A common regex for email validation
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};



const validatePassword = (password) => {
    if (typeof password !== 'string') {
        return false;
    }
    // Minimo 6 caracteres, al menos una mayuscula, una minuscula y un numero
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return re.test(password);
};

module.exports = { validateEmail, validatePassword };