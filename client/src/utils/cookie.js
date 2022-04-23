function getCookie(name) {
    let matches = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, isRemember) {
    const options = {
        path: '/',
        samesite: 'strict',
    };

    if (isRemember) options['max-age'] = 3600 * 24 * 30;

    // if (options.expires instanceof Date) {
    //     options.expires = options.expires.toUTCString();
    // }

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += '; ' + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += '=' + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, '', {
        'max-age': -1,
        path: '/',
        samesite: 'strict',
    });
}

export { getCookie, setCookie, deleteCookie };
