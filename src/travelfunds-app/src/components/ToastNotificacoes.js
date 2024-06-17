import { ToastAndroid } from 'react-native';

const toastedMessages = new Set();

export const toastGastosContribuicoes = (
  totalGastoValue,
  totalContribuicaoValue,
  viagemDestino
) => {
  let message = '';
  let toastLength = ToastAndroid.LONG;

  switch (true) {
    case totalGastoValue > totalContribuicaoValue:
      message = `Atenção! Gastos superam contribuições! Contribua para a viagem ${viagemDestino.toUpperCase()}`;
      break;
    case totalGastoValue === totalContribuicaoValue && totalGastoValue !== 0:
      message = `Atenção! Seus gastos atingiram o total das contribuições para a viagem ${viagemDestino.toUpperCase()}`;
      break;
    case totalGastoValue >= totalContribuicaoValue * 0.75 &&
      totalGastoValue !== 0:
      message = `Atenção! Seus gastos atingiram 75% das contribuições para a viagem ${viagemDestino.toUpperCase()}. Cuidado para não exceder o valor total!`;
      break;
    case totalGastoValue === totalContribuicaoValue / 2 &&
      totalGastoValue !== 0:
      message = `Atenção! Seus gastos atingiram 50% das contribuições para a viagem ${viagemDestino.toUpperCase()}`;
      break;
    case totalGastoValue >= totalContribuicaoValue * 0.25 &&
      totalGastoValue !== 0:
      message = `Atenção! Seus gastos atingiram 25% das contribuições para a viagem ${viagemDestino.toUpperCase()}`;
      break;
    default:
      message = '';
  }

  if (message !== '' && !toastedMessages.has(message)) {
    ToastAndroid.show(message, toastLength);
    toastedMessages.add(message);
  }
};

export const toastMeta = (metaValue, viagemDestino) => {
  let message = '';
  let toastLength = ToastAndroid.LONG;

  if (metaValue !== '') {
    message = `Meta definida para a viagem ${viagemDestino.toUpperCase()}: $${metaValue}`;
  } else {
    message = `Vamos definir a meta para a viagem ${viagemDestino.toUpperCase()} ? 😉`;
  }

  if (!toastedMessages.has(message)) {
    ToastAndroid.show(message, toastLength);
    toastedMessages.add(message);
  }
};

export const toastContribuicao = (
  totalContribuicaoValue,
  metaValue,
  viagemDestino
) => {
  let message = '';
  let toastLength = ToastAndroid.LONG;

  switch (true) {
    case totalContribuicaoValue >= metaValue && totalContribuicaoValue !== 0:
      message = `Parabéns! Você atingiu a meta de contribuições para a viagem ${viagemDestino.toUpperCase()}`;
      break;
    case totalContribuicaoValue >= metaValue * 0.75 &&
      totalContribuicaoValue !== 0:
      message = `Suas contribuições atingiram 75% da meta para a viagem ${viagemDestino.toUpperCase()}. Continue assim!`;
      break;
    case totalContribuicaoValue >= metaValue / 2 &&
      totalContribuicaoValue !== 0:
      message = `Suas contribuições atingiram metade da meta para viagem ${viagemDestino.toUpperCase()}. 🙂`;
      break;
    case totalContribuicaoValue >= metaValue * 0.25 &&
      totalContribuicaoValue !== 0:
      message = `Suas contribuições atingiram 25% da meta para a viagem ${viagemDestino.toUpperCase()}.`;
      break;
    default:
      message = `Você não tem contribuições para a viagem ${viagemDestino.toUpperCase()} 😢`;
  }

  if (message !== '' && !toastedMessages.has(message)) {
    ToastAndroid.show(message, toastLength);
    toastedMessages.add(message);
  }
};
