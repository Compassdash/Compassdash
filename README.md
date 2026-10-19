# Compass Dash

**A free KS3 revision site with lessons, quizzes and games.**

▶ **Play it here: [compassdash.github.io/Compassdash](https://compassdash.github.io/Compassdash/)**

Studying for GCSEs? Try our sister site, **[Compass GCSE](https://compassdash.github.io/Compass-GCSE/)**.

---

## What is Compass Dash?

Compass Dash helps students in Years 7–9 revise. Every subject has short lessons, cheat sheets and practice questions, and most can be played as a game. You earn XP as you learn and spend it in the shop. Progress is saved in your browser, and if you sign in with your 4-digit student code and username, it's also saved to your account so you can carry on from another device.

## Subjects

Maths · English · Science · Geography · French · Computing · Art & Design · Music · History · Spanish · Arabic

## Features

### New in v2.6.6
- **Arabic**, a new subject, plus new French, Spanish and History topics
- **Hear it**: French, Spanish and Arabic words read aloud by the device
- **Interface languages**: English, French or Arabic menus (lessons stay in English)
- **House Cup**: every week, every member of the winning house gets 10,000 XP
- **Teacher tools**: Class Insights, Announcements and Shop XP
- Half-price shop, a level every 100 XP, a UI transparency slider, and house colours only when you choose them

### Learning
- Lessons and cheat sheets for every topic
- Practice questions, topic tests and mastery stages
- Spaced review that brings back topics just as you're about to forget them
- Five difficulty levels, from **Easy** to **Insane**
- Player levels: a new level for every 100 XP earned, without spending any XP

### Activities
- Drag-and-drop **sorting**, **putting things in order**, **matching**, **labelling diagrams** (a plant cell, a circuit, a river, a compass and a colour wheel), **gap fills** and **number lines**
- Every topic has at least one; drag a card, tap a card then its place, or use the keyboard

### My learning path
- Your next steps, chosen from your **year group**, how you are doing, how far you have got and your **weakest topics**
- Keeps to topics for your year, and suggests harder ones only when you're doing well

### Revision modes
- Quiz, True/False, Endless, Speed drill and Stand-off
- Mistake review, where you go back over questions you got wrong
- Daily Challenge
- Exam Countdown
- Flashcards

### Games
- **Spike quiz:** run, jump and answer as the cube, in Stand-off and True/False
- **Double Spike** and quick-time events
- **Match-up** and **Speed round**
- **Cyber-safety games** for Computing: spot dodgy emails, links, passwords and scams

### Typed answers
- Type your own answers as well as picking from options
- Maths helpers for powers and standard form: ×10ⁿ, an **x²** power mode, x³ and x⁻ⁿ

### Rewards
- XP for every correct answer
- A shop with characters, skins, trails, themes, pixel-art badges (including the **Golden Ticket**) and titles
- Achievements to unlock
- **My Stats:** accuracy, playtime, mastery and more

### Houses
- **North, East, South and West**, each with its own crest
- The **House Cup**: every XP point a member earns counts for their house, this week and all time
- **Team challenges** set by teachers: house against house, or a whole class towards one goal

### For classes
- 4-digit student codes and usernames, with progress saved to your account
- **My class**: each student's class, assignments and quizzes, ticked off as they finish each task
- **Teacher tools**: classes, students, assignments with due dates, quizzes (from the question bank or your own questions), challenges, and printable code slips
- Progress tracking for each class and each student, and a class leaderboard
- Usernames and titles are checked for words that aren't suitable for school

### Settings and accessibility
- Light and dark themes
- A more readable font, larger text and high-contrast mode
- Music and sound effects, each of which can be switched on or off
- Works offline once it has loaded
- A feedback form for reporting problems or suggesting ideas, saved in Supabase and read in the developer panel

## Running it yourself

Compass Dash is a single web page, so no build step or install is needed.

| File | What it does |
|------|--------------|
| `index.html` | The whole site: content, styles and code |
| `sw.js` | Offline support: lets the site keep working without internet |

- **On GitHub Pages:** upload both files to the repository, then go to **Settings → Pages** and publish from the main branch.
- **On your own computer:** open `index.html` in a browser. Offline mode only works over `https://` or `localhost`.

### Student codes and class progress (optional)

Student accounts, cloud saving, class progress and the leaderboard use [Supabase](https://supabase.com). The rest of the site works without it, and progress is then saved only on the device.

To set it up, run the SQL files in your Supabase project's SQL Editor in the order given in the student-codes guide, finishing with `compass-dash-v2.6-update.sql` and then `compass-dash-v2.6.3-feedback.sql` and then `compass-dash-v2.6.6-features.sql`, then follow the rest of the guide.

> ⚠️ **Keep the admin key private.** Don't upload the student-codes guide or the admin-key SQL file to a public repository, because they contain the admin key. The same goes for `change-dev-password.sql` once you have typed a password into it.

### Admin security

- The admin panel password is checked by the database, not inside the page, and is stored as a slow bcrypt hash. The admin panel needs Supabase to be set up.
- Five wrong admin keys or admin panel passwords from one connection within 15 minutes lock admin sign-in from that connection for 15 minutes. Students on the same school network share a connection, so a student guessing can briefly lock a teacher out too.
- The server only counts XP and answers a real player could have earned since their last sync. Anything above that never reaches the leaderboard, houses, challenges or class pages.
- Anyone can change the numbers saved in their own browser. These checks stop those changes from reaching anyone else.

## Version numbers

Every update moves the version forward by one step, and each part only counts up to 9:

`v2.6.0 → v2.6.1 → … v2.6.9 → v2.7.0 … v2.9.9 → v3.0.0`

To see what changed in each update, open **Settings → About & changelog** in the site.

## Credits

Made by **Rondellgames inc.**
