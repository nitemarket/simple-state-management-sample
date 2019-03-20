## Simple State Management using React Hook

Utilise react hook to create a simple state management that stores data across application.

### Installation

```
npm install
```

### Usage

1. Import dependencies.
```
import { StoreProvider, useStore } from './store/AppState';
```
2. Initialize your application with `StoreProvider`. Wrap your content at the highest level.
```
const App = () => (
  <StoreProvider initialState={initialState} reducers={[taskReducer]}>
    // children
  </StoreProvider>
);
```
3. Access the states in any functional components.
```
const [state, dispatch] = useStore();
```
