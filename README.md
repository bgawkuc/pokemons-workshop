# PokeCards

Repozytorium warsztatowe. To mały, celowo prosty projekt React Native, na którym krok po kroku
budujemy aplikację i poznajemy podstawy React Native.

Aplikacja uruchamia się w **Expo Go**, więc do pracy wystarczy telefon i Node.js — nie trzeba
instalować Android Studio ani Xcode.

## Zadania

Zadania na warsztaty znajdziesz w Notion: [PokeCards — zadania](https://lopsided-devourer-ca4.notion.site/3f3f5485ccaf804e98f4e381c2cb6e7e?v=3f3f5485ccaf8075807e000c7c56190a)

## Prezentacja

Slajdy z warsztatów: [react-native-presentation.pdf](docs/react-native-presentation.pdf)

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

Najprościej pobrać instalator z [nodejs.org](https://nodejs.org/) — wybierz wersję **LTS** i przeklikaj
instalator. To wystarczy do warsztatów.

Jeśli chcesz zarządzać kilkoma wersjami Node (bo inny projekt wymaga starszej), możesz zamiast tego
użyć **nvm** — menadżera wersji, który pozwala przełączać się między nimi jedną komendą:

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

## Rozwiązywanie problemów

### Windows

Jeśli po instalacji Node wpisanie `npm` w terminalu kończy się błędem w stylu _„npm.ps1 cannot be
loaded because running scripts is disabled on this system"_, to terminal domyślnie blokuje
uruchamianie skryptów. Odblokuj je dla swojego użytkownika:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Potem otwórz nowe okno terminala i sprawdź czy błąd zniknął.

Więcej o tym błędzie:

- [Stack Overflow](https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system)
- [Dokumentacja Microsoft](https://learn.microsoft.com/en-US/troubleshoot/azure/active-directory/cannot-run-scripts-powershell).

## Licencja

Kod w tym repozytorium jest dostępny na licencji [MIT](LICENSE).

Projekt ma charakter edukacyjny i niekomercyjny. Nazwa „Pokémon", logo oraz grafiki kart są
znakami towarowymi Nintendo / Creatures Inc. / GAME FREAK inc. / The Pokémon Company — repozytorium
nie jest z nimi w żaden sposób powiązane ani przez nie wspierane.
