const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove articles (a, an, the) for sorting
function stripArticles(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort alphabetically, ignoring articles
const sortedBands = bands.slice().sort((a, b) => {
  return stripArticles(a).localeCompare(stripArticles(b));
});

// Render list to DOM
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
