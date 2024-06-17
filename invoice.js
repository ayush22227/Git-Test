$(function () {
    function addBackgroundColor() {
        let parentDiv = document.getElementById('ParentDIV');
        let allElements = parentDiv.querySelectorAll('*'); // Select all elements within #ParentDIV

        allElements.forEach((element) => {
            element.style.backgroundColor = 'skyblue';
        });
    }

    // Apply background color initially
    addBackgroundColor();

    // Reapply background color on window resize if needed
    $(window).on('resize', addBackgroundColor);
});
