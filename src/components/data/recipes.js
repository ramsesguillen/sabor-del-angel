const recipes = [
    {
        id: 'pescado-ahumado-al-natural',
        title: 'Pescado Ahumado al Natural',
        description: '1 lonja de pescado ahumado “sabor del ángel” (4 porciones)[...] De una lonja de pescado ahumado “sabor del ángel”, repartir en porciones de 75 gr de pescado ahumado y servir en un plato extendido[...] ',
        ingredients: [
            '1 lonja de pescado ahumado “sabor del ángel” (4 porciones)',
            '1 aguacate grande (3 rebanas por porción)',
            'Pico de gallo (Tomate, cebolla, chile serrano, cilantro, limón, sal al gusto)',
            'Limón',
            'Salsa de molcajete ',
            'Tortillas 3 pzs por porción ',
        ],
        steps: [
            'De una lonja de pescado ahumado “sabor del ángel”, repartir en porciones de 75 gr de pescado ahumado y servir en un plato extendido.',
            'Cortar el aguacate en 4 pedazos y posteriormente rebanar cada una para cada porción.',
            'Servir pico de gallo (checar preparación de pico de gallo al gusto)',
            'Acompañar con una salsa de molcajete. (checar preparación de salsa al gusto)',
            'Servir en forma de taco para degustar toda la preparación.             ',
        ],
        img: 'al-natural.JPG'
    },
    {
        id: 'escabeche-de-pescado-ahumado',
        title: 'Escabeche de Pescado Ahumado',
        description: 'Una lonja de pescado ahumado “sabor del ángel” ( 4 porciones )[...] Desmenuzar o deshebrar la lonja de pescado ahumado “sabor del ángel”.[...]',
        ingredients: [
            'Una lonja de pescado ahumado “sabor del ángel” ( 4 porciones )',
            '6 Tomate',
            '1 Cebolla',
            '2 dientes de ajo ',
            '2 Chiles serrano  ',
            'Un rollito de cilantro ',
            'Una lata mediana de chiles de rajas en vinagre.',
            'Una pastilla de Nortomate.',
            'Sal al gusto.',
        ],
        steps: [
            'Desmenuzar o deshebrar la lonja de pescado ahumado “sabor del ángel”.',
            'Picar en “small dice “cuadritos pequeños el tomate, la cebolla, el chile, el cilantro.',
            'Picar finamente el ajo.',
            'En una sartén, previamente calentado, verter un poco de aceite y freír el ajo, posteriormente dejar caer el tomate y la cebolla hasta que se fría.',
            'Verter el pescado y revolver con los ingredientes anteriores.',
            'Verter espolvoriadamente el cilandro por encima de la mezcla anterior y seguir revolviendo',
            'Verter el chile de rajas en vinagre previamente picado y seguir mezclando.',
            'Dejar caer la pastilla de Nortomate y mezclar hasta que se desintegre, y ponerle sal al gusto.',
            'Seguir revolviendo para que no se queme hasta que se consuma el jugo de tomate a fuego lento. ',
            'Servir en plato extendido y acompañarlo con tostadas doradas y salsa de habanero.',
        ],
        img: 'escabeche.JPG'
    },
    {
        id: 'ensalada-de-pescado-ahumado',
        title: 'Ensalada de Pescado Ahumado',
        description: 'Una lonja de pescado ahumado “sabor del ángel”  ( 4 porciones )[...] Desmenuzar o deshebrar la lonja de pescado ahumado “sabor del ángel”.[...]',
        ingredients: [
            'Una lonja de pescado ahumado “sabor del ángel”  ( 4 porciones )',
            '6 Tomate',
            '1 Cebolla',
            '2 Chiles serrano  ',
            'Un rollito de cilantro ',
            'Una lata mediana de chiles de rajas en vinagre.',
            'Una lata de ensalada de verduras. ',
            '2 cucharadas de mayonesa o al gusto.',
            'Sal al gusto.',
        ],
        steps: [
            'Desmenuzar o deshebrar la lonja de pescado ahumado “sabor del ángel”.',
            'Picar en “small dice “cuadritos pequeños el tomate, la cebolla, el chile, el cilantro.',
            'En un Bold verter todos los ingredientes: la carne de pescado, la verdura picada, la lata de chiles en vinagre previamente picada y la lata de verdura previamente escurrida.',
            ' Añadir 2 cucharadas de mayonesa y mezclar.',
            'Servir en plato extendido y acompañar con tostadas doradas y salsa de habanero.',
        ],
        img: 'ensalada.jpg'
    },
    {
        id: 'caldillo-de-pescado-ahumado-con-nopales-y-huevo',
        title: 'Caldillo de Pescado Ahumado con Nopales y Huevo',
        description: '1 lonja de pescado ahumado “sabor del ángel” (4 porciones)[...] Deshebrar la lonja de pescado ahumado en pedazos grandes[...] ',
        ingredients: [
            '1 lonja de pescado ahumado “sabor del ángel” (4 porciones)',
            '6 nopales limpios',
            '6 huevos',
            '4 Tomates',
            '½ Cebolla',
            '2 dientes de Ajo',
            'Epazote',
            'Sal',
            'Aceite',
        ],
        steps: [
            'Deshebrar la lonja de pescado ahumado en pedazos grandes',
            'Cocer los nopales y escurrir',
            'Hacer los huevos en torta ',
            'Licuar el tomate, la cebolla y el ajo',
            'En una cacerola calentar un chorrito de aceite, posteriormente sofreír lo que se licuo anteriormente.',
            'Dejar caer los trozos de pescado ahumado “sabor del ángel”, los nopales, el huevo en torta en pedazos.',
            'Añadir 1 y ½ de agua y dejar hervir, sazonar con epazote y sal al gusto',
            'Servir en plato hondo, acompañar con cebolla y chile habanero picado.',
        ],
        img: 'caldillo.JPG'
    },
    {
        id: 'salpicon-de-pescado-ahumado',
        title: 'Salpicón de Pescado Ahumado',
        description: 'Una lonja de pescado ahumado “sabor del ángel”[...] Picar finamente la carne de pescado ahumado “sabor del ángel” y ponerla en un bold.[...]',
        ingredients: [
            'Una lonja de pescado ahumado “sabor del ángel”',
            '2 cebollas moradas medianas',
            '1 manojo de hierbabuena',
            'Limón al gusto.',
            '5 Rábanos',
        ],
        steps: [
            'Picar finamente la carne de pescado ahumado “sabor del ángel” y ponerla en un bold.',
            'Picar finamente la cebolla, la hierbabuena y el rebano y añadir al bold.',
            'Mezclar todos los ingredientes, agregando por ultimo jugo de limón y sal al gusto.',
            'Servir en plato extendido y acompañarlo con tostadas, y salsa de habanero.',
        ],
        img: 'salpicon.JPG'
    },
];

export default recipes;