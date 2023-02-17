var customer='{{customer | json}}';
if (customer){
    dataLayer.push({'logInStatus':'true'});
    console.log('Logged In');
}    
