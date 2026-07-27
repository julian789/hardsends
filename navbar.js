window.HARD_SENDS_NAVBAR_HTML = `
<header class="site-header">
  <nav class="navbar" data-mobile-open="false">
    <a href="index.html" class="brand" data-nav-route="home">HARD<span>SENDS</span></a>
    <button class="nav-toggle" aria-label="Toggle menu">MENU</button>
    <ul class="nav-list">
      <li><a href="index.html" data-nav-route="home">Home</a></li>
      <li><a href="about.html" data-nav-route="about">About</a></li>
      <li><a href="jctest.html" class="nav-cta" data-nav-route="test">Take the Test</a></li>
      <li class="has-dropdown" data-open="false">
        <button class="dropdown-toggle" aria-expanded="false" aria-haspopup="true">
          Other Tools <span class="caret"></span>
        </button>
        <div class="dropdown-menu">
          <a href="tools/crimp-conversion.html" data-nav-route="crimp-conversion">Crimp Conversion</a>
          <a href="tools/climbing-plan.html" data-nav-route="climbing-plan">Climbing Plan Generator</a>
          <a href="tools/pullup-1rm-converter.html" data-nav-route="pullup-1rm-converter">Pull-Up 1RM Converter</a>
          <a href="tools/useful-links.html" data-nav-route="useful-links">Useful Links</a>
          <a href="tools/all-tools.html" data-nav-route="all-tools">All Tools</a>
        </div>
      </li>
      <li><a href="contact.html" data-nav-route="contact">Contact</a></li>
    </ul>
  </nav>
</header>
`;

document.write(window.HARD_SENDS_NAVBAR_HTML);