// script.js
// document.addEventListener('DOMContentLoaded', function () {
//     const addDonut = document.getElementById('addDonut');
//     addDonut.addEventListener('click', function () {
//         console.log('Button clicked!');
//     });
// });
// wait for everything to be loaded into the DOM
window.addEventListener('DOMContentLoaded', ()=> {
    const firstname = document.querySelector('#firstname')
    const lastname = document.querySelector('#lastname')
    const address = document.querySelector('#address')
    const city = document.querySelector('#city')
    const state = document.querySelector('#state')
    const donut1 = document.querySelector('#donut1')
    const quantity1 = document.querySelector('#quantity1')
    const text = document.querySelector('#text')
    const call = document.querySelector('#call')
    const email = document.querySelector('#email')
    const contactPhone = document.querySelector('#contactPhone')
    const contactEmail = document.querySelector('#contactEmail')
    const phoneNum = document.querySelector('#phoneNum')
    const eMail = document.querySelector('#eMail')
    const mail = document.querySelector('#mail')
    const contactMethod = document.querySelector('#contactMethod')
    const agree = document.querySelector('#agree')
    const feedback = document.querySelector('#feedback')
    const requiredContact = document.querySelector('#requiredContact')
    const requiredTerms = document.querySelector('#requiredTerms')
    // const asterick = document.querySelector('#asterick')

    // starts with from not submitted
    let formSubmitted = false

    })
    // list on form variables to iterate through for error boxes
    const formFields = [
        {field: firstname, error: 'First Name'},
        {field: lastname, error: 'Last Name'},
        {field: address, error: 'Address'},
        {field: city, error: 'City'},
        {field: state, error: 'State'},
        {field: donut1, error: 'Donut Flavor'},
        {field: quantity1, error: 'Quantity'}
        // {field: feedback, error: 'Feedback'}
    ];

    // for each form field, apply bold focus and remove when clicked out
    formFields.forEach(({field, error}) => {
        field.addEventListener('focus', () => {
            // asterick.innerText=''
            if (formSubmitted) {
                field.style.outline = 'none'
                field.style.border = '2px solid red'
                field.nextElementSibling.style.visibility = 'visible'
            }
        });

        field.addEventListener('blur', () => {
            if (formSubmitted && field.value.trim() === '') {
                field.style.border = '1.5px solid red'
                field.nextElementSibling.style.visibility = 'visible'
            } else {
                field.style.border = '1px solid lightgray'
                field.nextElementSibling.style.visibility = 'hidden'
            }
        });
    });

    // add focus and blur for contact method fields
    // Phone Number
    phoneNum.addEventListener('focus', () => {
        // asterick.innerText=''
        if (formSubmitted) {
            phoneNum.style.outline = 'none'
            phoneNum.style.border = '2px solid red'
            contactPhone.style.visibility = 'visible'
        }
    });
    phoneNum.addEventListener('blur', () => {
        if (formSubmitted && phoneNum.value.trim() === '') {
            phoneNum.style.border = '1.5px solid red'
            contactPhone.style.visibility = 'visible'
        } else {
            phoneNum.style.border = ''
            contactMethod.style.border = ''
        }
    });
    // Email
        eMail.addEventListener('focus', () => {
        // asterick.innerText=''
        if (formSubmitted) {
            eMail.style.outline = 'none'
            eMail.style.border = '2px solid red'
            contactEmail.style.visibility = 'visible'
        }
    });
    eMail.addEventListener('blur', () => {
        if (formSubmitted && eMail.value.trim() === '') {
            eMail.style.border = '1.5px solid red'
            contactEmail.style.visibility = 'visible'
        } else {
            eMail.style.border = ''
            contactMethod.style.border = ''
        }
    });

    text.addEventListener('click', () => {
        contactPhone.style.display = 'block'
        contactEmail.style.display = 'none'
        if (formSubmitted) {
            contactMethod.style.border = '1.5px solid lightgray'
            requiredContact.style.display = 'none'
            if (formSubmitted && phoneNum.value.trim() === '') {
            phoneNum.style.border = '1.5px solid red'
            requiredContact.style.display = 'block'
        }}
    })
    call.addEventListener('click', () => {
        contactPhone.style.display = 'block'
        contactEmail.style.display = 'none'
        if (formSubmitted) {
            contactMethod.style.border = '1.5px solid lightgray'
            requiredContact.style.display = 'none'
        if (formSubmitted && phoneNum.value.trim() === '') {
            phoneNum.style.border = '1.5px solid red'
            requiredContact.style.display = 'block'
        }}
    }) 
    email.addEventListener('click', () => {
        contactEmail.style.display = 'block'
        contactPhone.style.display = 'none'
        if (formSubmitted) {
            contactMethod.style.border = '1.5px solid lightgray'
            requiredContact.style.display = 'none'
        if (formSubmitted && eMail.value.trim() === '') {
            eMail.style.border = '1.5px solid red'
            requiredContact.style.display = 'block'
        }}
    })
    mail.addEventListener('click', () => {
        contactPhone.style.display = 'none'
        contactEmail.style.display = 'none'
        if (formSubmitted) {
        contactMethod.style.border = '1.5px solid lightgray'
        }
    })

    feedback.addEventListener('focus', () => {
        // asterick.innerText=''
        if (formSubmitted) {
            feedback.style.outline = 'none'
            feedback.style.border = '2px solid red'
            feedback.nextElementSibling.style.visibility = 'visible'
        }
    });
    feedback.addEventListener('blur', () => {
        if (formSubmitted && feedback.value.trim() === '') {
            feedback.style.border = '1.5px solid red'
            feedback.nextElementSibling.style.visibility = 'visible'
        } else {
            feedback.style.border = '1px solid lightgray'
            feedback.nextElementSibling.style.visibility = 'hidden'
        }
    });

    const fieldsets = document.querySelectorAll('fieldset');


    


