# Mongodb Aggregation

## Match Aggregate Operator
- Filters the documents to pass only the documents that match the specified condition(s) to the next pipeline stage.
```
db.practice.aggregate([
    {$match: {gender:'Female', age: 24}}
])

```
