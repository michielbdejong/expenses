remoteStorage.defineModule('money', function(myPrivateBaseClient, myPublicBaseClient) {
  return {
    name: 'money',
    dataHints: {
    },
    exports: {
      example: function() {
        //this would be a method an app could call as remoteStorage.changeMe.example()
      }
    }
  };
});
