# PokeCards

Repozytorium warsztatowe. To mały, celowo prosty projekt React Native, na którym krok po kroku
budujemy aplikację i poznajemy podstawy React Native.

Aplikacja uruchamia się w **Expo Go**, więc do pracy wystarczy telefon i Node.js — nie trzeba
instalować Android Studio ani Xcode.

## Czego potrzebujesz

- Node.js w wersji LTS (20 lub nowszej) — razem z nim dostajesz `npm` i `npx`
- aplikacja **Expo Go** na telefonie ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) lub [iOS](https://apps.apple.com/app/expo-go/id982107779))
- darmowe **konto Expo** — załóż je na [expo.dev/signup](https://expo.dev/signup)
- **zalogowanie się na konto Expo** w Expo Go (zakładka _Profile_) i na komputerze:

  ```bash
  npx expo login
  ```

- telefon i komputer w tej samej sieci Wi-Fi

## Instalacja Node.js

Node.js można pobrać z [nodejs.org](https://nodejs.org/), ale polecam **nvm** — menadżer wersji Node. Pozwala trzymać kilka wersji i przełączać się między nimi jedną komendą, co jest przydatne, gdy inny projekt wymaga starszego Node. Instrukcja instalacji jest w dokumentacji:

- macOS / Linux — [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Windows — [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades)

Na koniec sprawdź, czy wszystko działa:

```bash
node -v && npm -v && npx -v
```

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

Jeśli telefon nie może połączyć się z komputerem, uruchom serwer w trybie tunelu:

```bash
npx expo start --tunnel
```

Masz zainstalowane Android Studio albo Xcode i chcesz użyć emulatora? Opcjonalnie:

```bash
npm run android   # emulator Android
npm run ios       # symulator iOS
```

## Licencja

Kod w tym repozytorium jest dostępny na licencji [MIT](LICENSE).

Projekt ma charakter edukacyjny i niekomercyjny. Nazwa „Pokémon", logo oraz grafiki kart są
znakami towarowymi Nintendo / Creatures Inc. / GAME FREAK inc. / The Pokémon Company — repozytorium
nie jest z nimi w żaden sposób powiązane ani przez nie wspierane.
