let skill = document.getElementsByName('skills')
let selectedItem = document.getElementById('selectedItem');

let checkedSkills = [];

[...skill].forEach(skill => {
    skill.addEventListener('change', function (event) {
        
        if (event.target.checked) {
            checkedSkills.push(event.target.value)
            
            outputSkills(selectedItem, checkedSkills)

        } else {
            let ind = checkedSkills.indexOf(event.target.value)
            checkedSkills.splice(ind, 1)
            
            outputSkills(selectedItem, checkedSkills)
        }
        console.log(checkedSkills);
    })
    
})

function outputSkills(parent, arr) {
    let result = ''
    arr.forEach((index, num) => {
        result += `${num + 1}) ${index}  `
        
    });
    parent.innerHTML = result
}