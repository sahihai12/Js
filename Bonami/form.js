const form = document.querySelector('form');

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    let finallist = []; 
    const fname = document.querySelector('.firstName');
    const lname = document.querySelector('.lastName');
    const fullname = document.querySelector('.fullName');
    const phone = document.querySelector('.phone');
    const email = document.querySelector('.email');
    const age = document.querySelector('.age');
    const fileupload = document.querySelector('.fileupload');
    const fieldarr = [fname , lname , fullname , phone , email , age, fileupload];
    fieldarr.forEach(field => {
        if (field.value == '' || field == null) {
            field.nextElementSibling.innerHTML = "field is empty"
            console.log();
            finallist.push(`${field.className} Null`)

        }else{
            field.nextElementSibling.innerHTML = ""
            finallist.push(field)
        }
    })

    const gender = document.querySelector('.gender');
    const gendervalue = document.querySelector('input[name="gender"]:checked');    
    if (gendervalue == null) {
        gender.nextElementSibling.innerHTML = "slect one at least";
        finallist.push(`gender Null`)
    }else{
        gender.nextElementSibling.innerHTML = "";
        finallist.push(gendervalue)
    }

    finallist.forEach(el => {
        console.log(el);
    })
})

const datafill = () => {
    const fname = document.querySelector('.firstName').value;
    const lname = document.querySelector('.lastName').value;
    const fullname = document.querySelector('.fullName');
    fullname.value = fname + ' ' + lname
}

const checksize = (val) => {
    const image = document.querySelector('.fileupload');
    var size = parseFloat(image.files[0].size / (1024 * 1024)).toFixed(2); 
    if(size > 4) {
        image.nextElementSibling.innerHTML = "filesize not greater than 4mb"
        image.value = ''
    }else{
        image.nextElementSibling.innerHTML = ""
    }
    console.log(image.files);
}