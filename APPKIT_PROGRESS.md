# AppKit Integration Progress

## What We've Done

- Installed `@reown/appkit`, `wagmi`, and `viem` in the frontend (`apps/frontend`).
- Added `NEXT_PUBLIC_PROJECT_ID` to `.env` with the Reown Project ID.
- Configured Monad Testnet in AppKit config (`src/config/index.ts`):
  - Imported `monadTestnet` from `@reown/appkit/networks`.
  - Set `export const networks = [monadTestnet]`.
- Created an AppKit provider and wrapped the app with it.
- Added the `ConnectButton` from AppKit to the UI for wallet connection.

## What We Want To Do Next

- [ ] Test wallet connection end-to-end on Monad Testnet.
- [ ] Integrate Wagmi hooks for contract interaction (read/write) using the connected wallet.
- [ ] Add user feedback for connection status and errors (toasts, banners, etc.).
- [ ] Style the Connect Wallet button to match the app's design system (ShadCN + Tailwind).
- [ ] Refactor layout to use Tailwind best practices for spacing, color, and responsiveness.
- [ ] Build reusable UI primitives (Button, Card, etc.) using ShadCN and extend with custom Tailwind classes as needed.
- [ ] Implement dark mode support and test all components for theme compatibility.
- [ ] Add loading, empty, and error states for all wallet-related UI.
- [ ] Document any gotchas or workarounds encountered during integration.
- [ ] (Optional) Support multiple EVM chains in the future.

## Frontend Styling Progress

- [ ] Audit all ShadCN components for consistent usage and override with Tailwind where needed.
- [ ] Use Tailwind utility classes for layout, spacing, and typography instead of custom CSS.
- [ ] Ensure all interactive elements (buttons, inputs) have accessible focus/active/hover states.
- [ ] Use Tailwind's `@apply` for any custom classes in global styles if needed.
- [ ] Leverage Tailwind's color palette and extend in `tailwind.config.js` for brand consistency.
- [ ] Test on mobile and desktop for responsive breakpoints.
- [ ] Remove unused CSS and keep the codebase utility-first.

## Tailwind & ShadCN Best Practices

- Prefer Tailwind utilities for layout, spacing, and color; use ShadCN for accessible, composable UI primitives.
- Extend ShadCN components with Tailwind classes for custom look/feel, but avoid deep overrides unless necessary.
- Use Tailwind's `container`, `mx-auto`, and responsive padding for main layout wrappers.
- Use `prose` classes for rich text content if needed.
- Keep all custom styles in `globals.css` or component-level files, not inline.
- Use semantic HTML and ARIA attributes for accessibility.
- Test dark mode and high-contrast mode for all components.

## References

- [Reown AppKit Guide](https://docs.monad.xyz/guides/reown-guide)
- [Reown AppKit GitHub](https://github.com/reown-labs/appkit)
- [Monad Docs](https://docs.monad.xyz/)
- [ShadCN UI Docs](https://ui.shadcn.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
