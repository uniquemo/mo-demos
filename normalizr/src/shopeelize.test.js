const shopeelize = require('./shopeelize');
const {normalize, schema, denormalize} = shopeelize;

// 范式化数据用例，原始数据
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
        "name": "Nicole",
      }
    }]
  }
};

// 范式化数据用例，范式化后的结果数据
const normalizedData = {
  "entities": {
    "users": {
      "1": {"uid": "1", "name": "Paul"},
      "2": {"uid": "2", "name": "Nicole"}
    },
    "comments": {
      "324": {
        "id": "324",
        "commenter": "2"
      }
    },
    "articles": {
      "123": {
        "id": "123",
        "author": "1",
        "title": "My awesome blog post",
        "comments": {
          "total": 100,
          "result": ["324"]
        }
      }
    }
  },
  "result": "123"
};

// 测试范式化
test('test originalData to normalizedData', function() {
  const user = new schema.Entity('users', {}, {
    idAttribute: 'uid'
  });
  const comment = new schema.Entity('comments', {
    commenter: user
  });
  const article = new schema.Entity('articles', {
    author: user,
    comments: {
      result: [ comment ]
    }
  });
  const data = normalize(originalData, article);
  expect(data).toEqual(normalizedData);
});

// 测试反范式化
test('test normalizedData to originalData', function() {
  const user = new schema.Entity('users', {}, {
    idAttribute: 'uid'
  });
  const comment = new schema.Entity('comments', {
    commenter: user
  });
  const article = new schema.Entity('articles', {
    author: user,
    comments: {
      result: [ comment ]
    }
  });
  const data = normalize(originalData, article);
  const {result, entities} = data;
  const denormalizedData = denormalize(result, article, entities);
  expect(denormalizedData).toEqual(originalData);
});
