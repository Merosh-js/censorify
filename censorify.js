const censoredWords = ['sad', 'mad', 'bad'];
const customCensoredWords = [];

function censor(text){
    text = text.toLowerCase();

    for(let index of censoredWords){
        const word = censoredWords[index];
        const regexp = new RegExp(word, 'g');
        text = text.replace(regexp, '*'.repeat(word.length));
    }
    for(let index of customCensoredWords){
        const word = customCensoredWords[index];
        const regexp = new RegExp(word, 'g');
        text = text.replace(regexp, '*'.repeat(word.length));
    }
    return text;
}

function addCensoredWord(word){
    customCensoredWords.push(word);
}
function getCensoredWords(){
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;