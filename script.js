// Set data-endpoint on the form to a service accepting JSON enquiries.
const contactForm = document.querySelector('.contact-form');
const contactStatus = document.querySelector('#contact-status');
const contactButton = contactForm.querySelector('button');
const contactEndpoint = contactForm.dataset.endpoint;
contactButton.disabled = !contactEndpoint;
contactForm.hidden = !contactEndpoint;
document.querySelector('#booking-availability').hidden = Boolean(contactEndpoint);
if (!contactEndpoint) {
    contactStatus.textContent = 'Online enquiries are currently unavailable. No message will be sent.';
}
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactEndpoint || contactButton.disabled) return;
    contactButton.disabled = true;
    contactButton.textContent = 'Sending...';
    contactStatus.textContent = '';
    try {
        const response = await fetch(contactEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(Object.fromEntries(new FormData(contactForm))),
        });
        if (!response.ok) throw new Error('Submission failed');
        contactStatus.textContent = 'Your enquiry has been submitted. A booking is not confirmed yet.';
        contactForm.reset();
    } catch {
        contactStatus.textContent = 'Your enquiry could not be sent. Please try again.';
    } finally {
        contactButton.textContent = 'Send Message';
        contactButton.disabled = false;
    }
});

// Carry the selected service into the enquiry without overwriting a draft.
document.querySelectorAll('[data-service]').forEach(link => {
    link.addEventListener('click', () => {
        const message = document.querySelector('#contact-message');
        if (!message.value.trim()) {
            message.value = `I’m interested in ${link.dataset.service}. `;
        }
    });
});
