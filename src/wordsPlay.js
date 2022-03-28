stopwords = require('stopwords').english

function sentenceSegmentation(str){
    str = str.replaceAll('?','.')
    str = str.replaceAll('!','.')
    var sentences = []
    str.split('.').slice(0,-1).forEach(sentence => {
        sentences.push(sentence.trim());
    });
    return sentences
}

function wordSegmentation(str){
    for (let char of str){
        if(!(/[a-zA-Z ]/).test(char)){
            str = str.replace(char,'')
        }
    }
    all_words=[]
    str.split(' ').forEach(word =>{
        if(!(word=='')){
            all_words.push(word)
        }
    })
    return all_words
}

function remove_stopwords(str){
    sentence = ''
    str.split(' ').forEach(word =>{
        if(!(stopwords.includes(word))){
            sentence += word + ' '
        }
    })
    return sentence.slice(0,-1)
}

function no_repeated_strings(str){
    str= str.toLowerCase()
    return str.split(' ').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .join(' ');
}

function reverse_string(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function each_word_reversed(str){
    sentence = ''
    str.split(' ').forEach(word =>{
        word = reverse_string(word)
        sentence += word + ' '
    })
    return sentence
}

function only_numbers(str){
    for (let char of str){
        if(!(/[0-9 ]/).test(char)){
            str = str.replace(char,'')
        }
    }
    numbers=[]
    str.split(' ').forEach(word =>{
        if(!(word=='')){
            numbers.push(word)
        }
    })
    return numbers
}

module.exports = {
    sentenceSegmentation: sentenceSegmentation,
    wordSegmentation: wordSegmentation,
    remove_stopwords: remove_stopwords,
    no_repeated_strings: no_repeated_strings,
    each_word_reversed: each_word_reversed,
    only_numbers: only_numbers
}