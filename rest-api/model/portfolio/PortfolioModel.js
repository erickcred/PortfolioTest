const Connection = require("../../database/Connection");

class PortfolioModel {

   static findAll(call) {
      return Connection.query("SELECT * FROM portfolio WHERE lixeira=0 LIMIT 100", call);
   }

   static findTrash(call) {
      return Connection.query("SELECT * FROM portfolio WHERE lixeira=1 LIMIT 100", call);
   }

   static findById(id, call) {
      return Connection.query(`SELECT * FROM portfolio WHERE id_portfolio=${id}`, call);
   }

   static create(portfolio, call) {
      return Connection.query(`INSERT INTO portfolio (descricao, detalhes) VALUES(?, ?)`, [portfolio.descricao, portfolio.detalhes], call);
   }

   static update(portfolio, id, call) {
      return Connection.query(`UPDATE portfolio SET descricao=?, detalhes=? WHERE id_portfolio=${id}`, [portfolio.descricao, portfolio.detalhes], call)
   }

   static trash(id, call) {
      return Connection.query(`UPDATE portfolio SET lixeira=1 WHERE id_portfolio=${id}`, call);
   }

   static delete(id, call) {
      return Connection.query(`DELETE FROM portfolio WHERE id_portfolio=${id}`, call);
   }
}

module.exports = PortfolioModel;