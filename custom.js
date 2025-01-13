// javascript

function getSelectedTab() {
     const tabsContainer = document.getElementById('tabs');
     if (!tabsContainer) return null; // Si no existe el contenedor

     moveLastToFirst()
   
     // Busca dentro del contenedor el botón con aria-selected="true"
     const activeButton = tabsContainer.querySelector('li > button[aria-selected="true"]');
     return activeButton ? activeButton.textContent.trim() : null; // Retorna el texto del botón seleccionado o null
   }

   function setupTabListeners() {
     const tabsContainer = document.getElementById('tabs');
     if (!tabsContainer) {
       console.error("El contenedor con id 'tabs' no existe.");
       return;
     }
   
     // Añade un listener a cada botón para detectar clics
     const buttons = tabsContainer.querySelectorAll('li > button');
     buttons.forEach((button) => {
       button.addEventListener('click', () => {
         // Actualiza aria-selected para reflejar el estado activo
         //buttons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));
         //button.setAttribute('aria-selected', 'true');
   
         // Muestra el tab seleccionado en la consola
         console.log("Nuevo tab seleccionado:", button.textContent.trim());

         var delayInMilliseconds = 30; //1 second

          setTimeout(function() {moveLastToFirst(); }, delayInMilliseconds);

          });
     });
   }

function moveLastToFirst() { // coloca el grupo main al principio
     const container = document.getElementById('layout-groups');
     if (!container) {
       console.error("El contenedor con id 'layout-groups' no existe.");
       return;
     }
   
     // Obtiene todos los divs dentro del contenedor
     const divs = Array.from(container.children);
     if (divs.length < 2) {
       console.warn("No hay suficientes elementos para reordenar.");
       return;
     }
   
     // Toma el último div
     const lastDiv = divs[divs.length - 1];
   
     // Mueve el último div al principio del contenedor
     container.insertBefore(lastDiv, divs[0]);
   
     console.log("Reordenados los divs en 'layout-groups':");
   }
   
window.onload = () => {
     console.log("El tab seleccionado es:", getSelectedTab());
     setupTabListeners();
   }
