let add = document.getElementById('addBtn');
    let divs = document.getElementById('mainId');

    const updateDataInLS = () => {
        const textAreaData = document.querySelectorAll('#textarea');
        const notes = [];
        textAreaData.forEach((note) => {
            return notes.push(note.value);
        })

        localStorage.setItem("notes", JSON.stringify(notes));

    }

    const getNoteLists = (text = '') => {
        const note = document.createElement('div');
        note.classList.add('flex');

        let htmlData = `
                <div class="btnGroup">
             
                    <button id="add"><i class="fas fa-pen-square"></i></button>
                    <button id="delete"><i class="far fa-trash-alt"></i></button>
                </div>
                <div class="text">
                    <div class="extra ${text ? '' : 'hidden'}"></div>
                    <textarea class="txt ${text ? 'hidden' : ''}" id="textarea" placeholder="Write Here...."></textarea>
                </div>`;


        note.insertAdjacentHTML('afterbegin', htmlData);

        const edit = note.querySelector('#add');
        const delBtn = note.querySelector('#delete');
        const extraDiv = note.querySelector('.extra');
        const textArea = note.querySelector('#textarea');

        extraDiv.innerHTML = text;
        textArea.value = text;

        edit.addEventListener('click', () => {
            extraDiv.classList.toggle('hidden');
            textArea.classList.toggle('hidden');


        })

        delBtn.addEventListener('click', () => {
            note.remove();
            updateDataInLS();
        })

        textArea.addEventListener('change', (event) => {
            let value = event.target.value;
            extraDiv.innerHTML = value;

            updateDataInLS();
        })

      divs.appendChild(note);
    }

    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
        notes.forEach((note) => getNoteLists(note));
    }

    add.addEventListener('click', () => getNoteLists());