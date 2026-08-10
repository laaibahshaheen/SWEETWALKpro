---
name: Icon rendering
description: A React/Lucide rendering constraint for dynamically selected icon components.
---

When choosing a Lucide icon from an array or other dynamic value, assign it to a component variable and render it as JSX (`<Icon />`) rather than calling it like a regular function.

**Why:** Lucide components rely on React's rendering context; direct invocation can cause a runtime error even when TypeScript typechecks.

**How to apply:** Use a small render callback or `const Icon = icons[index]` followed by `<Icon size={...} />` anywhere icons are selected dynamically.