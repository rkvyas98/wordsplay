// myStr = 'Hi. my name is Rakshit! what is your name? I am doing good! how are you doing?'
// myStr = 'The push() method adds new items to the end of an array. The push() method changes the length of the array. The push() method returns the new length.'
// myStr = '1232 things you shouldn\'t forget: 1. Accept Petar\'s answer (and perhaps edit the * for a +; it matches empty string now.). 2. since this is labelled javascript, check the input on the server too; people can disable javascript and post anything to your server. Javascript checks are there to help the user with instant feedback not to protect your app from malformed input. Chris Wesseling Feb 15, 2012 at 8:07.'

const wordsplayForm = document.querySelector('form')
const inp = document.querySelector('textarea')
const message_1 = document.querySelector('#message-1')
const message_2 = document.querySelector('#message-2')
const message_3 = document.querySelector('#message-3')
const message_4 = document.querySelector('#message-4')
const message_5 = document.querySelector('#message-5')
const message_6 = document.querySelector('#message-6')

wordsplayForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(!inp.value){
        document.querySelector('#text1').textContent = 'Please enter some text!'
    } else{
        fetch('http://localhost:3000/wordsplay?input='+inp.value).then((response)=>{
            response.json().then((data)=>{
                document.querySelector('#text1').textContent = ''
                message_1.textContent = data.sentenceSegmentation
                message_2.textContent = data.wordSegmentation
                message_3.textContent = data.remove_stopwords
                message_4.textContent = data.no_repeated_strings
                message_5.textContent = data.each_word_reversed
                message_6.textContent = data.only_numbers
            })
        })
    }
})

function refreshPage(){
    window.location.reload();
} 