function EntitySchema(name, entityParams = {}, entityConfig = {}) {
    const idAttribute = entityConfig.idAttribute || 'id';
    this.name = name;
    this.idAttribute = idAttribute;
    this.init(entityParams)
  }
  EntitySchema.prototype.getName = function() {
    return this.name;
  };
  EntitySchema.prototype.getId = function(data) {
    const key = this.idAttribute;
    return data[key];
  };
  EntitySchema.prototype.init = function(entityParams) {
    if (!this.schema) {
      this.schema = {};
    }
    for (let key in entityParams) {
      if (entityParams.hasOwnProperty(key)) {
        this.schema[key] = entityParams[key];
      }
    }
  };
  
  const schema = {
    Entity: EntitySchema,
  };

  module.exports = schema;
