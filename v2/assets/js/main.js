(function() {
    const base = document.createElement('base');
    if(location.hostname.includes('github.io')){
        base.href = `/Research_Notes/v2/`;
    }else{
        const pathSegments = window.location.pathname.split('/').filter(element => element !== "");
        const index = pathSegments.indexOf('v2');
        pathSegments.splice(index + 1, pathSegments.length - (index + 1));
        base.href = pathSegments.join('/') + '/';
    }
    document.head.appendChild(base);
})();

document.addEventListener("DOMContentLoaded", () => {
    // 1. Create the sidebar container
    let sidebar = document.querySelector(".sidebar");
    if (!sidebar) {
      sidebar = document.createElement("div");
      sidebar.className = "sidebar";
      document.body.appendChild(sidebar);
    }
  
    // 2. Get all h2 and h3 elements
    const headings = document.querySelectorAll("h2, h3");
    const tocMap = new Map();
  
    headings.forEach((heading) => {
      if (!heading.id) {
        heading.id = heading.textContent.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
      }
  
      if (heading.tagName === "H2") {
        tocMap.set(heading.id, {
          text: heading.textContent,
          h3s: []
        });
      } else if (heading.tagName === "H3") {
        const lastH2 = Array.from(tocMap.keys()).pop();
        if (lastH2) {
          tocMap.get(lastH2).h3s.push({
            id: heading.id,
            text: heading.textContent
          });
        }
      }
    });
  
    // 3. Generate the TOC HTML
    let tocHTML = `<h5 class="text-white mb-3">Contents</h5>`;
    let sectionIndex = 0;
  
    for (const [h2Id, data] of tocMap) {
        const collapseId = `collapse-${sectionIndex++}`;
    if(data.h3s.length > 0){
      tocHTML += `
        <div class="toc-section">
          <button class="toc-toggle" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}">
            <span class="arrow">&#9656;</span>
          </button>
          <a href="${window.location.pathname}#${h2Id}" class="toc-link">${data.text}</a>
        </div>
        <div class="collapse show" id="${collapseId}">
          <div class="toc-subsection">
            ${data.h3s.map(h3 => `<a href="${window.location.pathname}#${h3.id}" class="toc-link">${h3.text}</a>`).join("")}
          </div>
        </div>
      `;
    }else{
    
      tocHTML += `
        <div class="toc-section">
          <button class="toc-toggle" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}" style="visibility: hidden;">
            <span class="arrow">&#9656;</span>
          </button>
          <a href="${window.location.pathname}#${h2Id}" class="toc-link">${data.text}</a>
        </div>
      `;
    }

      
    }
  
    sidebar.innerHTML = tocHTML;  

    function loadNavbar() {
        // Define the entire HTML for the navbar

        console.log(window.location.pathname)
        let navbarHTML = "";

        if(window.location.pathname.includes("v2/content/world/north-america/united-states")){
          navbarHTML = `
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100 z-3">

          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="govDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Government
                  </a>
                  <ul class="dropdown-menu bg-dark text-light" aria-labelledby="govDropdown">
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/government/executive/presidents.html">Executive</a></li>
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/government/legislative/congress.html">Legislative</a></li>
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/government/judicial/supreme-court.html">Judicial</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="cultureDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Culture
                  </a>
                  <ul class="dropdown-menu bg-dark text-light" aria-labelledby="cultureDropdown">
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/culture/art/us-art.html">Art</a></li>
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/culture/music/us-music.html">Music</a></li>
                  </ul>
                </li>

              </ul>

              <div class="d-lg-none mobile-sidebar-scroll">
                ${tocHTML}
              </div>
            </div>
          </div>
        </nav>
          `;
        }else{
          navbarHTML = `
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-fixed top-0 w-100 z-3">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
              aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="countriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Countries
                  </a>
                  <ul class="dropdown-menu bg-dark text-light" aria-labelledby="countriesDropdown">
                    <li><a class="dropdown-item text-light" href="content/world/north-america/united-states/united-states.html">United States</a></li>
                  </ul>
                </li>
              </ul>

              <div class="d-lg-none mobile-sidebar-scroll">
                ${tocHTML}
              </div>
            </div>
          </div>
        </nav>
          `;
        }

        
    
        // Inject the navbar HTML into the body or header
        const header = document.querySelector("body");
        const firstChild = header.firstChild;
        const navbarContainer = document.createElement('div');
        navbarContainer.innerHTML = navbarHTML;
    
        // Insert the navbar at the beginning of the body
        header.insertBefore(navbarContainer.firstElementChild, firstChild);
      }
    
      // Load the navbar when the page is ready
      loadNavbar();

      // Reinitialize Bootstrap dropdowns
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => {
        new bootstrap.Dropdown(dropdown);
      });


      document.querySelectorAll('a.internal-link[href^="#"]').forEach(link => {
        const hash = link.getAttribute('href');
        link.setAttribute('href', window.location.pathname + hash);
      });

      
});