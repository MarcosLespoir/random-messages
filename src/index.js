const messages = [
    'Juan',
    'Marcos',
    'Candela',
    'Abigail',
    'Benjamin',
    'Jeremias',
    'Laura',
    'Marcelo'
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };