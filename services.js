const tabs = document.querySelectorAll('.tabs');
const tabz = document.querySelectorAll('.tab');
const buttonclicks = document.querySelectorAll('.btn');
const tabContents = document.querySelectorAll('.tabContent');


buttonclicks.forEach(buttonclick => {
  buttonclick.addEventListener('click', () => {
    hideClasses()
    tabContents.classlist.add('active');
  })
})

function hideClasses() {
  tabContents.forEach(tabContent => {
    tabContent.classlist.remove('active');
  })
}




/*panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})



function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}*/

