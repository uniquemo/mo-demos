const Schema = require('./schema');

//////////////// 范式化数据 start
/**
 * 范式化数据：
 * 1）将嵌套里面的entity替换成对应的id值（遍历，再递归调用）
 * 2）将对应的entity添加到entities里面（若是schema实例）
 */
const entityNormalize = function(data, schema, flatten, addEntity) {
  const currentData = Object.assign({}, data);
  const currentSchema = schema;
  Object.keys(currentSchema.schema).forEach(function(key) {
    const schema = currentSchema.schema[key];
    const value = flatten(currentData[key], schema, addEntity);
    currentData[key] = value;
  });
  addEntity(currentSchema, currentData);
  return currentSchema.getId(currentData);
}

// 非schema实例：1）对象类型  2）数组类型
// 非schema实例，只需将嵌套的entity解析成对应id值即可
const noEntityNormalize = function(data, schema, flatten, addEntity) {
  const object = Object.assign({}, data);
  const arr = [];
  let isArray = schema instanceof Array;
  Object.keys(schema).forEach(function(key) {
    if (isArray) {
      const localSchema = schema[key];
      const value = flatten(data[key], localSchema, addEntity);
      arr.push(value);
    } else {
      const localSchema = schema[key];
      const value = flatten(data[key], localSchema, addEntity);
      object[key] = value;
    }
  });

  if (isArray) {
    return arr;
  } else {
    return object;
  };
}

const addEntities = function(entities) {
  return function(schema, data) {
    const schemaKey = schema.getName();
    const id = schema.getId(data);
    if (!(schemaKey in entities)) {
      entities[schemaKey] = {};
    }
    const existingData = entities[schemaKey][id];
    if (existingData) {
      entities[schemaKey][id] = Object.assgin(existingData, data);
    } else {
      entities[schemaKey][id] = data;
    }
  }
};

const flatten = function(data, schema, addEntity) {
  if (typeof schema.getName === 'undefined') {
    return noEntityNormalize(data, schema, flatten, addEntity);
  }
  return entityNormalize(data, schema, flatten, addEntity);
}

const normalize = function(data, schema) {
  const entities = {};
  const addEntity = addEntities(entities);

  const result = flatten(data, schema, addEntity);
  return { entities, result };
};
//////////////// 范式化数据 end


//////////////// 反范式化数据 start
const entityDenormalize = function(id, schema, unflatten, getEntity, cache) {
  const entity = getEntity(id, schema);
  if (!cache[schema.getName()]) {
    cache[schema.getName()] = {};
  }
  if (!cache[schema.getName()][id]) {
    const entityCopy =  Object.assign({}, entity);
    // 存在schema嵌套的情况下要一级接着一级的往下递归
    Object.keys(schema.schema).forEach(function(key) {
      if (entityCopy.hasOwnProperty(key)) {
        const deepSchema = schema.schema[key];
        entityCopy[key] = unflatten(entityCopy[key], deepSchema);
      }
    });
    cache[schema.getName()][id] = entityCopy;
  }
  return cache[schema.getName()][id];
};

// 同样，有两种情况：1）对象  2）数组
const noEntityDenormalize = function(data, schema, unflatten) {
  const object = Object.assign({}, data);
  const arr = [];
  const isArray = schema instanceof Array;

  Object.keys(schema).forEach(function(key) {
    if (isArray) {
      if (object[key]) {
        object[key] = unflatten(object[key], schema[key]);
      }
      arr.push(unflatten(object[key], schema[key]));
    } else {
      if (object[key]) {
        object[key] = unflatten(object[key], schema[key]);
      }
    }
  });
  if (isArray) {
    return arr;
  }
  return object;
};

const getEntities = function(entities) {
  return function(entityOrId, schema) {
    const schemaKey = schema.getName();
    if (typeof entityOrId === 'object') {
      return entityOrId;
    }
    return entities[schemaKey][entityOrId];
  };
};

const getUnflatten = function(entities) {
  const cache = {};
  const getEntity = getEntities(entities);
  return function unflatten(data, schema) {
    if (typeof schema.getName === 'undefined') {
      return noEntityDenormalize(data, schema, unflatten);
    }
    return entityDenormalize(data, schema, unflatten, getEntity, cache);
  };
};

const denormalize = function(result, schema, entities) {
  return getUnflatten(entities)(result, schema);
}
//////////////// 反范式化数据 end


module.exports = {
  normalize,
  denormalize,
  schema: Schema,
};


///////////////// 测试
const originalData = {
  "id": "123",
  "author":  {
    "uid": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": {
    "total": 100,
    "result": [{
      "id": "324",
      "commenter": {
        "uid": "2",
        "name": "Nicole"
      }
    }]
  }
};

const user = new Schema.Entity('users', {}, {
  idAttribute: 'uid'
});
const comment = new Schema.Entity('comments', {
  commenter: user
});
const article = new Schema.Entity('articles', {
  author: user,
  comments: {
    result: [ comment ]
  }
});

const normalizedData = normalize(originalData, article);

const {result, entities} = normalizedData;
const denormalizedData = denormalize(result, article, entities);

console.log('normalizedData ==> ', JSON.stringify(normalizedData));
console.log('denormalizedData ==> ', JSON.stringify(denormalizedData));
  