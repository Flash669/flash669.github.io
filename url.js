<script>
  var enlace = document.querySelector('.btn.btn-md');

  var dominio = 'https://television-libre.online';

  var parteDinamica = enlace.getAttribute('href');

  enlace.href = dominio + '/html/' + parteDinamica;
</script>
