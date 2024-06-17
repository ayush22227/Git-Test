$(function () {
    function addBackgroundColor() {
        let components = document.querySelectorAll('#ParentDIV .be-component');
        
        components.forEach((component) => {
            component.style.backgroundColor = 'skyblue';
        });
    }

    // Apply background color initially
    addBackgroundColor();

    // Reapply background color on window resize if needed
    $(window).on('resize', addBackgroundColor);
});
