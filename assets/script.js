const wrapper = document.getElementById('wrapper');
const windowLocation = window.location.toString();
const userLanguage = navigator.language;
const userOnline = navigator.onLine;
const userAgent = navigator.userAgent;
wrapper.innerHTML = `<p>${userLanguage}</p>`;
wrapper.innerHTML += `<p>online: ${userOnline}</p>`;
wrapper.innerHTML += `<p>${windowLocation}</p>`;
wrapper.innerHTML += `<p>${userAgent}</p>`;

