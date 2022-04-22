let list = document.querySelector('#book-list ul')
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        let li = e.target.parentElement;
        list.removeChild(li)
    }
})
let form = document.forms['add-book']
form.addEventListener('submit', function(e){
    e.preventDefault();
    let value = form.querySelector('input[type="text"]').value;
    let li = document.createElement('li')
    let bookName = document.createElement('span')
    let deleteBtn = document.createElement('span')

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')

    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li);
    form.querySelector('input[type="text"]').value = ""


})

let hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = "none"
    } else{
        list.style.display = "initial"
    }
})