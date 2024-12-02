// Toggle panel visibility
const showPanelBtn = document.querySelector('.show-panel-btn');
const coursePanel = document.querySelector('.course-panel');

showPanelBtn.addEventListener('click', () => {
    coursePanel.classList.toggle('active');
    showPanelBtn.textContent = coursePanel.classList.contains('active') 
        ? 'Ocultar Contenido del Curso' 
        : 'Mostrar Contenido del Curso';
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});