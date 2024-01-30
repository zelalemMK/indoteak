import $ from jquery;

let accordian = document.querySelectorAll('.design-dropdown.dropdown-toggle')
accordian.forEach((acco) => {
    acco.classList.add('active');
})
