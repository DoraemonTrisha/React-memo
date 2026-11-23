# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
A Higher-Order Component (HOC) in React is a pattern that allows you to reuse component logic. It’s a function that takes a component and returns a new component with additional props or behavior.

In simpler terms, an HOC is a function that enhances or modifies the functionality of a component by wrapping it in a new component, without directly altering the original component’s code.

Key Characteristics of an HOC:

Reusability: HOCs allow you to share common logic across multiple components.

Non-Invasive: HOCs don't modify the original component; they return a new component with additional behavior.

Composition: You can compose multiple HOCs together to add multiple features to a component.

React.memo:

React.memo is a higher-order component (HOC) that allows you to optimize the performance of functional components by memoizing them. It prevents unnecessary re-renders by ensuring that the component only re-renders when its props change.

In simpler terms, it "remembers" the previous render of a component and compares the previous props with the new props. If the props haven't changed, the component doesn't re-render. This can help improve performance, especially in large applications where rendering can be expensive.

useMemo:

useMemo is a hook used to memoize the result of a computation or function. It helps prevent expensive recalculations of values when dependencies haven’t changed.

It's used inside functional components to memoize values, functions, or objects that don’t need to be recalculated on every render.

Example: Memoizing a computation or derived state.
React.memo:

React.memo is a higher-order component (HOC) that wraps a functional component to prevent unnecessary re-renders of that component if its props haven’t changed.

It's used to optimize the rendering of components by memoizing the component itself based on props comparison.

Example: Wrapping a component to avoid re-rendering when props are the same.
What They Memoize:

useMemo:

Memoizes the result of a calculation or value. It’s about caching a calculated value to avoid recalculating it on every render.

Example: Memoizing a computed value or an expensive operation result.

React.memo:

Memoizes the component itself. It prevents the re-rendering of the entire component unless its props have changed.

Example: Preventing re-renders of a component that receives the same props multiple times.

useMemo:

It's used inside a functional component to memoize values or functions. It is typically used for optimizing expensive calculations or when you want to prevent recreating functions/objects/arrays on each render.

React.memo:

It’s used to wrap a functional component outside of the component to optimize the component’s rendering. It checks if the props passed to the component have changed and prevents re-rendering if they are the same.

useMemo:

Works at the value level — it memoizes specific values or calculations within a component. You provide dependencies, and it recalculates the value only when dependencies change.

React.memo:

Works at the component level — it memoizes the whole component. The component only re-renders if its props change (based on a shallow comparison, or a custom comparison function if provided).
