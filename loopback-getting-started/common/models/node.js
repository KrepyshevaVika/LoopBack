'use strict';

module.exports = function(Node) {
    /*var ds = Node.dataSource;
        var sql = "SELECT * FROM node";

        console.log(Node.dataSource);
        ds.database.query(sql);*/
  /*  Node.afterCreate = function(next) {
        if (this.node_id)
            Node.findById(this.node_id)
            .then(function(instance) {
                Node.upsertWithWhere({where: {id: instance.id}}, {count_child: instance.count_child+1})
                .then(function(obj) {

                }).catch(function(err){
                    throw err;
                })
            }).catch(function(err){
                throw err;
            })
        next();
    };     */ 
};
