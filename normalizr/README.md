# my-project


# Software Engineer, Frontend, Entry Task For React
实现一个库`shopeelize`，可以用于将嵌套对象范式化，或者将范式化的数据还原成嵌套对象。

## 目标
```
schema.Entity(name, [entityParams], [entityConfig])
```

#### 参数说明
  * Entity的实例为一个schema
    * name为该schema的名称
    * entityParams为可选参数，定义该schema的外键，定义的外键可以不存在
    * entityConfig为可选参数，目前仅支持一个参数
      * idAttribute，定义该entity的主键，默认值为`字符串'id'`

```
  normalize(data, entity)
```

#### 参数说明
  * data
    * 需要范式化的数据，必须为符合schema定义的对象或由该类对象组成的数组
  * entity
    * Entity实例，代表schema，当表示方式为[entity]时则表示该schema为符合entity结构的对象组成的数组

```
  denormalize (normalizedData, entity, entities)
```

#### 参数说明
  * normalizedData
    * 需要反范式化的数据，id的数组
  * entity
    * 同上文
  * entities
    * 范式化后的数据对象

## 用例
范式化数据

```
import { normalize, schema } from 'shopeelize'
```

```
const originalData = {
  "id": "123",
  "author":  {
    "uid": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": {
    total: 100,
    result: [{
        "id": "324",
        "commenter": {
        "uid": "2",
          "name": "Nicole"
        }
      }]
  }
}
```

```
// Define a users schema
const user = new schema.Entity('users', {}, {
  idAttribute: 'uid'
})
```

```
// Define your comments schema
const comment = new schema.Entity('comments', {
  commenter: user
})
```

```
// Define your article
const article = new schema.Entity('articles', {
  author: user,
  comments: {
    result: [ comment ]
  }
})
```

```
const normalizedData = normalize(originalData, article)
```

`normalizedData`的值为：

```
{
  result: "123",
  entities: {
    "articles": {
      "123": {
        id: "123",
        author: "1",
        title: "My awesome blog post",
        comments: {
          total: 100,
          result: [ "324" ]
        }
      }
    },
    "users": {
      "1": { "uid": "1", "name": "Paul" },
      "2": { "uid": "2", "name": "Nicole" }
    },
    "comments": {
      "324": { id: "324", "commenter": "2" }
    }
  }
}
```

还原范式化数据

```
const { result, entities } = normalizedData
```

```
const denormalizedData = denormalize(result, article, entities)
```

`denormalizedData`的值应该和`originalData`一致

## 示例：

```
const page = new schema.Entity('page', {})
const user = new schema.Entity('user', {}, {})
const book = new schema.Entity('book', {
  pages: [ page ]
  author: user
})
const mybook = new schema.Entity('mybook', {
  author: user,
  books: [ book ],
  comments: {
    result: [ comment ]
  }
}, { idAttribute: 'customizedId' })
```
对应的originalData:

```
// 原始数据没有包含`books`字段
const mybookOriginalData = {
  customizedId: '666',
  author: { id: '12345', name: 'uname' },
  comments: {
    total: 100,
    result: [{
        id: 'comment1',
        commenter: {
        id: '999',
          name: 'Shopee'
        }
      }, {
        id: 'coment2',
        commenter: {
        id: '999',
          name: 'Shopee'
        }
    }]
  }
}
```

使用[Jest](http://facebook.github.io/jest/)编写对应的单元测试

请遵循[JavaScript Standard Style](https://standardjs.com/)

