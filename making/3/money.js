remoteStorage.defineModule('money', function(myPrivateBaseClient, myPublicBaseClient) {
  return {
    name: 'money',
    dataHints: {
    },
    exports: {
      setDayBusiness: function(tab, year, month, day, transactions, endBalances) {
        console.log([tab, year, month, day, transactions, endBalances]);
      }
    }
  };
});
