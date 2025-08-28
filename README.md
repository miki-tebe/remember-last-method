# Remember Last Auth Method Plugin

This plugin allows you to remember the last authentication provider a user selected (e.g., Google, GitHub, etc.) in your app using the `better-auth` library. It stores the last used provider in the browser's `localStorage` and retrieves it when needed, enabling a smoother user experience.

## Installation

You can install the plugin using `pnpm`, `npm`, `yarn`, or `bun`.

```
npm i remember-last-method-plugin
```

## Usage

### 1. Register the Plugin

Import and register the plugin with your `better-auth` client setup:

```typescript
import { createAuthClient } from "better-auth/client";
import { rememberLastMethodClientPlugin } from "remember-last-method-plugin";

const authClient = createAuthClient({
  plugins: [
    // ...other options
    rememberLastMethodClientPlugin(),
  ],
});
```

### 2. Saving the Last Used Provider

When a user selects an authentication provider (e.g., clicks a login/sign-up button), call the `saveProvider` action:

```typescript
await authClient.saveProvider("email");
```

Replace `"email"` with the provider's name (e.g., `"github"`, `"google"`, etc.).

### 3. Retrieving the Last Used Provider

To get the last used provider (e.g., to pre-select a button):

```typescript
const { data, error } = await authClient.getProvider();
```

## API

The plugin exposes two actions:

- `saveProvider(provider: string)`: Saves the provider name to localStorage.
- `getProvider()`: Retrieves the last saved provider name from localStorage.

Both actions return an object with `{ data, error }`.

## Example

```typescript
// Save provider after user selects it
await authClient.saveProvider("github");

// Get last provider on page load
const { data: lastProvider } = await authClient.getProvider();
```

## Notes

- This plugin only works in the browser (client-side), as it uses `localStorage`.
- Also this plugin only uses a [client plugin](https://www.better-auth.com/docs/guides/your-first-plugin#client-plugin) no need to use or register a server plugin.
