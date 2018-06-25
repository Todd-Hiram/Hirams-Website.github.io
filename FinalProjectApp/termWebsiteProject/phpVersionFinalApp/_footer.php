</main>

<!-- FOOTER HERE -->
<footer>
    <p>&copy; 2017 &bull; <a href="theMountainSpoke.html">The Mountain Spoke</a> &bull; Hiram Todd &bull; 123-555-6789</p>
    <p>
        FOR OVERVIEW VIDEO
        <a href="overviewVideo.php" target="_blank">CLICK HERE</a>.
    </p>
</footer>

</body>

<script>
    //remember to add an ID of "mainmenu" to the nav ul
    var urlString = document.location.href;
    var urlArray = urlString.split('/');
    var pageHREF=urlArray[urlArray.length-1];

    if (pageHREF !=="") {
        var menu = document.querySelectorAll('ul#mainmenu li a');
        var i;

        //loop through all the menu items in the navigation
        for(i=0; i<menu.length; i++) {
            var currentURL=(menu[i].getAttribute("href"));
            menu[i].parentNode.className=""; //turn off hilighting by default

            if (currentURL===pageHREF) {
                menu[i].parentNode.className="active";	//turn on if a match
            } // end if
        } // end of the search for a match
    } // end of if !==
</script>

</html>
