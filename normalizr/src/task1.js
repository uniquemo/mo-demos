/**
 * 各种情况：
 * 1、数据就是个对象
 * 2、数据是个数组
 * 3、entity包含其他entity
 * 4、循环包含？
 * 
 * 其实就是处理entity
 * 
 * 看看entity是否有外链？（entityParams对象是否有值）有就一直深入，否则结束
 * 
 * entity = {
 *  idAttribute: 'xxx',
 *  entityName: 'xxx',
 *  entityParams: {}
 * }
 * 
 * TODO：外链里含有其他非entity字段的情况
 */

const Schema = require('./schema');

function isType(param, type) {
  return Object.prototype.toString.call(param) === '[object ' + type + ']';
}

function isSchema(param) {
  return Object.getPrototypeOf(param).constructor.name === 'entitySchema';
}

const Types = {
  isObject: function(param) {
    return isType(param, 'Object');
  },
  isArray: function(param) {
    return isType(param, 'Array');
  }
};

function _normalize2(originalData, structure) {
  const normalizedData = {};
  const entities = normalizedData.entities = {};

  // 刚开始的structure一定是entity
  if (Types.isObject(originalData)) {
    _insideNormalize(originalData, structure);
    normalizedData.result = originalData[structure.idAttribute];
  } else if (Types.isArray(originalData)) {
    normalizedData.result = [];
    originalData.forEach(item => {
      _insideNormalize(item, structure);
      normalizedData.result.push(item[structure.idAttribute]);
    });
  } else {
    throw new Error();
  }

  // data：object
  // 怎么递归调用？？？？？？
  function _insideNormalize(data, struct) {
    const obj = null;
    if (isSchema(struct)) {
      const idKeyName = struct.idAttribute;
      const name = struct.entityName;
      const params = struct.entityParams;
      const keys = Object.keys(params);

      if (!entities[name]) {
        entities[name] = {};
      }

      const idValue = data[idKeyName];
      entities[name][idValue] = data; // 先直接赋值
      
      // 覆盖第三方entity
      keys.forEach(key => {
        const v = params[key];
        if (Types.isObject(v)) {
          entities[name][idValue][key] = 1;
        } else if (Types.isArray(v)) {
          
        }
      });
    } else {
  
    }
  }

  return normalizedData;
}

function _normalize(originalData, entity) {
  const normalizedData = {};
  const entities = normalizedData.entities = {};

  if (Types.isObject(originalData)) {
    normalizedData.result = originalData[entity.idAttribute];
  } else if (Types.isArray(originalData)) {
    normalizedData.result = originalData.map(item => item[entity.idAttribute]);
  } else {
    throw new Error('The type of originalData must be object or array');
  }

  _insideNormalize(originalData, entity);

  function _insideNormalize(data, entityObj) {
    const idAttribute = entityObj.idAttribute;
    const entityName = entityObj.entityName;
    const entityParams = entityObj.entityParams;

    // 是否有外链
    const hasParams = Object.keys(entityParams).length;

    if (!entities[entityName]) {
      entities[entityName] = {};
    }

    if (hasParams) {
      // 有外链，则递归处理
      if (Types.isObject(data)) {
        _hasParamsCondition(data);
      } else if (Types.isArray(data)) {
        data.forEach(d => {
          _hasParamsCondition(d);
        });
      }
    } else {
      // 没有外链，直接写入对应的entity
      if (Types.isObject(data)) {
        entities[entityName][data[idAttribute]] = data;
      } else if (Types.isArray(data)) {
        data.forEach(item => {
          entities[entityName][item[idAttribute]] = item;
        });
      }
    }

    // TODO：加个参数，循环调用
    function _hasParamsCondition(dd) {
      entities[entityName][dd[idAttribute]] = dd;

      const params = Object.keys(entityParams);
      params.forEach(p => {
        // 注意：entity的名字和外链该entity的entity的对应字段名不一定一致

        // 外链是直接对象还是数组？
        const value = dd[p];
        if (Types.isObject(entityParams[p])) {
          if (isSchema(entityParams[p])) {
            // 实体本身normalize化
            entities[entityName][dd[idAttribute]][p] = value[entityParams[p].idAttribute];
            // 外链实体normalize化
            _insideNormalize(value, entityParams[p]);
          } else {
            // TODO：外链中包含的entity中包含其他字段，值为数组外链。。


          }
        } else if (Types.isArray(entityParams[p])) {
          // TODO：数组元素不是一个entity呢？
          const et = entityParams[p][0];
          entities[entityName][dd[idAttribute]][p] = value.map(item => item[et.idAttribute]);
          // 外链实体normalize化
          _insideNormalize(value, et);
        }
      });
    }
  }

  return normalizedData;
}

const normalize = function(data, entity) {
  // return _normalize(data, entity);
  return _normalize2(data, entity);
};

const denormalize = function(normalizedData, entity, entities) {};


const user = new Schema.Entity('users', {}, {
  idAttribute: 'uid'
});
const comment = new Schema.Entity('comments', {
  commenter: user
});
const article = new Schema.Entity('articles', {
  author: user,
  comments: {
    result: [comment]
  }
});

const originalData = {
  "id": "1",
  "author": {"uid": '1', "name": 'author1'},
  "title": 'article1',
  "comments": {
    "total": 100,
    "result": [{
      "id": "324",
      "commenter": {
        "uid": "2",
        "name": "Nicole"
      }
    }, {
      "id": "222",
      "commenter": {
        "uid": "3",
        "name": "Naniel"
      }
    }]
  }
};

var result = normalize(originalData, article);
console.log('result ==> ', JSON.stringify(result));


// 没有外链
// const originalData = [{
//   uid: 1,
//   name: 'user1'
// }, {
//   uid: 2,
//   name: 'user2'
// }];
// var result = normalize(originalData, user);
// console.log('result ==> ', JSON.stringify(result));


// 举个例子
// const originalData = {
//   "id": "1",
//   "author": {"uid": '1', "name": 'author1'},
//   "title": 'article1',
//   "comments": {
//     "total": 100,
//     "result": [{
//       "id": "324",
//       "commenter": {
//         "uid": "2",
//         "name": "Nicole"
//       }
//     }, {
//       "id": "222",
//       "commenter": {
//         "uid": "3",
//         "name": "Naniel"
//       }
//     }]
//   }
// };

// const normalizedData = {
//   "result": "1",
//   "entities": {
//     "articles": {
//       "1": {
//         "id": "1",
//         "author": "1",
//         "title": "article1",
//         "comments": ["324"],
//       }
//     }
//   }
// };
