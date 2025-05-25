<div id="cookie-consent-banner" style="position: fixed; bottom: 0; width: 100%; background-color: #333; color: white; text-align: center; padding: 10px;">
    <p>We use cookies and device fingerprinting to enhance your experience and for security purposes. By continuing to use this site, you acknowledge and consent to this usage. 
    For more information or to inquire about your data, please check our <a href="/privacy-policy" style="color: #ffcc00;">Privacy Policy</a> or contact the admin.</p>
    <button onclick="acceptConsent()">I Agree</button>
    <button onclick="declineConsent()">Decline</button>
</div>

<script>
    // Manage Consent
    function acceptConsent() {
        localStorage.setItem('cookie-consent', 'granted');
        localStorage.setItem('fingerprint-consent', 'granted');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }

    function declineConsent() {
        localStorage.setItem('cookie-consent', 'declined');
        localStorage.setItem('fingerprint-consent', 'declined');
        document.getElementById('cookie-consent-banner').style.display = 'none';
    }
</script>
