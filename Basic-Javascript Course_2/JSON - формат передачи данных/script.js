let options = {
    width: 1920,
    height: 1080,
    background: "red",
    font: {
        size: "16px",
        color: "#fff"
    }
};

// console.log(JSON.stringify(options));//зашифровка js кода в json 
console.log(JSON.parse(JSON.stringify(options)));// расшифровка из json в js