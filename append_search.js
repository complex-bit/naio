window.onload = function() {
    const no_aio = " -ai";
    const no_ads = " -ads";
    document.getElementById('theForm').onsubmit = function() {
        var txt = document.getElementById('txtSearch');
        txt.value = txt.value + no_aio + no_ads;
    };
};