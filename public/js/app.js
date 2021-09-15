const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector('#message2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'loading....'
    messageTwo.textContent = ''
    fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        // try {
        //     console.log(data)
        // } catch (error) {
        //     console.log('errorrrrr')
        // }
        if (data.error) {
            console.log(data.error)
            messageTwo.textContent = data.error
        } else {
            console.log(data.location)
            console.log(data.forecast)
            messageOne.textContent = data.location
            messageTwo.textContent =  data.forecast

        }
        
    })
})
    
})