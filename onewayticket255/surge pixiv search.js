let url = 'https://pixiv.mlyx.workers.dev/?api=pixiv'
//DO NOT ABUSE

let headers = $request.headers
$httpClient.get(url, (error, response, data) => {
    if (error) {
        $done({})
    }
    else {
        headers['Authorization'] = `Bearer ${data}`
        $done({headers})
    }
})
