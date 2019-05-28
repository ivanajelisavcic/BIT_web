function ajax() {
    var appRequest = new XMLHttpRequest();
    appRequest.open('GET', 'http://www.geoplugin.net/xml.gp?ip=154.117.204.106');
    appRequest.send();


    appRequest.addEventListener('load', function () {
        var miniDom = appRequest.responseXML;
        var screen = miniDom.querySelector('geoplugin_countryName').textContent;


        var h1 = document.createElement('h1');
        h1.textContent = screen;

        document.querySelector('body').appendChild(h1);


    })

}



ajax();