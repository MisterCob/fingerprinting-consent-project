//Integrate FingerprintJS here
<script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs/3.3.0/fingerprint.min.js"></script>
<script>
    if (localStorage.getItem('cookie-consent') === 'granted' && localStorage.getItem('fingerprint-consent') === 'granted') {
        new FingerprintJS().get(function(result) {
            console.log(result);  // The fingerprint data
        });
    }
</script>
