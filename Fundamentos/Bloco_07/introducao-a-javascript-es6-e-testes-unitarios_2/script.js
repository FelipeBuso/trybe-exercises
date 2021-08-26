const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   // console.table(order)
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, ${order.phoneNumber}, ${order.address.street}, n° ${order.address.number}, AP ${order.address.apartment}.`);
// }

// customerInfo(order);

// console.table(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const pizza = {
    pizza: {
      muzzarela: {
        amount: 1,
        price: 20,
      },

      calabresa: {
        amount: 1,
        price: 20,
      },
    },
  }
  
  Object.assign(order.order, pizza);
  // console.table(order);
  console.log(`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$ ${order.payment.total},00 `);
}


orderModifier(order);
// console.table(order);