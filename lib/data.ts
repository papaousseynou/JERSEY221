import bcrypt from 'bcryptjs';

const data = {
    users:[{
        name: 'Gontech',
        email: 'gontech88@gmail.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
   {
        name: 'Talla',
        email: 'talla@gmail.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    },
],
products:[
    {
        name:'MAILLOT SENEGAL DOMICILE 2022/2023',
        slug:'Maillot-Senegal-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/galsen1.jpg',
        price:10500,
        brand:'Puma',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot du Sénégal Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football sénégalais. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Puma, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
        isFeatured:true,
        banner:'/images/banner1.jpeg',

    },
    {
        name:'MAILLOT MAROC DOMICILE 2022/2023',
        slug:'Maillot-Maroc-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/maroc1.webp',
        price:15000,
        brand:'Puma',
        rating:4,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot du Maroc à Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football marocain. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Puma, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
        isFeatured:true,
        banner:'/images/banner2.jpeg',

    },
    {
        name:'MAILLOT SENEGAL COLLECTOR 2022/2023',
        slug:'Maillot-Senegal-collector',
        category:'EQUIPES NATIONALES',
        image: '/images/galsencollector.webp',
        price:12000,
        brand:'Puma',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot COLLECTOR de l\'équipe nationale du Sénégal 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football sénégalais. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Puma, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',


    },
  
    {
        name:'MAILLOT MAROC EXTERIEUR 2022/2023',
        slug:'Maillot-Maroc-exterieur',
        category:'EQUIPES NATIONALES',
        image: '/images/maroc2.webp',
        price:12000,
        brand:'Puma',
        rating:4,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot du Maroc à l\'EXTERIEUR 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football marocain. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Puma, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
        
      

    },
    {
        name:'MAILLOT ALGERIE DOMICILE 2022/2023',
        slug:'Maillot-Algérie-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/algerie1.webp',
        price:5000,
        brand:'Adidas',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot de l\'Algerie  à Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football algerien. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Adidas, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
       

    },
    {
        name:'MAILLOT NIGERIA DOMICILE 2022/2023',
        slug:'Maillot-Nigeria-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/nigeria1.jpg',
        price:5000,
        brand:'Nike',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot Nigerian à Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football nigérian. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Nike, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',

  

    },
    {
        name:'MAILLOT ALGERIE EXTERIEUR 2022/2023',
        slug:'Maillot-Algerie-exterieur',
        category:'EQUIPES NATIONALES',
        image: '/images/algerie2.webp',
        price:12000,
        brand:'Adidas',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot de l\'Algerie à l\' Exterieur 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football algerien. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Adidas, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
  
       

    },
    {
        name:'MAILLOT COTE D\'IVOIRE DOMICILE 2022/2023',
        slug:'Maillot-civ-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/civ1.webp',
        price:17000,
        brand:'Puma',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot de la COTE D\'IVOIRE à Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football ivoirien. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Puma, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
     

    },
    {
        name:'MAILLOT NIGERIA EXTERIEUR 2022/2023',
        slug:'Maillot-Nigeria-exterieur',
        category:'EQUIPES NATIONALES',
        image: '/images/nigeria2.jpg',
        price:12000,
        brand:'Puma',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot Nigerian à l\'Exterieur 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football nigérian. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Nike, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',

     

    },
    {
        name:'MAILLOT TUNISIE EXTERIEUR 2022/2023',
        slug:'Maillot-Tunisie-exterieur',
        category:'EQUIPES NATIONALES',
        image: '/images/tunis2.webp',
        price:9000,
        brand:'Kappa',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot Tunisien à l\'Exterieur 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football tunisien. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Kappa, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
 
     
    },
    {
        name:'MAILLOT TUNISIE DOMICILE 2022/2023',
        slug:'Maillot-Tunisie-domicile',
        category:'EQUIPES NATIONALES',
        image: '/images/tunis1.webp',
        price:12000,
        brand:'Kappa',
        rating:4.5,
        numReviews:5,
        countInStock:20,
        description:'Découvrez le Maillot Tunisien à Domicile 2022/2023, une pièce emblématique qui capture l\'esprit et la passion du football tunisien. Ce maillot, conçu pour les fans dévoués, présente une élégance classique avec une touche de modernité. Fabriqué par Kappa, il arbore les couleurs nationales fièrement et est conçu pour offrir confort et performance sur et en dehors du terrain.',
  
     
    },
   
]
}
export default data

