var browser = 'Firefox';

if (browser === 'IE') {
    console.log('О, да у вас IE!');
} else if (browser === 'Chrome'
        || browser === 'Firefox'
        || browser === 'Safari'
        || browser === 'Opera') {
    console.log('Да, и эти браузеры мы поддерживаем');
} else {
    console.log('Мы надеемся, что в вашем браузере все ок!');
}
