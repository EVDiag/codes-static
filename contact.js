/* codes.evdiag.net support form -> codes-relay /v2/contact (Resend). */
(function () {
  var ENDPOINT = 'https://codes-relay.evdiag.workers.dev/v2/contact';
  var f = document.getElementById('contactForm');
  if (!f) return;
  var btn = document.getElementById('submitBtn'), msg = document.getElementById('formMsg');
  var say = function (kind, t) { msg.className = 'formmsg show ' + kind; msg.textContent = t; };
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var ts = f.elements['cf-turnstile-response'];   /* only present if Turnstile is added later */
    var data = {
      name: f.name.value.trim(), email: f.email.value.trim(), topic: f.topic.value,
      device: f.device.value.trim(), message: f.message.value.trim(), hp_check: f.hp_check.value
    };
    if (ts) data.turnstileToken = ts.value;
    if (!data.name || !data.email || !data.message) { say('bad', 'Please fill in your name, email and message.'); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) { say('bad', 'That email address does not look right.'); return; }
    btn.disabled = true; var label = btn.textContent; btn.textContent = 'Sending…'; msg.className = 'formmsg';
    fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (res.ok && res.body.ok) { f.reset(); say('ok', 'Thank you — your message is on its way. We usually reply within a working day.'); }
        else say('bad', (res.body && res.body.error) || 'Something went wrong sending that. Please email support@evdiag.net instead.');
      })
      .catch(function () { say('bad', 'Could not reach the server. Please check your connection, or email support@evdiag.net.'); })
      .finally(function () { btn.disabled = false; btn.textContent = label; });
  });
  /* Pre-select a topic from a link like /support?topic=delete#contact */
  var m = /[?&]topic=delete\b/.test(location.search);
  if (m) f.topic.value = 'Delete my data';
})();
