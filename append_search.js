window.onload = function() {
    document.getElementById('theForm').onsubmit = function() {
        var txt = document.getElementById('txtSearch');
        txt.value = txt.value + " -ai";
    };
};