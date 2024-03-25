const products = [
    {
        id: '1',
        name: "Marquisse",
        price: 15000,
        category: 'tortasclasicas',
        img: 'https://media.ambito.com/p/2ead1722003f5d92e8b2d4af54109021/adjuntos/239/imagenes/040/922/0040922370/torta-marquisejpg.jpg',
        stock: 5,
        description: 'Descripción'
    },

    {
        id: '2',
        name: "Rogel",
        price: 20000,
        category: 'tortasclasicas',
        img: 'https://www.clarin.com/img/2020/08/27/PKMxPZps0_1200x630__1.jpg',
        stock: 5,
        description: 'Descripción'
    },

    {
        id: '3',
        name: "Havanette",
        price: 18000,
        category: 'tortasclasicas',
        img: 'https://i.ytimg.com/vi/LSnKnXTii1s/maxresdefault.jpg',
        stock: 5,
        description: 'Descripción'
    },

    {
        id: '4',
        name: "Medialunas",
        price: 4000,
        category: 'panaderia',
        img: 'https://cocinachilena.cl/wp-content/uploads/2019/03/medialunas-argentinas-31-scaled.jpg',
        stock: 120,
        description: 'Descripción'
    },

    {
        id: '5',
        name: "Budin de Algarroba",
        price: 7000,
        category: 'panaderia',
        img: 'https://img-global.cpcdn.com/recipes/592b4faaa14bfa31/680x482cq70/budin-de-algarroba-y-chocolate-foto-principal.jpg',
        stock: 5,
        description: 'Descripción'
    },

    {
        id: '6',
        name: "Cheesecake",
        price: 18000,
        category: 'cheesecakes',
        img: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/7f9ebeaceea909a80306da27f0495c59.jpg?itok=jvnFYyGL',
        stock: 5,
        description: 'Descripción'
    },

    {
        id: '7',
        name: "Cheesecake Oreo",
        price: 18000,
        category: 'cheesecakes',
        img: 'https://aclassictwist.com/wp-content/uploads/2022/06/no-bake-Oreo-cheesecake-19.jpg',
        stock: 5,
        description: 'Descripción'
    },
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => { 
            resolve(products)
         }, 500)
    })
}

export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}
