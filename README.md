[Magic Toast](https://toast.trymagic.xyz/) is an opinionated toast component for React. You can read more about why and how it was built [here](trymagic.xyz/blog/magic-toast-use).

> we recommend using the latest and stabile version 0.1.9

## Usage

To start using the library, install it in your project:

```bash
npm install @trymagic/toast
```

Add `<Toaster />` to your app, it will be the place where all your toasts will be rendered.
After that you can use `toast()` from anywhere in your app.

```jsx
import { Toaster, toast } from '@trymagic/toast';

// ...

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>Give me a toast</button>
    </div>
  );
}
```

## Documentation

Find the full API reference in the [documentation](https://toast.trymagic.xyz/docs).