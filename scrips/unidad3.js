// Toggle panel visibility
const showPanelBtn2 = document.querySelector('.show-panel-btn2');
const coursePanel2 = document.querySelector('.course-panel2');

showPanelBtn2.addEventListener('click', () => {
    coursePanel2.classList.toggle('active');
    showPanelBtn2.textContent = coursePanel2.classList.contains('active') 
        ? 'Ocultar Contenido del Curso' 
        : 'Mostrar Contenido del Curso';
});

// Accordion functionality
document.querySelectorAll('.accordion-header2').forEach(header => {
    header.addEventListener('click', () => {
        const item2 = header.parentElement;
        const isActive = item2.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.accordion-item2').forEach(item2 => {
            item2.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item2.classList.add('active');
        }
    });
});