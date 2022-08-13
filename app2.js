let skills = document.getElementsByName('skills');
let result = document.getElementById('selectedItem');


let checkedList = [];

[...skills].forEach(skill => {
    skill.addEventListener('change', (event) => {
        if (event.target.checked) {
            checkedList.push(event.target.value)
            
            outputSkills(result, checkedList)
            //result.innerText = `  ${checkedList}   `
        } else {
            let index = checkedList.indexOf(event.target.value)
            checkedList.splice(index, 1)

            outputSkills(result, checkedList)
            // result.innerText = `  ${checkedList}  `
        }
       
    })
})

function outputSkills(parent, index) {
    let result = ''

    index.forEach((skill, ind) => {
        result += `${ind + 1}) ${skill}  `
    })
    parent.innerText = result
}