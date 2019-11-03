const users = [
    {
        id: 1,
        firstName: "Luis",
        lastName: "Galindo",
        phone: "933018831",
        email: "lagh3.30@gmail.com",
        address: "Av. Petit Thouars",
        obesidad: false,
        hipertension: false,
        sedentario: true,
        SPC: false,
        data: [
            {
                value: 90,
                dateTime: String(Date.now()),
                type: 0
            }
        ]
    }
];

module.exports = {
    users
};
