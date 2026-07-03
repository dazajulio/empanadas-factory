export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "venezolanas",
    title: "Empanadas Venezolanas",
    items: [
      { id: "v1", name: "Empanada de carne mechada", description: "Fried empanada with shredded beef", price: 9.99, image: "/assets/empanada1.jpg", popular: true },
      { id: "v2", name: "Empanada Pabellón", description: "Fried Corn Dough Empanada stuffed with Shredded beef, black beans, sweet plantains, and white cheese.", price: 9.99, image: "/assets/empanada2.jpg", popular: true },
      { id: "v3", name: "Empanada de carne molida", description: "Fried empanada with ground beef", price: 9.99, image: "/assets/empanada3.jpg" },
      { id: "v4", name: "Empanada de pollo", description: "Fried empanada with chicken", price: 9.99, image: "/assets/empanada4.jpg" },
      { id: "v5", name: "Empanada de queso", description: "Fried cheese empanada", price: 9.99, image: "/assets/empanada6.jpg", popular: true },
      { id: "v6", name: "Empanada de Caraota con Queso", description: "Fried empanada with black beans and cheese", price: 9.99, image: "/assets/empanada5.jpg" },
      { id: "v7", name: "Empanada de Marisco", description: "Fried empanada with seafood.", price: 6.99, image: "/assets/empanada7.jpg" },
      { id: "v8", name: "Empanada de Cazon", description: "Fish empanada", price: 6.99, image: "/assets/empanada8.jpg" }
    ]
  },
  {
    id: "colombianas",
    title: "Empanadas Colombianas",
    items: [
      { id: "c1", name: "Empanada de Queso Colombiana", description: "Fried corn dough empanada filled with melted cheese.", price: 4.50, image: "/assets/empanada6.jpg" },
      { id: "c2", name: "Empanada de carne Colombiana", description: "Fried corn dough empanada stuffed with shredded beef.", price: 4.50, image: "/assets/empanada1.jpg" },
      { id: "c3", name: "Empanada de Pollo Colombiana", description: "Fried corn dough empanada stuffed with shredded chicken.", price: 4.50, image: "/assets/empanada4.jpg" }
    ]
  },
  {
    id: "otros",
    title: "Otros Gustos",
    items: [
      { id: "o1", name: "Croquetas", description: "Comes with 3 croquetas", price: 6.50, image: "/assets/empanada7.jpg" },
      { id: "o2", name: "Tequeños", description: "Comes with 3 tequeños. Choice of cheese and Guava with cheese", price: 9.99, image: "/assets/trailer1.jpg" },
      { id: "o3", name: "Empanadas Cubanas", description: "Fried empanada with a Cuban-style savory filling in a crispy pastry shell.", price: 4.50, image: "/assets/empanada3.jpg" }
    ]
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { id: "b1", name: "Jugo de Maracuyá", description: "Tangy, tropical passion fruit juice.", price: 5.99, image: "/assets/empanada2.jpg" },
      { id: "b2", name: "Papelón con Limón", description: "Venezuelan drink of papelón (unrefined cane sugar) and lemon.", price: 5.99, image: "/assets/empanada4.jpg" },
      { id: "b3", name: "Malta Lata", description: "Venezuelan malt beverage", price: 3.50, image: "/assets/empanada1.jpg" },
      { id: "b4", name: "Sodas", description: "Assorted carbonated soft drinks.", price: 3.00, image: "/assets/empanada3.jpg" },
      { id: "b5", name: "Frescolita", description: "Venezuelan red soda", price: 3.50, image: "/assets/empanada6.jpg" },
      { id: "b6", name: "Agua Botella", description: "Bottled water", price: 1.80, image: "/assets/empanada7.jpg" }
    ]
  },
  {
    id: "cafe",
    title: "Café",
    items: [
      { id: "f1", name: "Colada", description: "Cuban-style espresso in a small cup for sharing.", price: 2.99, image: "/assets/empanada8.jpg" },
      { id: "f2", name: "Café Expresso", description: "Concentrated espresso shot.", price: 1.85, image: "/assets/empanada5.jpg" },
      { id: "f3", name: "Café Cortadito", description: "Espresso cut with a small amount of milk, Cuban-style.", price: 2.99, image: "/assets/empanada4.jpg" },
      { id: "f4", name: "Café con Leche 8 Onzas", description: "Espresso with hot milk, 8 oz.", price: 3.99, image: "/assets/empanada1.jpg" },
      { id: "f5", name: "Café con Leche 12 Onzas", description: "Espresso mixed with hot milk, 12 oz.", price: 4.99, image: "/assets/empanada2.jpg" }
    ]
  }
];
