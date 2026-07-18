# Design Specification: Professional Developer Portfolio

This document outlines the design changes, structure, and style guidelines to transition the portfolio website from a "vibecoded" (informal/indie-dev) look to a highly professional, polished, and corporate-grade software engineering showcase.

---

## 1. Design Philosophy
- **Professionalism**: Clean margins, balanced typography, and robust layout grid. Avoid informal widgets (e.g., local time in New Delhi in navigation, custom text pull-ups).
- **Subtlety**: Animations should be micro-interactions (e.g., button scale on tap, smooth color transitions) rather than heavy load animations.
- **Sophisticated Palette**: Use a refined color palette leveraging dark slates and zincs with clear border separators (`border-zinc-900`) instead of bright glows and green/pulse badges.

---

## 2. Color & Typography System
- **Background**: Solid `#09090b` (Zinc 950) for primary layout, and `#09090b` / `#18181b` (Zinc 900) for structured cards.
- **Text Hierarchy**:
  - Main titles: Semibold/Extrabold white (`text-white`) with high-contrast neutral gradients.
  - Body text: Muted slate/zinc (`text-zinc-400`).
  - Labels & Mono details: Clean gray typography (`text-zinc-500 font-mono text-xs`).
- **Typography**: Inter (already configured) utilizing standard weights (Light 300, Regular 400, Medium 500, Bold 700).

---

## 3. Structural Reorganization & Content Strategy

### Hero Section (Left-aligned & Balanced)
- **Introduction**: A minimalist header introducing Ujjwal Sharma (e.g. `Hi, my name is` in a simple mono-spaced tag).
- **Core Title**: High-contrast, clean name layout followed by the subtitle: `Full Stack & AI Engineer`.
- **Primary Subtitle**: Detailed background focusing on experience, education (B.Tech CSE), and active focus on FastAPI, Next.js, and GenAI.
- **Remove Informal Elements**:
  - Remove "Available for Internships" pulsing badge.
  - Remove Phone Number contact button.
  - Remove local timezone/time ticker in the navigation bar.

### Right-Side Interactive Visual
- **Remove**: Cringy `developer.json` file view inside a mock code terminal.
- **Replace Options**:
  - **Option A (Recommended)**: A sleek **System Architecture Diagram** showcasing an enterprise AI Application workflow (Frontend Client $\rightarrow$ API Gateway Gateway $\rightarrow$ AI/RAG Data Core). This illustrates practical system design capabilities.
  - **Option B**: A clean **Core Engineering Metrics Grid** showing key certifications, solved algorithm counts (300+ LeetCode), and GPA milestones in a dashboard format.

### Navigation & Page Layout
- **Navbar**: Clean, stickied navigation containing `Home`, `Experience`, `Projects`, `Skills`, and `Achievements`.
- **Remove**:
  - "Resume" section (Download Resume button/layout).
- **Sections**:
  - **Experience**: Clean timeline layout detailing responsibilities and technical contributions at TBI-GEU.
  - **Projects**: Clean two-column card layout displaying key features and repository links.
  - **Technical Skills**: A structured grid showing categorizations of languages, backend, frontend, devops, and AI integrations.
  - **Achievements**: Clean grid showcasing academic, hackathon, and open-source milestones.
