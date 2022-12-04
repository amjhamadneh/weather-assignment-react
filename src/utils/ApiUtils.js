export function FetchData(url, method, body = {}, options = {}) {
    let _options = {
        ...options
    }
    if (method.toUpperCase() === 'POST') {
        _options.body = JSON.stringify(body)
    }
    return fetch(url, {
        method,
        ..._options
    }).then(async (resp) => {
        const status = resp.status
        return {
            data: await resp.json(),
            status
        }
    })
}

export function getWetherProp(id){
    if(id < 300)
        return {
            name : "storm",
            navColor: '#0014FF',
            pageColor: '#009EFF', 
        };
    else if( id >= 300 && id <= 499)
    	return  {
            name :"drizzle",
            navColor: '#863A6F',
            pageColor: '#975C8D',
        }
    else if( id >= 500 && id <= 599)
    	return {
            name :"rain",
            navColor: '#404258',
            pageColor: '#474E68'
        }
    else if( id >= 600 && id <= 699)
        return {
            name :"snow",
            navColor: '#4C6793',
            pageColor: '#8BBCCC'
        }
    else if( id >= 700 && id <= 799)
        return {
            name :"fog",
            navColor: '#25316D',
            pageColor: '#5F6F94'
        }
    else if (id === 800) 
        return {
            name :"clear",
            navColor: '#472D2D',
            pageColor: '#A77979'
        }
    else if (id === 801)
        return {
            name :"partlycloudy",
            navColor: '#3a84f1',
            pageColor: '#5391ec'
        }
    else if (id > 801 && id <= 805)
        return {
            name :"mostlycloudy",
            navColor: '#DCB8E8',
            pageColor: '#94B49F'
        }
    else 
        return {};
}