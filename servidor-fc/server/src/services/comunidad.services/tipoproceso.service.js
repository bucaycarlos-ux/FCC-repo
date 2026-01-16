const { models } = require('../../libs/sequelize');

class TipoprocesoService  { 
  
    constructor() {}

    async find() {
      const res = await models.TipoProceso.findAll();   //--- nombre del models = models.TipoProceso
      return res;
    }

    async findOne(id) {
      const res = await models.TipoProceso.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.TipoProceso.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }
  
  }
  
  module.exports = TipoprocesoService;  //---- module.exports = exporta la Clase de Servicio 
//------------permite que se pueda acceder caso contrario estar[ia encapsulada y no tendr[ia acceso