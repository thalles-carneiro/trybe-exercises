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
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  const finalString = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N°: ${number}, AP: ${apartment}.`;
  return console.log(finalString);
}

customerInfo(order);
console.log('--------------');

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const name = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const payment = order.payment.total = 50;
  const finalString = `Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${payment},00.`;
  return console.log(finalString);
}

orderModifier(order);