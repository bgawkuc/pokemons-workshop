# PokeCards

Repozytorium warsztatowe. To mały, celowo prosty projekt React Native, na którym krok po kroku
budujemy aplikację i poznajemy podstawy React Native.

Aplikacja uruchamia się w **Expo Go**, więc do pracy wystarczy telefon i Node.js — nie trzeba
instalować Android Studio ani Xcode.

## Czego potrzebujesz

- [Node.js](https://nodejs.org/) w wersji LTS (20 lub nowszej) — razem z nim dostajesz `npm` i `npx`
- aplikacja **Expo Go** na telefonie
  ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) /
  [iOS](https://apps.apple.com/app/expo-go/id982107779))
- telefon i komputer w tej samej sieci Wi-Fi

## Uruchomienie aplikacji

Zainstaluj zależności:

```bash
npm install
```

Wystartuj serwer deweloperski Metro:

```bash
npm run start
```

W terminalu pojawi się kod QR. Zeskanuj go:

- na **Androidzie** — bezpośrednio w aplikacji Expo Go,
- na **iOS** — aplikacją Kamera, która zaproponuje otwarcie w Expo Go.

Aplikacja zbuduje się na telefonie i każda zmiana w kodzie będzie widoczna od razu (Fast Refresh).

Jeśli telefon nie może połączyć się z komputerem (np. sieć blokuje połączenia między urządzeniami),
uruchom serwer w trybie tunelu:

```bash
npx expo start --tunnel
```

Masz zainstalowane Android Studio albo Xcode i chcesz użyć emulatora? Opcjonalnie:

```bash
npm run android   # emulator Androida
npm run ios       # symulator iOS (tylko macOS)
```

## Przebudowanie / restart

Większość zmian w kodzie podchwytuje Fast Refresh. Jeśli jednak aplikacja zachowuje się dziwnie:

- w Expo Go potrząśnij telefonem (lub przytrzymaj trzy palce na ekranie), żeby otworzyć menu
  developerskie i wybierz **Reload**,
- w terminalu z uruchomionym Metro naciśnij `r`, żeby przeładować aplikację.

Po zmianie zależności albo konfiguracji (`package.json`, `app.json`) zrestartuj serwer i wyczyść
cache:

```bash
npm run start -- --clear
```

Gdy coś zupełnie się rozjedzie, najpewniejsza jest czysta instalacja zależności:

```bash
rm -rf node_modules
npm install
npm run start -- --clear
```

## Dodawanie bibliotek

Nowe paczki instalujemy komendą `npx expo install <nazwa>` — dobiera ona wersję zgodną z naszym
SDK Expo:

```bash
npx expo install nazwa-biblioteki
```

Ważne: w Expo Go da się używać tylko tych bibliotek, które nie wymagają własnego kodu natywnego
(czyli są już wbudowane w Expo Go). Dlatego w tym projekcie trzymamy się bibliotek wspieranych
przez Expo Go.

## Sprawdzanie typów

```bash
npx tsc --noEmit
```

## Formatowanie kodu

Kod formatujemy [Prettierem](https://prettier.io/) (konfiguracja w `.prettierrc`):

```bash
npm run format         # formatuje pliki
npm run format:check   # tylko sprawdza, bez zmian
```

W VS Code warto zainstalować rozszerzenie _Prettier - Code formatter_ i włączyć
_Format on Save_.

## Licencja

Kod w tym repozytorium jest dostępny na licencji [MIT](LICENSE).

Projekt ma charakter edukacyjny i niekomercyjny. Nazwa „Pokémon", logo oraz grafiki kart są
znakami towarowymi Nintendo / Creatures Inc. / GAME FREAK inc. / The Pokémon Company — repozytorium
nie jest z nimi w żaden sposób powiązane ani przez nie wspierane.
