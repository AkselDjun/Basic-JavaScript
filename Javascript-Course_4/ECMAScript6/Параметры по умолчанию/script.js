const createPost = (title, text = 'Скоро будет 2021!', date = '28.12.2020') => {// значения по умолчанию
    return {
        title: title,
        text: text,
        date: date
    };
};

const post = createPost('Скоро новый год');
console.log(post);