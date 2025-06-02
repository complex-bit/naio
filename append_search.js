window.onload = function() {
    const no_aio = " -ai";
    document.getElementById('theForm').onsubmit = function() {
        var txt = document.getElementById('txtSearch');
        txt.value = txt.value + no_aio;
    };
};