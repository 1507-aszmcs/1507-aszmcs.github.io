# 1507.cserkesz.hu

## Üdv, használat.

Kedves Cserkésztestvér! Az 1507. Árpád-házi Szent Margit Cserkészcsapat honlapjának file-jait, illetve szerkesztői leírását találhatod meg ebben a github repo-ban. 
Az oldal erősen támaszkodik az astro framework-re, Tailwind CSS-re, illetve a hírek posztolásához DecapCMS van használva.

Sajnos nem tudtam mindent magyarosítani az imént említett programok alapjai miatt, így némi angol tudás is ajánlott!

Sok sikert a fejlesztéshez! Ha kérdésed van, itt megtalálsz: farkas.tobias@cserkesz.hu

JM!

Farkas Tóbiás, a dicső Gepárd és Puma Őrsök büszke tagja.

## 🚀 Oldal felépítés

A projekt fileok közt megtalálod ezt a file struktúrát találod:

```text
/
├── public/
├── src/
│   └── components/
|   └── content/
|   └── layouts/
|   └── pages/
│       └── index.astro
|   └── styles/
└── .gitignore
└── astro.config.mjs
└── netlify.toml
└── package-lock.json
└── package.json
└── README.md
└── tsconfig.json
```

Az astro a `.astro` és a `.md` fájlokat használja fel a `src/pages/` mappából. Minden oldalnak ebbe a mappába kell kerülnie! A híreket kivéve. Azok automatikusan a `src/content/blog/` mappába kerülnek feltöltésre a
DecapCMS által. Ha manuálisan akarunk hírt hozzáadni, akkor azt is ide kell feltölteni és push-olni a github main branch-re. 
Minden oldal a fájlneve alapján keletkezik az url "útvonal" is.

A `src/components/` mappában vannak az oldal "elemei" (pl lábléc, navigáció). Ezek ismétlődő elemek, amik a legtöbb oldalon megtalálhatóak. Ha itt módosítod az egyiket, akkor minden oldalon módosulni fog.
Ez alól kivételt képez a főoldal NAVigációja! Azt külön kell módosítani (mert más a felépoítése, mint a többi oldalnak!)

A `src/layouts/` mappa tartalmazza a layout-okat. Célja, hogy egy oldalt ne kelljen teljesen újra, az alapoktól felépíteni, hanem a megfelelő sablont használva már egy elkezdett, a témába illeszkedő oldalt kapjunk.
A hírek pl. a BlogLayout.astro-t veszik alapul. Az összes új, a DecapCMS által összerakott "blog" ez alapján fog felépülni. 

A `public/` mappában kell tárolni az oldal összes képét. A DecapCMS már alapértelmezetten ide töltö fel.

## 🧞 Fejlesztői Parancsok

Minden parancsot a projekt root mappájában kell futtatni! Ajánlott Visual Studio Code-ot használni. A parancsokat érdemes a beépített parancssorban futtatni.

| Command                   | Action                                             |
| :------------------------ | :------------------------------------------------- |
| `npm install`             | Telepíti a szükséges eszközöket                    |
| `npm run dev`             | Elindítja a fejlesztői szervert(`localhost:4321`)  |
| `npm run build`           | A kész weboldal építése a `./dist/` mappába        |
| `npm run preview`         | Oldal előnézete, mielőtt publikálva lesz           |
| `npm run astro ...`       | CLI parancsok futtatása `astro add`, `astro check` |
| `npm run astro -- --help` | Segítség kérése a parancsokhoz (csak angol)        |

Amik ebből fontosak az az `install`, illetve a `run dev`. Az első szerverindítás előtt be kell ütni az `npm install` parancsot. Utána már elég csak az `npm run dev` parancs az oldal "futtatásához".
