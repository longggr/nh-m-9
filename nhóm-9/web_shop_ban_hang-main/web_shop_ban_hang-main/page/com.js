fetch('/partials/header.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('header-placeholder').outerHTML = data;
      });

      fetch('/partials/footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer-placeholder').outerHTML = data;
      });      