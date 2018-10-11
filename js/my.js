function prev( directive, n ) {
    var text = "&lt; prev" ;
    return n > 0 || directive.indexOf("prev") >= 0 ?
        link( "/" + (n-1), text ) : text;
}

function next( directive, n ) {
    var text = "next &gt;";
    return directive.indexOf("next") >= 0 ?
        link( "/" + (n+1), text ) : text;
}

function link( path, text ) {
    var loc = window.location;
    var url = "http://" + loc.hostname + "/posts" + path;
    return "<a href=\""+ url +"\">" + text + "</a>";
}

function do_navigation_menu( ) {
    var menu_div = document.getElementsByClassName("navigator");

    if ( menu_div[0] ) {
        var loc   = window.location;
        var match = loc.pathname.match( /\/posts\/([\d]+)/ );
        var post  = match ? parseInt( match[1] ) : 0;
        
        var directive = menu_div[0].innerHTML;
        menu_div[0].innerHTML
            = "<p>"
            + prev( directive, post ) + " | "
            + link("/", "home")       + " | "
            + next( directive, post )
            + "</p>";
    }
}

// draw the navigation menu
// ========================
window.onload = do_navigation_menu;
