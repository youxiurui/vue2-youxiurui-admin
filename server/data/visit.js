const visits = [
    [
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d1",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d2",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d3",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d4",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d5",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d6",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d7",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d8",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d9",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d10",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        }
    ],
    [
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d11",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        },
        {
            "place": "无法获取",
            "id": "d56d402f-9760-4787-abc9-4f25063e329d12",
            "host": "::ffff:127.0.0.1",
            "loginName": "admin",
            "browser": "Chrome",
            "os": "Windows 10",
            "date": 1712888929330
        }
    ]
]

function setVisit(data) {
    const length = visits[visits.length - 1]
    if (length === 10) {
        visits[visits.length].push(data)
    } else {
        visits[visits.length - 1].push(data)
    }
}

module.exports = {
    visits,
    setVisit
}