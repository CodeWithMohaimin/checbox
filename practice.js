let skills = document.getElementsByName('skills');
let result = document.getElementById('selectedItem');

let checkedValue = [];

[...skills].forEach(skills => {
    skills.addEventListener('change', function (e) {
        if (e.target.checked) {
            checkedValue.push(e.target.value)

        } else {
            let index = checkedValue.indexOf(e.target.value)
            checkedValue.splice(index, 1)
        }

        result.innerHTML = checkedValue
    })
})