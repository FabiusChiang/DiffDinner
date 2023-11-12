# DiffDinner
Create different meals for every family


## Notes:
build.js need type: module;
then build and publish the lib;
consumer of the lib needs to be type: module;


## Entity-Relationship diagram
```mermaid
erDiagram
    cuisine ||--|{ materialItem : isMadeBy
    materialItem }o--|| material  : needs
    meal }o..|{ cuisine : contains

    meal {
        uuid id
        string timeType
        date servedDate
    }
    cuisine {
        uuid id
        string name
    }
    materialItem {
        uuid cuisineId
        uuid materialId
        string unit
        float quantity
    }
    material {
        uuid id
        string name
        string preferredVendor
    }
```