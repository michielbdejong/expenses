remoteStorage.defineModule('money', function(myPrivateBaseClient, myPublicBaseClient) {
  return {
    name: 'money',
    dataHints: {
    },
    exports: {
      setDayBusiness: function(tab, year, month, day, transactions, endBalances) {
        var datePath = tab+'/'+year+'/'+month+'/'+day+'/';
        for(var i=0; i<transactions.length;i++) {
          myPrivateBaseClient.storeObject('transaction', datePath+'transaction/'+i, transactions[i]);
        }
        for(var i in endBalances) {
          myPrivateBaseClient.storeObject('balance', datePath+'balance/'+i, endBalances[i]);
        }
      },
      getTransactions: function(tab) {
        var transactions = [];
        var years = myPrivateBaseClient.getListing(tab+'/');
        for(var i=0;i<years.length;i++) {
          var months = myPrivateBaseClient.getListing(tab+'/'+years[i]);
          for(var j=0;j<months.length;j++) {
            var days = myPrivateBaseClient.getListing(tab+'/'+years[i]+months[j]);
            for(var k=0;k<days.length;k++) {
              var dayTransactions = myPrivateBaseClient.getListing(tab+'/'+years[i]+months[j]+days[k]+'transaction/');
              for(var l=0;l<dayTransactions.length;l++) {
                transactions.push(myPrivateBaseClient.getObject(tab+'/'+years[i]+months[j]+days[k]+'transaction/'+dayTransactions[l]));
              }
            }
          }
        }
        return transactions;
      },
      getParticipants: function(tab) {
        var participantsMap = {};
        var years = myPrivateBaseClient.getListing(tab+'/');
        for(var i=0;i<years.length;i++) {
          var months = myPrivateBaseClient.getListing(tab+'/'+years[i]);
          for(var j=0;j<months.length;j++) {
            var days = myPrivateBaseClient.getListing(tab+'/'+years[i]+months[j]);
            for(var k=0;k<days.length;k++) {
              var dayBalances = myPrivateBaseClient.getListing(tab+'/'+years[i]+months[j]+days[k]+'balance/');
              for(var l=0;l<dayBalances.length;l++) {
                participantsMap[dayBalances[l]]=true;
              }
            }
          }
        }
        var participants = [];
        for(var i in participantsMap) {
          participants.push(i);
        }
        return participants;
      }
    }
  };
});
