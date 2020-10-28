const gardens =
[
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/1_1421153854.962.jpg?itok=HQS5E_Th",
        name:"Parque Juan Carlos I",
        surface:"1.473.974 m²", 
        district: "Barajas",
        trees: "14.651",
        bush: "-",
        bushy: "72.245 m²",
        map:"https://www.google.com/maps/place/Parque+Juan+Carlos+I/@40.4609257,-3.6072038,17z/data=!3m1!4b1!4m5!3m4!1s0xd422fb50048180f:0x33bd5b6547369913!8m2!3d40.4609216!4d-3.6050151"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/dsc04934_0.jpg?itok=2VqYXXQZ",
        name:"Jardín Histórico El Capricho de la Almeda de Osuna",
        surface:"171.630 m²", 
        district: "Barajas",
        trees: "3.875",
        bush: "615",
        bushy: "90.113 m²",
        map:"https://www.google.com/maps/place/Parque+El+Capricho/@40.4558623,-3.6013396,17z/data=!3m1!4b1!4m5!3m4!1s0xd422fca8a58cf5b:0xe38c4cbd6db51bc1!8m2!3d40.4558582!4d-3.5991509"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/dehesadelavilla2_1404991296.202.jpg?itok=OCuXoC2V",
        name:"Parque Dehesa de la Villa",
        surface:"645.309 m²", 
        district: "Moncloa-Aravaca",
        trees: "9.240",
        bush: "481",
        bushy: "17.580 m²",
        map:"https://www.google.com/maps/place/Dehesa+de+la+Villa/@40.4596303,-3.7216545,17z/data=!3m1!4b1!4m5!3m4!1s0xd4229b6ea69bc9f:0x35434d322f66d865!8m2!3d40.4596262!4d-3.7194658"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/dama_del_manzanares_escalera.jpg?itok=nqqsKWN2",
        name:"Parque Lineal del Manzanares",
        surface:"447.342 m²", 
        district: "Usera",
        trees: "6.831",
        bush: "1.030",
        bushy: "28.913 m²",
        map:"https://www.google.com/maps/place/Parque+Lineal+del+Manzanares/@40.3777527,-3.6887607,17z/data=!3m1!4b1!4m5!3m4!1s0xd42265ea086a5d1:0x979eec1d3143e734!8m2!3d40.3777486!4d-3.686572"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/recursosturisticos/infoturistica/Top10Puente_1392309099.188.jpg",
        name:"Parque Madrid Río",
        surface:"1.210.881 m²", 
        district: "Arganzuela",
        trees: "32.644",
        bush: "460.054",
        bushy: "137.750 m²",
        map:"https://www.google.com/maps/place/Parque+Madrid+R%C3%ADo/@40.4130973,-3.7256453,17z/data=!3m1!4b1!4m5!3m4!1s0xd42274d0f3ae8db:0xb0d64bb28285be17!8m2!3d40.4130932!4d-3.7234566"
    },
    {
        pic:"https://www.vidademadrid.com/es/wp-content/uploads/2020/05/parque-juan-pablo-ii.jpg",
        name:"Parque Juan Pablo II",
        surface:"104.100 m²", 
        district: "Hortaleza",
        trees: "1.150",
        bush: "218",
        bushy: "36.000 m²",
        map:"https://www.google.com/maps/place/Parque+Juan+Pablo+II/@40.4547766,-3.6443603,14z/data=!4m8!1m2!2m1!1sParque+Juan+Pablo+II!3m4!1s0xd422f026d6b6759:0x45a713f402fedd5!8m2!3d40.4547766!4d-3.6268508"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/retiro_0173.jpg?itok=Wz1tVhi3",
        name:"Jardines de El Buen Retiro",
        surface:"1.177.300 m²", 
        district: "Retiro",
        trees: "19.859",
        bush: "7.922",
        bushy: "27.450 m²",
        map:"https://www.google.com/maps/search/Jardines+de+El+Buen+Retiro/@40.4148336,-3.6888121,16z/data=!3m1!4b1"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/parqueoeste_07.jpg?itok=WCGSu9AH",
        name:"Parque del Oeste",
        surface:"788.100 m²", 
        district: "Moncloa-Aravaca",
        trees: "8.491",
        bush: "1.129",
        bushy: "32.962 m²",
        map:"https://www.google.com/maps/place/Parque+del+Oeste/@40.4439148,-3.6885015,12z/data=!4m8!1m2!2m1!1sParque+del+Oeste!3m4!1s0xd422814a947626d:0xef26c37465a04be4!8m2!3d40.4307702!4d-3.7262232"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/676653422_812010124428_adj.jpg?itok=zKBXdPBl",
        name:"Quinta de la Fuente del Berro",
        surface:"74.000 m²", 
        district: "Salamanca",
        trees: "1.419",
        bush: "-",
        bushy: "-",
        map:"https://www.google.com/maps/place/Quinta+de+la+Fuente+del+Berro/@40.4235772,-3.6632547,17z/data=!3m1!4b1!4m5!3m4!1s0xd422f4d42264055:0x47fe0fdbb20943c!8m2!3d40.4235731!4d-3.661066"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/quintadelosmolinosalmendros.jpg?itok=TdZEd9o8",
        name:"Parque Quinta de los Molinos",
        surface:"212.619 m²", 
        district: "San Blas-Canillejas",
        trees: "7.688",
        bush: "195",
        bushy: "38.555 m²",
        map:"https://www.google.com/maps/place/Parque+Quinta+de+los+Molinos/@40.4410305,-3.6291592,17z/data=!3m1!4b1!4m5!3m4!1s0xd422f0eabef4629:0x291353462ba9e77a!8m2!3d40.4410264!4d-3.6269705"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/1935098181_18122009141729_adj.jpg?itok=JEgf2YfX",
        name:"Parque de la Casa de Campo",
        surface:"15.355.200 m²", 
        district: "Moncloa-Aravaca",
        trees: "-",
        bush: "-",
        bushy: "19.860.000 m²",
        map:"https://www.google.com/maps/place/Casa+de+Campo/@40.4147633,-3.7389518,15z/data=!4m8!1m2!2m1!1sParque+de+la+Casa+de+Campo!3m4!1s0xd4187ed3ff316b5:0xbca8ba15bd571f27!8m2!3d40.419748!4d-3.7489783"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/jardin_principe_de_anglona_1.jpg?itok=yknZmy-n",
        name:"Jardines del Príncipe de Anglona",
        surface:"678 m²", 
        district: "Centro",
        trees: "21",
        bush: "14",
        bushy: "149 m²",
        map:"https://www.google.com/maps/place/El+Jard%C3%ADn+del+Pr%C3%ADncipe+de+Anglona/@40.413523,-3.7136304,17z/data=!3m1!4b1!4m5!3m4!1s0xd4228787ce7985f:0xa264892bf6dfe8ed!8m2!3d40.413523!4d-3.7114417"
    },
    {
        pic:"https://www.secretosdemadrid.es/wp-content/uploads/2017/08/10931537644_4d0cee0d56_b-1024x516.jpg",
        name:"Jardines de la Plaza de Oriente, Lepanto y Cabo Noval",
        surface:"29.437 m²", 
        district: "Centro",
        trees: "261",
        bush: "25.968",
        bushy: "-",
        map:"https://www.google.com/maps/place/Jardines+del+Cabo+Noval/@40.4192022,-3.7144733,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287a6dde9949:0x45e618625bc38408!8m2!3d40.4191981!4d-3.7122846"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/quinta_de_torre_arias_0.jpg?itok=-NRsXfKg",
        name:"Quinta de Torre Arias",
        surface:"170.000 m²", 
        district: "San Blas-Canillejas",
        trees: "-",
        bush: "-",
        bushy: "-",
        map:"https://www.google.com/maps/place/Parque+Quinta+de+Torre+Arias/@40.4438013,-3.6206499,17z/data=!3m1!4b1!4m5!3m4!1s0xd422fa6f5b68429:0x76c094ba5ea8bec4!8m2!3d40.4437972!4d-3.6184612"
    },
    {
        pic:"https://www.esmadrid.com/sites/default/files/recursosturisticos/infoturistica/62015739_21122009144237_adj.jpg",
        name:"Jardines de Sabatini",
        surface:"25.400 m²", 
        district: "Centro",
        trees: "317",
        bush: "-",
        bushy: "-",
        map:"https://www.google.com/maps/place/Jardines+de+Sabatini/@40.4203361,-3.7161926,17z/data=!3m1!4b1!4m5!3m4!1s0xd42287a7731addf:0xdae626504cda711!8m2!3d40.420332!4d-3.7140039"
    }
];

export default gardens;