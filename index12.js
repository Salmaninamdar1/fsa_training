// objects
// OOP easy to learn
// Oop && functional
// contains properties & functionality
// data & methods
// state & behavior
// object initializer
// encapsulation
// system design
var employee = {
    id: 124,
    name: 'abc',
    salary: 10000,
    dept: 'HR',
    leaves: [11, 12, 13],
    employed: true,

    // method
    applyLeave: function (dt) {
        console.log("applying leave on", dt);
        // return undefined;
    },
    address: {
        hNo: '8-1-11',
        city: 'Hyderabad',
        state: 'TS',
        country: 'IN',
        pin: 500001
    },
    mobile: {
        mobileNumber: '91-23322323',
        homeNumber: undefined,
        officeNumber: '91-29292929'
    }
};


var employee = {
    id: 123,
    name: 'abc',
    salary: 10000,
    dept: 'HR',
    leaves: [11, 12, 13],
    employed: true,

    // method
    applyLeave: function (dt) {
        console.log("applying leave on", dt);
        // return undefined;
    },
    address: {
        hNo: '8-1-11',
        city: 'Hyderabad',
        state: 'TS',
        country: 'IN',
        pin: 500001
    },
    contact: [{
        type: 'Primary',
        number: '91-929329392',
        active: false
    }, {
        type: 'secondary',
        number: '91-929329392',
        active: true
    }, {
        type: 'secondary',
        number: '91-929329392',
        active: false
    }]
};

//  console.log(JSON.stringify(employee)); // JSON
// employee.applyLeave(20);
 console.log(employee.contact.length)
for (var i = 0; i < employee.contact.length; i++) {
    if (employee.contact[i].active === true && employee.contact[i].type === 'secondary') {
        // if(employee.contact[i].type === 'secondary')
        console.log(employee.contact[i])
    }
}



// [10, 20, 30]
// ['abc', 'def', 'hig']

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]] // 3

// [{}, {}, {}]

// [true, false, true, false, false]


