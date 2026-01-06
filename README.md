# react-fade-in-view

react-fade-in-view is a lightweight **React fade-in animation library**
that triggers smooth **scroll-based animations** when elements enter the viewport
using the **Intersection Observer API**.

Ideal for **React & Next.js applications**, landing pages, portfolios,
blogs, and content-heavy websites that need performant viewport animations.

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
import "react-fade-in-view/dist/index.css";

export default function FadeInWithChildElement() {
  return (
    <FadeIn direction="up">
      <h1>Hello World</h1>
    </FadeIn>
  );
}

export default function FadeInAsHTMLTag() {
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

## 🤔 Why react-fade-in-view?

- Better performance than animation-heavy libraries
- Zero runtime dependencies
- Ideal replacement for simple Framer Motion use-cases
- Works perfectly with SSR & Next.js

---

## 🔎 Keywords

React fade animation, fade in on scroll React,
Intersection Observer React animation,
Next.js scroll animation,
lightweight React animation library

---

## ☕ Buy Me a Coffee

Love using **react-fade-in-view**?  
Support the project by buying me a coffee ☕ and helping future development.

<p>
  <img
    src="https://raw.githubusercontent.com/ayush-097/react-fade-in-view/main/assets/QR.png"
    alt="UPI Donation QR"
    width="220"
  />
  &nbsp;&nbsp;&nbsp;
  <img
    src="https://raw.githubusercontent.com/ayush-097/react-fade-in-view/main/assets/paypal-qr.png"
    alt="PayPal Donation QR"
    width="220"
  />
</p>

**UPI ID:** ayushpatel5659-1@okhdfcbank

---

## 📄 License

MIT © Aayush Daboriya
