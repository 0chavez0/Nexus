// Toggle panel visibility
const showPanelBtn1 = document.querySelector('.show-panel-btn1');
const coursePanel1 = document.querySelector('.course-panel1');

showPanelBtn1.addEventListener('click', () => {
    coursePanel1.classList.toggle('active');
    showPanelBtn1.textContent = coursePanel1.classList.contains('active') 
        ? 'Ocultar Contenido del Curso' 
        : 'Mostrar Contenido del Curso';
});

// Accordion functionality
document.querySelectorAll('.accordion-header1').forEach(header => {
    header.addEventListener('click', () => {
        const item1 = header.parentElement;
        const isActive = item1.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.accordion-item1').forEach(item1 => {
            item1.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item1.classList.add('active');
        }
    });
});