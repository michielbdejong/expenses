var transactions = {};
  function formatDate(date) {
    return date.split('/').join('');
  }
  function reportTransfer(from, to, date, comment, amount, currency) {
    if(!transactions[formatDate(date)]) {
      transactions[formatDate(date)]=[];
    }
    transactions[formatDate(date)].push({
      from: from,
      to: to,
      comment: comment,
      amount: amount,
      currency: currency
    });
  }

  function declaration(person, date, comment, euros) {
    reportTransfer(person, 'pot', date, comment, euros, 'EUR');
  }
  function bulkDeclaration(person, date, items) {
    for(var i in items) {
      declaration(person, date, i, items[i]);
    }
  }
  function transfer(from, to, date, euros) {
    reportTransfer(from, to, date, 'transfer', euros, 'EUR');
  }
  function reportDonation(comment, euros, acceptor, date) {
    reportTransfer('pot', acceptor, date, 'donation', euros, 'EUR');
  }
