let quartosDisponiveis = 5;
let reservaConfirmada = true;

let statusReserva = (reservaConfirmada && quartosDisponiveis > 0) ? "Reserva confirmada" : (quartoDisponiveis > 0) ? "Aguardado  confirmacao" : "Sem quartos disponiveis"

console.log(statusReserva); // saida: "Reserva confirmada"