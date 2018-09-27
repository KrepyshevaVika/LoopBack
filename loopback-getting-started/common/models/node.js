'use strict';
//var ds = require('../../server/datasources/database')('postgresql');
module.exports = function(app) {
    console.log(app);
    app.dataSources.database.automigrate('node', function(err) {
        if (err) throw err;
     
        app.models.node.create([
          {name: 'Bel Cafe'},
          {name: 'Three Bees Coffee House'},
          {name: 'Caffe Artigiano'},
        ], function(err, nodes) {
          if (err) throw err;
     
          console.log('Models created: \n', nodes);
        });
      });
};
