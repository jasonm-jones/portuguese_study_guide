// nav-loader.js
// Fetches assets/nav.html and injects it as the left sidebar.
// Adjusts link paths depending on whether the current page is inside /pages/.
(function(){
    // Don't inject if a sidebar already exists
    if (document.querySelector('.sidebar')) return;

    var navPath = '/assets/nav.html';
    // Try relative paths in case site is opened via file:// or different base
    var candidates = [navPath, 'assets/nav.html', '../assets/nav.html'];

    function tryFetch(index){
        if (index >= candidates.length) return; // give up
        fetch(candidates[index])
            .then(function(resp){ if(!resp.ok) throw new Error('fail'); return resp.text(); })
            .then(function(html){ insertNav(html); })
            .catch(function(){ tryFetch(index+1); });
    }

    function insertNav(html){
        var template = document.createElement('div');
        template.innerHTML = html;
        var aside = template.querySelector('.sidebar');
        if(!aside) return;

        // Fix anchor hrefs based on current location
        var anchors = aside.querySelectorAll('a[data-path]');
        var inPagesFolder = location.pathname.indexOf('/pages/') !== -1 || location.pathname.indexOf('\\pages\\') !== -1;
        anchors.forEach(function(a){
            var data = a.getAttribute('data-path');
            if(inPagesFolder){
                // from inside pages/, link to other pages by filename only
                var filename = data.split('/').pop();
                a.setAttribute('href', filename);
            } else {
                // from root, link into pages/ folder
                a.setAttribute('href', data);
            }
        });

        // Prepend sidebar to body so it's available site-wide
        document.body.insertBefore(aside, document.body.firstChild);

        // Add page-wrapper class to container(s) so CSS shifts content
        var containers = document.querySelectorAll('.container');
        containers.forEach(function(c){ c.classList.add('page-wrapper'); });

        // Wire up mobile toggle
        var toggle = aside.querySelector('.menu-toggle');
        if(toggle){
            toggle.addEventListener('click', function(){
                aside.classList.toggle('active');
                // also toggle body class to show overlay if needed
                document.body.classList.toggle('sidebar-open');
            });
        }
    }

    tryFetch(0);
})();
