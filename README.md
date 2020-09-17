# Loader O'Clock

Fournit un composant React pour afficher un *loader* ~~100&nbsp;% CSS~~ CSS ou SVG.

![resultat](oclock.gif)

## Installation

Télécharger les fichiers dans un dossier `Oclock` et l'ajouter à votre dossier de composants (ex&nbsp;: `/src/components`).

## Utilisation

Importer le composant dans votre application&nbsp;:

```js
  import Oclock from 'src/components/Oclock';
```

Appeler le composant&nbsp;:

### SVG (par défaut)

```js
  const App = () => (
    <main className="main">
      <Oclock svg /> {/* appel le loader SVG (défaut) */}
    </main>
  );
```

```js
  const App = () => (
    <main className="main">
      <Oclock
        duration="1s"
        baseColor="#fffdd8"
        accentColor="#d83a37"
        width="5rem"
      />
    </main> {/* appel le loader SVG personnalisé */}
  );
```

### CSS

```js
  const App = () => (
    <main className="main">
      <Oclock svg={false} /> {/* appel le loader CSS */}
    </main>
  );
```

```js
  const App = () => (
    <main className="main">
      <Oclock
        svg={false}
        duration="1s"
        baseColor="#fffdd8"
        accentColor="#d83a37"
        scale={1.5}
      />
    </main> {/* appel le loader CSS personnalisé */}
  );
```

## Options

Le composant peut être configuré via des *props*, toutes optionnelles.

### *svg*

Détermine le type de *loader* à afficher (SVG | CSS)&nbsp;:

- format attendu&nbsp;: *boolean*
- valeur par défaut&nbsp;: true

```html
<Oclock svg />
<Oclock svg={false} />
```

### *duration*

Détermine la durée de l'animation&nbsp;:

- format attendu&nbsp;: *string*
- valeur par défaut&nbsp;: 3s

```html
<Oclock duration="1s" />
<Oclock duration="6000ms" />
```

### *baseColor*

Définit la couleur de base (cercle principal)&nbsp;:

- format attendu&nbsp;: *string*
- valeur par défaut&nbsp;: #101010

```html
<Oclock baseColor="red" />
<Oclock baseColor="#f0f" />
<Oclock baseColor="rgb(125, 26, 230)" />
<Oclock baseColor="rgba(125, 26, 230, .8)" />
<Oclock baseColor="hsl(178, 46.5%, 61.2%)" />
```

### *accentColor*

Définit la couleur d'accent (fod du cercle animé)&nbsp;:

- format attendu&nbsp;: *string*
- valeur par défaut&nbsp;: #e52354

```html
<Oclock baseColor="red" />
<Oclock baseColor="#f0f" />
<Oclock baseColor="rgb(125, 26, 230)" />
<Oclock baseColor="rgba(125, 26, 230, .8)" />
<Oclock baseColor="hsl(178, 46.5%, 61.2%)" />
```

### *width*

Définit la taille du *loader* pour le SVG&nbsp;:

- format attendu&nbsp;: *string*
- valeur par défaut&nbsp;: 9rem

```html
<Oclock width="5rem" />
<Oclock width="200px" />
<Oclock width="50%" />
```

### *scale*

Définit la taille du *loader* pour le CSS&nbsp;:

- format attendu&nbsp;: *number*
- valeur par défaut&nbsp;: 1

> Note&nbsp;: par défaut, le diamètre du cercle vaut `9rem` (soit 144&nbsp;px), si *scale* est défini à **2**, le diamètre sera de `18rem` (soit 288&nbsp;px).

```html
<Oclock scale={2} />
<Oclock scale={0.2} />
```

## Notes

Le *loader* SVG montre un léger swing dû à un mauvais centrage de mon code SVG. Si ce comportement vous gêne, n'hésitez pas à modifier ce derrnier dans son [fichiers dédié](OclockSVGLogo.js).

Attention aux *props* qui définissent notamment les couleurs de remplissage et de bordure.

Pour transformer un SVG en composant React, je vous conseille ce site [svgviewer.dev](https://svgviewer.dev).