function openPage(page) {
  const content = {
    installation: `<h3>Installation en 3 min</h3>< ol><li>Télécharge le .zip</li><li>Extrait dans ton dossier Portal 2</li><li>Lance <code>portal2_ce.exe</code></li></ol>`,
    commands: `<h3>Commandes utiles</h3><ul><li><code>sv_cheats 1</code></li><li><code>god</code></li><li><code>noclip</code></li></ul>`,
    maps: `<h3>Hammer++</h3><p>Ouvrir <code>hammer++.exe</code> → Nouveau → Portal 2 CE</p>`
  };
  document.getElementById('modal-body').innerHTML = content[page] || "<p>Page en cours de rédaction...</p>";
  document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
// Fermer avec Échap
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });
