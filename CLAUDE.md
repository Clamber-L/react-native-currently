# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start Metro bundler / dev server
npm run ios        # Launch iOS simulator
npm run android    # Launch Android emulator
npm run web        # Launch web browser
npm run lint       # Run ESLint (eslint .)
npm run format     # Auto-format with Prettier
```

No test runner is configured. There is no `npm test`.

## Architecture

This is an **Expo (v54) + React Native** app using **Expo Router v6** for file-based routing.

### Routing (`app/`)

Expo Router maps the file system to routes:
- `app/_layout.tsx` — root layout; wraps the app in a `ThemeProvider`
- `app/(tabs)/` — bottom tab group (Home, Explore)
- `app/modal.tsx` — modal screen

Route groups like `(tabs)` don't appear in the URL/path. Typed routes are enabled (`experiments.typedRoutes`).

### Theming

Two-layer system:
1. `constants/theme.ts` — defines `Colors` (light/dark palettes) and `Fonts` (platform-specific families)
2. `hooks/use-theme-color.ts` + `hooks/use-color-scheme.ts` — runtime hooks to resolve colors based on system preference

Use `ThemedText` and `ThemedView` from `components/` instead of bare `Text`/`View` when a component needs to adapt to light/dark mode.

### Platform-specific files

Expo's platform resolution picks the right file at build time:
- `*.ios.tsx` — iOS only (e.g., `icon-symbol.ios.tsx` uses SF Symbols)
- `*.web.ts` — web only (e.g., `use-color-scheme.web.ts`)
- The plain file (no suffix) is the Android/default fallback

### Path alias

`@/*` is configured in `tsconfig.json` to resolve from the project root (e.g., `import { Colors } from '@/constants/theme'`).

### Key dependencies

| Package | Role |
|---|---|
| `expo-router` | File-based routing |
| `react-native-reanimated` | Animations (used in ParallaxScrollView, HelloWave) |
| `expo-haptics` | Haptic feedback (HapticTab) |
| `expo-symbols` / `@expo/vector-icons` | Icons (SF Symbols on iOS, Material Icons elsewhere) |
| `react-native-safe-area-context` | Handles notches and status bars |
