// Seletor para os itens do menu
var menuItems = document.querySelectorAll('aside nav ul li');

// Função para carregar o conteúdo do link
function loadContent(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector('main').innerHTML = this.responseText;
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

// Evento de clique nos itens do menu
menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    var link = this.querySelector('a').getAttribute('href');
    loadContent(link);
  });
});