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
- Adding Fields with value with Matched items
```
db.practice.aggregate([
  { $match: { gender: "Male"}},
  { $addFields: {Salary: 50000}},
  { $project: {gender: 1, Salary: 1}}
  ])
```

- Adding Random Value as Salary in the field
```
db.practice.aggregate([
  { $match: { gender: "Male"}},
  { $addFields: {Salary: {
    $toInt: {
      $floor: {
        $multiply: [
          {$rand: {}}, 10000
          ]
        
      }
    }
  }}},
  { $project: {gender: 1, Salary: 1}}
  ])

```