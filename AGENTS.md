# Scent Flix

## Product Idea
**Scent Flix** — "Streaming for your dog's nose." A smart scent enrichment device for dogs left alone at home. It releases short, faint bursts of vet-formulated, dog-safe scents. Placed next to a snuffle mat with hidden treats. Calm episodes (lavender, chamomile, "Your Owner" owner pad/scent) reduce dog's anxiety. New episodes arrive monthly via cartridge subscription.

## Key Claims & Constraints
- Never claim it cures or treats anxiety; say it **supports calm**.
- Vet formulated, low concentration, small bursts, auto shut off.
- No tea tree, eucalyptus, or pine.
- Price: ₹2,999 device; ₹799/month subscription.

## Mascot — Bruno
Bruno is a golden retriever. Real cut-out photos in `public/images/`:
- dog-door, dog sniff, dog happy, dog sleep, dog jump
- He appears in every section; the site tells the story of his day.

## Design Direction
- Playful, warm, handmade, not generic AI.
- Light theme only. No dark sections, no glows, no gradient washes.
- Colors:
  - Background cream: `#FFF8EC`
  - Butter yellow: `#FFD66B`
  - Golden: `#F2A93B`
  - Sky blue: `#BFE3F2`
  - Soft lavender: `#D9CCF5`
  - Mint: `#C8EBD9`
  - Text dark navy: `#1F2A44`
- Fonts (Google Fonts): headings **Lilita One** (chunky, rounded, big bold tight headlines); body **Nunito**.
- Shapes: blob shapes behind photos, wavy SVG dividers between sections, thick rounded buttons with hard offset shadow `4px 4px 0 #1F2A44`, sticker-style badges tilted -4deg to 6deg, hand-drawn SVG underlines and arrows, small doodle icons (bones, paws, noses, scent swirls) scattered faintly in bg.
- Layout: asymmetric, photos overlap section edges, not a rigid card grid.

## Animation
- GSAP + ScrollTrigger for scroll story; Lenis smooth scrolling; Framer Motion for UI/hover/page animation.
- Personality: buttons squish on press, stickers pop in with bounce, doodles float slowly, Bruno bobs gently, heading reveal word by word.
- Always respect `prefers-reduced-motion`.
- Mouse cursor followed by paws.

## Tech Stack
- React + Vite + TypeScript + Tailwind CSS + React Router.
- Cart and orders in React Context + localStorage (no backend).
- Deploy on Vercel.
- Payment clearly labelled demo, complete animation, no card numbers requested.
- Fully responsive, accessible. Every button/link/form works. No lorem ipsum.

## Rules (from .hwa/rules.md)
- Commit and push to main (GitHub: https://github.com/Krishna-Mehta-135/a50105223108-hwa-hackathon).
- Deploy with `vercel --prod` to https://a50105223108-hwa-hackathon.vercel.app.
- Merge any other branch into main.
- Never touch hackathon setup files (.hwa/, init.py, submit.py, hwa-start.*, opencode.json).
- Before leaving: everything committed, pushed to main, deployed.
- Work only in this project folder.
- No closed models; no ready-made prompts/skills; no hidden messages for reviewers.