$(function () {
    function adjustContent() {
        let components = document.querySelectorAll('.be-component');
        let parentDiv = document.getElementById('ParentDIV');
        let parentRect = parentDiv.getBoundingClientRect();
        let pageHeight = window.innerHeight; // Assuming the window height as the page height

        let debugContainer = document.createElement('div');
        debugContainer.style.position = 'fixed';
        debugContainer.style.top = '0';
        debugContainer.style.left = '0';
        debugContainer.style.backgroundColor = 'yellow';
        debugContainer.style.zIndex = '1000';
        debugContainer.style.width = '100%';
        debugContainer.style.padding = '10px';
        debugContainer.style.display = 'none';
        document.body.appendChild(debugContainer);

        components.forEach((component, index) => {
            let rect = component.getBoundingClientRect();
            let topOffset = rect.top - parentRect.top;

            // Check if the component is positioned after the first page
            if (topOffset >= pageHeight) {
                // Calculate the number of pages the component spans
                let pageIndex = Math.floor(topOffset / pageHeight);
                let newTopOffset = topOffset - (pageHeight * pageIndex);

                // Adjust the top position of the component
                component.style.top = newTopOffset + 'px';

                // Log the adjustment to the console
                console.log(`Adjusted component at index ${index}: new top offset = ${newTopOffset}px`);

                // Display a debug message on the top of the page
                debugContainer.innerHTML = `Adjusted component at index ${index}: new top offset = ${newTopOffset}px`;
                debugContainer.style.display = 'block';
            }
        });
    }

    // Adjust content initially and on window resize
    adjustContent();
    $(window).on('resize', adjustContent);
});
