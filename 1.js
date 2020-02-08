function biodata(nama, umur, alamat, hobi, status, sekolah, keterampilan, pengalaman) {
    let person = {
        name: nama,
        age: umur,
        address : alamat,
        hobbies : hobi,
        is_married : status,
        list_school : sekolah,
        skills : keterampilan,   
        interest_in_coding : pengalaman
}

return JSON.stringify(person);
}

console.log(biodata(
    'Kemal Reza',
     18,
    'ds. Sukamukti kec. Jalaksana kab. Kuningan',
    ['coding', 'playing game', 'swim'],
    false, 
    [{
        key_name: "SDN 1 SUKAMUKTI",
        year_in: "2007",
        year_out: "2013",
        major: "null"
    },
    {
        key_name: "MTsN 7 KUNINGAN",
        year_in: "2013",
        year_out: "2016",
        major: "null"
    },
    {
        key_name: "SMKN 3 KUNINGAN",
        year_in: "2016",
        year_out: "2019",
        major: "Multimedia"
    }],
    [{
        skills_name: "programming",
        level: "beginner"
    },
    {
        skills_name: "editing video",
        level: "advanced"
    }],
    false));