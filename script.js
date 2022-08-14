

const button = document.getElementById('add-button')



button.addEventListener('click', function(){
    const listContainer = document.getElementById('list-container')
    
    const li = document.createElement('li')
    li.classList.add('list-class')
    const inputBox = document.getElementById('todo-item')
    li.innerHTML = `
    <div class="px-8 py-4 flex justify-between">
    <span class="text-gray-500">${inputBox.value}</span>
    <button class='remove-btn text-red-700 text-2xl'><i class="fa-solid fa-circle-xmark"></i></button>
    </div>
    `
    listContainer.prepend(li)
    inputBox.value = '';

    const removeBtns = document.getElementsByClassName('remove-btn')
    for (const removeBtn of removeBtns){
        removeBtn.addEventListener('click', function(e){
            e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
        })
    }


    const taskNumber = document.getElementById('task-number')
    const listItems = document.getElementsByClassName('list-class')
    taskNumber.innerText = listItems.length + ' ' + 'Tasks'
    

    const clearAll = document.getElementById('clear-button')
    clearAll.addEventListener('click', function(){
        li.remove()
    })

})

