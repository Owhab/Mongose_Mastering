# Mongodb Aggregation

## Match Aggregate Operator
- Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
```
db.practice.aggregate([
    {$match: {gender:'Female', age: 24}}
])

```

- Projecting a query in aggregate pipeline
```
db.practice.aggregate([
  {$match: {gender:'Female', age: 24}}
  ])
```
### Add Fields with Value
- Adding fields to the collection with value using $addFields
```
db.practice.aggregate([
  { $addFields: {Salary: 6000}}
  ])
```
