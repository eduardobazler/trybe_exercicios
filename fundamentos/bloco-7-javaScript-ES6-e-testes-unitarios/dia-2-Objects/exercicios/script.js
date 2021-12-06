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
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const mesage = `Olá ${order['name']}, entrega para ${order.order.delivery.deliveryPerson}, Telefone: ${order.phoneNumber};
  Rua: ${order.address.street}, N°: ${order.address.number}, ${order.address.apartment}`;
  console.log(mesage);

}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.order.name = 'Eduardo Bazler'
  const mesage = `Olá ${order.order.name}, o total do pedido é: ${order.payment.total} reais`;
  console.log(mesage);
}

orderModifier(order);