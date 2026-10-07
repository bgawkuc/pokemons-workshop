# PokeCards

A React Native workshop starter. It is deliberately minimal — attendees build the app up step by
step during the workshop, so keep things simple and obvious rather than clever.

Expo SDK 57 / React Native 0.86 / React 19.2, TypeScript `strict`, styled with `StyleSheet`.

# Project structure

```
src/
  api/                 HTTP calls and API types
  hooks/               Custom hooks
  navigation/          React Navigation v7 tree + navigation types
  screens/             One file per screen, default-exported
  components/          Feature components; components/ui/ holds the primitives
  stores/              Global app state
  theme/               Colours, typography, design tokens
  utils/               Shared types, constants and helpers
```

Entry: `App.tsx` (`package.json` `main`) — it calls `registerRootComponent` and holds the provider
tree: `SafeAreaProvider` + `NavigationContainer`. There is no separate `index.ts`.
Empty folders are placeholders for the workshop and are kept by a `.gitkeep`.

## Navigation

[React Navigation](https://reactnavigation.org/) v7. Navigators live in `src/navigation/`, one file
per navigator, and route params are typed in `src/navigation/types.ts`. Use
`createBottomTabNavigator` for tabs — the native tab bar from `@react-navigation/bottom-tabs/unstable`
ships native code and does **not** run in Expo Go.

## Styling

`StyleSheet.create` at the bottom of the component file, or inline styles for one-off cases. No
styling library — not NativeWind, not styled-components. Reusable colours and typography belong in
`src/theme/`.

# Comments

Comment only what the code can't say itself — a non-obvious constraint, a workaround, the reason
behind a magic value. Don't restate what a name already tells the reader, and don't put a doc block
over a simple function, type, or constant. Keep comments to a single line wherever possible.

# Build & run

```bash
npm install
npm run start        # Metro; scan the QR code with Expo Go
npx tsc --noEmit     # typecheck
npm run format       # Prettier (npm run format:check in CI)
```

- It runs in **Expo Go** — there is no development build and no `ios/` or `android/` folder, so
  never run `npx expo prebuild`.
- Only add libraries that work in Expo Go (no custom native code). The app must run without Xcode
  or Android Studio, on Windows, macOS and Linux alike.
- Use **npm** (not `yarn`/`pnpm`) and `npx expo` (no global binary).
- The README is in **Polish** — it is the attendees' guide. This file is in English.
