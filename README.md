# Sorteador de Amigos

Una aplicación web simple que permite agregar nombres a una lista y realizar un sorteo aleatorio entre ellos.

## Funcionalidades

- **Agregar nombres:**  
  Los usuarios pueden ingresar el nombre de un amigo y hacer clic en "Adicionar" para añadirlo a la lista.  
  Se utilizan los métodos `document.getElementById` y `document.querySelector` para capturar el valor ingresado.

- **Validar entrada:**  
  Si el campo está vacío, se muestra una alerta solicitando un nombre válido.  
  Si el nombre es válido, se añade al arreglo de amigos utilizando `.push()`.

- **Visualizar la lista:**  
  Los nombres agregados se muestran debajo del campo de entrada.  
  Después de añadir un nombre, el campo de texto se limpia automáticamente.  
  Antes de realizar el sorteo, se verifica que el arreglo de amigos no esté vacío.

- **Sorteo aleatorio:**  
  Al hacer clic en "Sortear Amigo", se selecciona un nombre al azar de la lista utilizando `Math.random()` y `Math.floor()`.  
  El nombre seleccionado se muestra en pantalla como resultado del sorteo.

- **Mostrar el nombre sorteado:**  
  El resultado se presenta usando `document.getElementById()` y modificando el contenido con `.innerHTML`.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript (vanilla)

## Autor

**Emilio González Maldonado**  
Desarrollado para el desafío **Alura G9**

## Notas

- La aplicación no permite ingresar nombres vacíos.
- El sorteo no se ejecutará si no hay nombres en la lista.
- Ideal para usar en juegos de amigo secreto, rifas, sorteos casuales, etc.

## Vista previa

(Agrega aquí una imagen o GIF si deseas mostrar cómo se ve la app)

---

¡Disfruta tu sorteo!