# odin-library

# Explanation

    Hay un arreglo de libros, cada objeto de este arreglo, es decir cada libro, es un objeto de la clase Book y cuenta con todas las propiedades de cada libro asi como de sus metodos.

    Cuando creamos un libro y hacemos push en el array de libros, este se añade al array como objeto de la clase y tiene todas las propiedades asignadas a él aún.

    El arreglo de libros se llama myLibrary. 

    En la funcion displayBooks, hacemos que para cada book de myLibrary, se cree un div especifico para este libro y tambien se añade una bookCard para el mismo.

    La bookCard va a incluir un texto cruido que hara concatenacion con nuestras variables que representan las propiedades del libro para mostrarse dentro del div que ya hemos creado.

    En la concatenacion usamos la palabra reservada onclick que nos va a permitir realizar las funciones de los botones que tenemos en nuestro div, en este caso toggleReadStatus y removeBook

    Usamos los indexes en funciones como displayBooks para acceder especificamente al libro deseado

    ### booksContainer.appendChild(bookCard); ###
        
        Esta funcion añade la bookCard, con todo su texto sobre el libro que indica, como hijo a booksContainer, el gran contenedor de todos los libros.

    ###
        function removeBook(index) {
            myLibrary.splice(index, 1);
            displayBooks();
        }

        ¿Porque ponemos splice(index, 1)?
            La funcion splice viene integrada y se encarga de eliminar el elemento del array que proporcionamos en el parametro del indice, pero tambien puede encargarse de eliminar mas de un elemento, entonces en el segundo argumento, utilizamos un entero para indicar cuantos elementos queremos que esta funcion elimine apartir del indice, en este caso, hemos puesto 1 indicando que solo queremos que elimine lo que hay explicitamente en la posicion del indice.
    ###


    ###     event.preventDefault();     ###
        Esta funcion se encarga de hacer que el formulario no recargue la pagina.
        Al parecer cada formulario, hace que la pagina se recargue, y en nuestro caso, esto haria que perdiesemos los libros que hay en nuestro libreria.

    Al enviar el formulario, el código identifica los elementos de entrada utilizando sus id (como title, author, pages y read) y obtiene sus valores a través de document.getElementById(...), almacenándolos en constantes. Luego, utiliza estos valores para crear un nuevo objeto de la clase Book, que se añade al array myLibrary mediante la función addBookToLibrary(newBook). Después de añadir el libro, se cierra el cuadro de diálogo del formulario con document.getElementById('bookFormModal').close() y se restablecen los campos del formulario a sus valores iniciales con this.reset(), dejándolo listo para una nueva entrada.

    Y finalmente contamos con dos funciones, una para cancelar el fomulario y otra para abrirlo, pero para enviarlo no hace falta ninguna funcion ya que en html ya viene incluida la funcion de submit a la hora de manejar formularios como estos.