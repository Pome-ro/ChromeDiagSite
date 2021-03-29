window.onload = function() {
    var webview = document.getElementById("map");
    webview.addEventListener('permissionrequest', function(e) {
      if (e.permission === 'media') {
        console.log("media permission requested");
        e.request.allow();
      }
   
     console.log("permission requested");
    });
   
   
   }