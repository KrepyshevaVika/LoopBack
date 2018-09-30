/*const { Pool } = require('pg');
const connectionString = 'postgresql://postgres:1234@127.0.0.1:5432/mydatabase'

const pool = new Pool({
  connectionString: connectionString,
})*/
module.exports = function(app) {

    app.dataSources.database.automigrate(function(err) {
      if (err) throw err;
   
      app.models.node_type.create([{
        name: 'control node',
        is_endpoint: false
      },{
        name: 'storage node',
        is_endpoint: true
      },{
        name: 'render node',
        is_endpoint: true
      },{
        name: 'node js',
        is_endpoint: true
      },{
        name: 'pacs',
        is_endpoint: true
      },{
        name: 'nginx',
        is_endpoint: false
      }], function(err) {
        if (err) throw err;
      });

      app.models.node.create([{
        name: 'control node',
        node_id: null,
        type_id: 1
      },{
        name: 'node js server 1',
        node_id: null,
        type_id: 4
      },{
        name: 'node js server 2',
        node_id: null,
        type_id: 4
      },{
        name: 'storage node 1',
        node_id: 1,
        type_id: 2
      },{
        name: 'storage node 2',
        node_id: 1,
        type_id: 2
      },{
        name: 'render node 1',
        node_id: 1,
        type_id: 3
      }], function(err) {
        if (err) throw err;
      });

      console.log('Models created.');

      //console.log(app.dataSources.database.connector);
      app.dataSources.database.connector.execute(`CREATE FUNCTION trigger_change_count_child_after_ins()
      RETURNS trigger AS
      $BODY$
      DECLARE
          tmp node%ROWTYPE;
      BEGIN
        SELECT * INTO tmp FROM node WHERE id = NEW.node_id;
      
        tmp.count_child = tmp.count_child + 1;
        
        UPDATE node
        SET count_child = tmp.count_child
        WHERE id = NEW.node_id; 
        
        return NEW;
      END;
      $BODY$
        LANGUAGE plpgsql;`, null, (err, resultObjects) => {
        
        })
     /* app.dataSources.database.query(`CREATE FUNCTION trigger_change_count_child_after_ins()
      RETURNS trigger AS
      $BODY$
      DECLARE
          tmp node%ROWTYPE;
      BEGIN
        SELECT * INTO tmp FROM node WHERE id = NEW.node_id;
      
        tmp.count_child = tmp.count_child + 1;
        
        UPDATE node
        SET count_child = tmp.count_child
        WHERE id = NEW.node_id; 
        
        return NEW;
      END;
      $BODY$
        LANGUAGE plpgsql;`);*/

     /* pool.connect()
      .then(client => {
        return client.query(`CREATE FUNCTION trigger_change_count_child_after_ins()
        RETURNS trigger AS
        $BODY$
        DECLARE
            tmp node%ROWTYPE;
        BEGIN
          SELECT * INTO tmp FROM node WHERE id = NEW.node_id;
        
          tmp.count_child = tmp.count_child + 1;
          
          UPDATE node
          SET count_child = tmp.count_child
          WHERE id = NEW.node_id; 
          
          return NEW;
        END;
        $BODY$
          LANGUAGE plpgsql;`)
          .then(() => {
            client.query(`CREATE TRIGGER change_count_child_after_ins
            AFTER INSERT ON node FOR EACH ROW  
            EXECUTE PROCEDURE trigger_change_count_child_after_ins();`)
          })
          .catch(e => {
            console.log(e.stack)
          })
      })*/

      console.log('Models triggers.');
    });
  };