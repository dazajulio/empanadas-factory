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
    id: "mayorista",
    title: "DISTRIBUCIÓN AL MAYOR",
    items: [
      { id: "m1", name: "Empanadas Picnic de Carne Molida", description: "Caja x 50 unidades. Empanadas precocidas listas para freír o calentar.", price: 0, image: "/assets/PicnicdeCarne Molida.png", popular: true },
      { id: "m2", name: "Empanadas Picnic de Queso", description: "Caja x 50 unidades. Empanadas precocidas listas para freír o calentar.", price: 0, image: "/assets/PicnicdeQueso.png" },
      { id: "m3", name: "Empanadas Picnic de Pollo", description: "Caja x 50 unidades. Empanadas precocidas listas para freír o calentar.", price: 0, image: "/assets/PicnicdePollo.png" },
      { id: "m4", name: "Empanadas Picnic de Cazón", description: "Caja x 50 unidades. Empanadas precocidas listas para freír o calentar.", price: 0, image: "/assets/PicnicdeCazón.png" }
    ]
  }
];
