const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    test: function() {
        console.log('test');
    }
};

options.test();

console.log(Object.keys(options).length);

for (let key in options) {
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]) {
            console.log(`key: ${i} has: ${options[key][i]}`);
        }
    } else {
        console.log(`key: ${key} has: ${options[key]}`);
    }
}
