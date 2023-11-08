# DiffDinner
Create different meals for every family


## Entity-Relationship diagram
```mermaid
erDiagram
    cuisine ||--|{ materialItem : isMadeBy
    materialItem }o--|| material  : needs
    meal }o..|{ cuisine : contains
```