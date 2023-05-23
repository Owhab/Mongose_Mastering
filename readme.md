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
- The $addFields will not modify the original collection. For this to add the salary field to the collection we have to use $out to add the Salary Field in a new collection with the existing fields.
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
  {$out: "SalaryPractice"}
  ])

```

Here $out will create a new collection with the name of SalaryPractice. It is to be noted that the $out operator has to be the last of the aggregation pipeline. 

- To add the Salary field in the existing collection we have to use $merge operator. Here is the example
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
  {$merge: "practice"}
  ])

```
This will add the Salary field to the matched items.

- Finding Unique values using $group
```
db.practice.aggregate([
  {
      $group: { _id: "$gender"}
  }
  ])

```
Filtering unique values using $group with multiple fields
```
db.practice.aggregate([
  {
      $group: { _id: {
          age: '$age',
          gender: '$gender',
          occupation: '$occupation'
      }}
  }
  ])
```