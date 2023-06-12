
http=require('http');
url=require('url');
querystring =require('querystring');
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log('Request for'+path+'received');
    var query =url.parse(request.url).query;
    var name=querystring.parse(query)["CustomerName"];
    var Password=querystring.parse(query)["Password"];
    var email=querystring.parse(query)["email"];
    var address=querystring.parse(query)["address"];
    var Pincode=querystring.parse(query)["Pincode"];
    var MobileNumber=querystring.parse(query)["MobileNumber"];
    response.write('WELCOME '+name+'Strong pass: '+Password+'your email id :'+email+'Your Address: '+address+'your Pincode'+Pincode+'Phone number: '+MobileNumber);
    response.end();
}
http.createServer(onRequest).listen(5000);
console.log('Server has started');