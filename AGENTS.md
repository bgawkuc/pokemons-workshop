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

## Navigation

[React Navigation](https://reactnavigation.org/) v7: root stack -> native tabs
(`bottom-tabs/unstable`, Expo Go-safe, Liquid Glass on iOS 26) -> a stack per tab. Params live in
`src/navigation/types.ts`; headers are hidden, so lists pad themselves with `useListInsets`.

## Data fetching

[TanStack Query](https://tanstack.com/query) owns server state - no manual `useEffect` fetching. The
`fetch` wrapper and types live in `src/api/`, one hook per query in `src/hooks/`. Ask the API for
what the screen needs: the card list is ~20k entries, so always pass `pagination:itemsPerPage`.

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
