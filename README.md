# react-fade-in-view

A lightweight and easy-to-use **React fade-in animation component** using **Intersection Observer API**.  
Perfect for landing pages, portfolios, blogs, or any content-heavy site.

<!-- ![Demo](https://user-images.githubusercontent.com/yourusername/demo.gif) -->

---

## ✨ Features

- **Lightweight:** No extra animation libraries
- **Intersection Observer:** Animates elements on viewport enter
- **Simple API:** Easy to use, fully customizable
- **Directional animations:** Up, down, left, right
- **Optional repeat:** Animate every time or just once
- **React & Next.js compatible**
- **TypeScript ready**
- **No extra CSS import required**

---

## 📦 Installation

```bash
npm install react-fade-in-view
```

or

```bash
yarn add react-fade-in-view
```

---

## 🚀 Basic Usage

```tsx
import { FadeIn } from "react-fade-in-view";

export default function App() {
  return (
    <FadeIn direction="up">
      <h1>Hello World</h1>
    </FadeIn>
  );
}

export default function App() {
  return (
    <FadeIn as="h1" direction="up">
      Hello World
    </FadeIn>
  );
}
```

---

## 🧭 Animation Directions

```tsx
<FadeIn direction="left">Left Fade</FadeIn>
<FadeIn direction="right">Right Fade</FadeIn>
<FadeIn direction="up">Up Fade</FadeIn>
<FadeIn direction="down">Down Fade</FadeIn>
```

---

## ⚙️ Props

| Prop        | Type                                  | Default | Description                                         |
| ----------- | ------------------------------------- | ------- | --------------------------------------------------- |
| `as`        | `React.ElementType`                   | `div`   | Element or component to render instead of `div`     |
| `direction` | `"up" \| "down" \| "left" \| "right"` | `up`    | Fade-in animation direction                         |
| `className` | `string`                              | `""`    | Optional custom CSS classes                         |
| `immediate` | `boolean`                             | `false` | Animate immediately instead of waiting for viewport |
| `children`  | `React.ReactNode`                     | —       | Content to animate                                  |
| `...rest`   | `any`                                 | —       | Pass extra props to the rendered element            |

---

## 🕒 Custom Duration & Delay

```tsx
<FadeIn as="p" duration={800} delay={200}>
  This fades in slowly with a delay
</FadeIn>
```

---

## 🔁 Repeat Animation on Scroll

```tsx
<FadeIn as="p" once={false}>
  This will animate every time it enters the viewport
</FadeIn>
```

---

## 🔗 Next.js Usage Example

```tsx
import { FadeIn } from "react-fade-in-view";
import "react-fade-in-view/dist/index.css";

export default function Page() {
  return (
    <main>
      <FadeIn direction="up">
        <h1>Next.js Page with FadeIn</h1>
      </FadeIn>
    </main>
  );
}
```

---

## 📄 License

MIT © Aayush Daboriya
