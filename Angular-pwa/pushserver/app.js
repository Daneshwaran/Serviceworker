const webpush = require('web-push');


const publicVapidKey = ' BIa-vDuPs1XdOvvnrBEQ-4QLBWIwqlUxl2oHdst7auFhR-UVCFq-b6FsLXGTNj8g5Bcpo4ECg-82qazvwev511U';
const privateVapidKey = 'pfGE-1E8cWEUCKS3lfElzx0FZ8b03Amf59y86vhi56U';



const sub =

    {endpoint:"https://fcm.googleapis.com/fcm/send/dAdKVnLl_X0:APA91bH8CJjBD17Y5KRZAMVv6ZfxkPYnk3c_ZC_uwO-1Jd0H1zmS4Ss8zGIVGaseuCGS34q5s93Xrd8w3ewNRDJa4AAYdsTmsOycVoNdjmhGOVm51tsrB1WGWpWooETK3uaIuNiPYBSn",
    expirationTime:null,
    keys:{
        p256dh:"BAfEoUv4uFu9BWNAsMqIqKQ6ZvnlttDTvNMpTZSxcGbjJyfnYW7PLUUee-d9G3837w-ExGrZAJjid7xAPBDu2UE",auth:"2Dm8fZs-dFunPxCqaMEfCA"}}
webpush.setVapidDetails('mailto:example@ex.com', publicVapidKey, privateVapidKey);
const payload = {
    "notification":{
        "data": { url: 'http://pagegap.com/'},
        "title":"app update"
    }

}

        webpush.sendNotification(sub, JSON.stringify(payload) );

