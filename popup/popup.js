try {
    document.getElementById("removePaywallBtn").addEventListener('click', function() {
        const url = window.location.href;
        return "https://12ft.io/" + url;
    });
} 
catch (e) {
    console.error("An error occurred while trying to remove the paywall.", e.message);
}
