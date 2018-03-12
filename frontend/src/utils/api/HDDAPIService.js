import request from '../request';

function checkHDD(token) {
    return request({
        url: `/hdd/checkHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function enableHDD(token) {
    return request({
        url: `/hdd/enableHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function formatHDD(token, args) {
    return request({
        url: `/hdd/formatHDD`,
        method: 'POST',
        headers: {
            'Authorization': token
        },
        data: {
            args
        }
    });
}

function mountHDD(token) {
    return request({
        url: `/hdd/mountHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function moveData0HDD(token) {
    return request({
        url: `/hdd/moveData0HDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function probeHDD(token) {
    return request({
        url: `/hdd/probeHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function smartHDD(token) {
    return request({
        url: `/hdd/smartHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

function unmountHDD(token) {
    return request({
        url: `/hdd/unmountHDD`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    });
}

const HDDAPIService = {
    checkHDD, enableHDD, formatHDD, mountHDD, moveData0HDD, probeHDD, smartTest, unmountHDD
};

export default HDDAPIService;
