document.addEventListener("DOMContentLoaded",
    function (event) {
        // function confirmLink()
        // {
        //     return confirm("Are you sure to " + item + "?");
        // }

        function confirmLink(event)
        {
            confirm("Are you sure to " + item + "?") || event.preventDefault();
        }

        var aElem = document.querySelector("body > a");
        item = aElem.getAttribute("data-message");
        
        aElem.addEventListener("click", confirmLink);

    }
);