// add event listener for form submission
    document.querySelector("form").addEventListener('submit', (e) => {

        const submitBtn = document.querySelector('#submit')
        submitBtn.disabled = true;
        console.log("Disabled submit btn");

        // formSubmitted goes to true for JavaScript error boxes after first submit and disable submit
        formSubmitted = true

        const errorBucketTop = document.querySelector('#errorBucketTop')
        const errorBucketBottom = document.querySelector('#errorBucketBottom')

        // get a handle to the required field span
        const errorBucket = []

        let fieldFocus

        formFields.forEach(({field, error}) => {
            if (field.value === '') {
                // prevent the form from being submitted 
                e.preventDefault()
                // style border and set prompt
                field.style.border = '1.5px solid red'
                field.nextElementSibling.style.visibility = 'visible'
                // field.nextElementSibling.style.display = 'block' 
                // focus on field that is missing
                if (fieldFocus == undefined) {
                fieldFocus = field
                }
                errorBucket.push(error)
            }
        })

        // check if Contact Method has any radio buttons selected
        if (!text.checked && !call.checked && !email.checked && !mail.checked) {
            // prevent the form from being submitted 
            e.preventDefault()
            contactMethod.style.border = '1.5px solid red'

            requiredContact.style.visibility = 'visible'
            // agree.nextElementSibling.style.display = 'block'
            // focus on field that is missing
            if (fieldFocus == undefined) {
                fieldFocus = text
            }
            errorBucket.push('Contact Method')
        } else if (text.checked && phoneNum.value.trim() === '') {
            e.preventDefault()
            contactMethod.style.border = '1.5px solid red'
            phoneNum.style.border = '1.5px solid red'
            phoneNum.style.display = 'block'
            requiredContact.style.visibility = 'visible'
            if (fieldFocus == undefined) {
                fieldFocus = phoneNum;
            }
        } else if (call.checked && phoneNum.value.trim() === '') {
            e.preventDefault()
            contactMethod.style.border = '1.5px solid red'
            phoneNum.style.border = '1.5px solid red'
            phoneNum.style.display = 'block'
            requiredContact.style.visibility = 'visible'
            if (fieldFocus == undefined) {
                fieldFocus = phoneNum;
            }
        } else if (email.checked && eMail.value.trim() === '') {
            e.preventDefault()
            contactMethod.style.border = '1.5px solid red'
            eMail.style.border = '1.5px solid red'
            eMail.style.display = 'block'
            requiredContact.style.visibility = 'visible'
            if (fieldFocus == undefined) {
                fieldFocus = eMail;
            }
        }

                // check to see if donut is selected
        if (!agree.checked) {
            // prevent the form from being submitted 
            e.preventDefault()
            agree.style.outline = '2px solid red'
            requiredTerms.style.visibility = 'visible'
            // focus on field that is missing
            if (fieldFocus == undefined) {
                fieldFocus = agree
            }
            errorBucket.push('Terms and Conditions')
        }


        if (feedback.value === '') {
            // prevent the form from being submitted 
            e.preventDefault()
            // style border and set prompt
            feedback.style.border = '1.5px solid red'
            feedback.nextElementSibling.style.visibility = 'visible'
            // focus on field that is missing
            if (fieldFocus == undefined) {
            fieldFocus = feedback
            }
            errorBucket.push('Feedback')
        }

        fieldFocus.focus()

        if (errorBucket.length > 0) {
            errorBucketTop.style.display = 'block'
            errorBucketBottom.style.display = 'block'
            // errorBucket.style.border = '5px solid red'
            let message = '<div id=\"error-bucket\" class="my-3 p-2"><p>Your order is important to us, please provide the following fields: '

            errorBucket.forEach((error, index) => {
                if (index === errorBucket.length - 1 && errorBucket.length > 1){
                    message += 'and '
                }
                message += `<strong>${error}</strong>${index < errorBucket.length - 1 ? ', ' : ''}`;
            })
            message += '<p/></div>'
            errorBucketTop.innerHTML = message
            errorBucketBottom.innerHTML = message
        }

        submitBtn.disabled = false;
        console.log("Enabled the submit btn");
        
    })

    // define add donut constant
    const addDonut = document.getElementById('addDonut')
    const nextDonut = document.getElementById('donutOrder')
    let count = 2

    addDonut.addEventListener('click', function () {
        if (count <= 15) {
            const donutFormDiv = document.createElement('div')
            donutFormDiv.className = 'row g-3 align-items-end d-flex'
            const newDonutDiv = document.createElement('div')
            newDonutDiv.className = 'formGroup col-sm-8 col-xl-4 col-xxl-3'
            newDonutDiv.innerHTML = `
                    <label for="donut${count}" class="ms-1">Donut Flavor ${count}</label>
                    <select name="donut${count}" id="donut${count}" class="form-control mb-4">
                        <!-- used ChatGPT to generate 15 donuts -->
                        <option value="">--Select Donut Flavor--</option>
                        <option value="glazed">Glazed Donut</option>
                        <option value="chocolate-frosted">Chocolate Frosted Donut</option>
                        <option value="powdered-sugar">Powdered Sugar Donut</option>
                        <option value="jelly filled">Jelly-Filled Donut</option>
                        <option value="boston cream">Boston Cream Donut</option>
                        <option value="old fashioned">Old-Fashioned Donut</option>
                        <option value="maple bar">Maple Bar Donut</option>
                        <option value="cinnamon sugar">Cinnamon Sugar Donut</option>
                        <option value="apple fritter">Apple Fritter</option>
                        <option value="strawberry frosted">Strawberry Frosted Donut</option>
                        <option value="blueberry cake">Blueberry Cake Donut</option>
                        <option value="cruller">Cruller (French Cruller)</option>
                        <option value="cream filled">Cream-Filled Donut</option>
                        <option value="buttermilk">Buttermilk Donut</option>
                        <option value="bear claw">Bear Claw</option>
                    </select>
                    `
            const newQuantDiv = document.createElement('div')
            newQuantDiv.className = 'formGroup col-3 col-sm-4 col-xl-2 col-xxl-3 d-flex flex-column'
            newQuantDiv.innerHTML = `
                    <label for="quantity${count}">Quantity</label>
                    <input type="number" name="quantity${count}" id="quantity${count}" min="1" maxlength="5" class="form-control mb-4">
                    `
            
            donutFormDiv.append(newDonutDiv, newQuantDiv)
            nextDonut.append(donutFormDiv)
            // nextDonut.append(newQuantDiv)
            count++
            if (count === 16) {
                addDonut.disabled = true;
            }
        } 
    })
        
