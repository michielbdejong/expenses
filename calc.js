var transactions = [];
  function formatDate(date) {
    return date.split('/').join('');
  }
  function reportTransfer(from, to, date, comment, amount, currency) {
    transactions.push({
      from: from,
      to: to,
      comment: comment,
      amount: amount,
      currency: currency,
      date: formatDate(date)
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
  function reportDonation(comment, euros, acceptor, date, donator) {
    reportTransfer(donator, acceptor, date, comment, euros, 'EUR');
    reportTransfer('pot', donator, date, 'Thank you for your donation', euros, 'EUR');//donations don't establish credit, they are immediately paid off by saying thank you
  }
