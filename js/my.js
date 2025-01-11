function prev( directive, n ) {
    var text = "&lt; prev" ;
    return n > 1 || directive.indexOf("prev") >= 0 ?
        link((n-1), text) : text;
}

function next( directive, n ) {
    var text = "next &gt;";
    return directive.indexOf("next") >= 0 ?
        link((n+1), text) : text;
}

function link( path, text ) {
    return `<a href="./${path}.html">${text}</a>`;
}

function do_navigation_menu( ) {
    var menu_div = document.getElementsByClassName("navigator");

    for (let i = 0; i < 2; i++) {
        if ( menu_div[i] ) {
            var loc   = window.location;
            var match = loc.pathname.match( /\/posts\/([\d]+)/ );
            var post  = match ? parseInt( match[1] ) : 0;
            var directive = menu_div[i].innerHTML;
            menu_div[i].innerHTML
                = "<p>"
                + prev( directive, post ) + " | "
                + link("index", "index")  + " | "
                + next( directive, post )
                + "</p>";
        }
    }
}

// draw the navigation menu
// ========================
window.onload = do_navigation_menu;
