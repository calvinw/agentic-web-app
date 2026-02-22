# agentic-web-app

A simple counter app built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Live App

The app is automatically deployed to GitHub Pages on every push to `main`:

**https://calvinw.github.io/agentic-web-app/**

## Getting Started (Codespace or Local)

After creating a Codespace (or cloning locally), nothing runs automatically. Open a terminal and use the scripts below depending on what you want to do.

### Start the Dev Server

```bash
bash start_servers.sh
```

Installs dependencies (if needed) and starts the Vite dev server on port 5173. Safe to re-run at any time to restart the server.

### Install an AI Coding Assistant

```bash
bash install_agent_tool.sh
```

Presents a menu to install one of the following:

1. **Claude Code**
2. **Opencode**
3. **Gemini CLI**
4. **Codex CLI**

### Share Your Terminal (upterm)

```bash
bash install_upterm.sh
```

Installs [upterm](https://github.com/owenthereal/upterm) for sharing your terminal session. After installation, run:

```bash
upterm host --accept
```

## Tech Stack

- [Vite](https://vite.dev/) — build tool and dev server
- [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) — component library

## Adding shadcn Components

```bash
npx shadcn@latest add <component-name>
```

## Build

```bash
npm run build    # production build
npm run preview  # preview the production build locally
```
