# Spacex

### Repository Structure

- apps
  - app1
  - ...
- libs
  - feature1
    - shared
    - lazy
    - ui
    - util
    - data
    - types
  - ...
  - shared
    - data
    - ui
    - util
    - types

* types: plain TS lib with domain types
* data: libs with api and store logic
* util: utility logic e.g. directives, TS helper, ...
* apps: import lazy features, have no own declarations
* feature-lazy: represent use-cases, wire up ui, util, api, types, have a state/store
* feature-shared: share feature logic between lazy features
