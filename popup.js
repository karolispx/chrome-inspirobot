const http = new XMLHttpRequest()

http.open('GET', 'https://inspirobot.me/api?generate=true')
http.send()

http.onload = () => {
    if (http.status === 200 && http.responseText) {
        document.getElementById('content').innerHTML = '<img style="max-width: 500px;"  src="' + http.responseText + '">'
    } else {
        document.getElementById('content').innerHTML = '<h2>An error occurred while making request.</h2><h3>Response: ' + http.responseText + '</h3>'
    }
}