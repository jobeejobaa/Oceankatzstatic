/*
 * Formulaire de contact sans backend.
 * Les messages sont envoyés par FormSubmit (https://formsubmit.co), un service
 * gratuit qui transfère le contenu du formulaire vers une adresse mail.
 *
 * 1. Remplace VOTRE_EMAIL_ICI par l'adresse qui doit recevoir les messages
 *    (ici ET dans l'attribut action du <form> dans index.html).
 * 2. Mets le site en ligne, envoie un premier message de test :
 *    FormSubmit envoie un mail de confirmation à cette adresse. Clique sur le lien.
 * 3. C'est tout : les messages suivants arrivent directement dans la boîte mail.
 */
(function () {
  const CONTACT_EMAIL = "theoceankatz@gmail.com";

  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("contact-feedback");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = form.querySelector("button[type=submit]");
    const original = button.textContent;
    button.disabled = true;
    button.textContent = "Sending...";
    feedback.className = "contact-feedback";
    feedback.textContent = "";

    try {
      const response = await fetch("https://formsubmit.co/ajax/" + CONTACT_EMAIL, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: new FormData(form)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || String(data.success) === "false") {
        throw new Error(data.message || "Network response was not ok");
      }

      feedback.className = "contact-feedback success show";
      feedback.textContent = "Message sent! I'll get back to you soon.";
      form.reset();
    } catch (err) {
      feedback.className = "contact-feedback error show";
      feedback.innerHTML = 'Oops, something went wrong. Please try again or <a href="mailto:' +
        CONTACT_EMAIL + '">email me directly</a>.';
    } finally {
      button.disabled = false;
      button.textContent = original;
    }
  });
})();
