1. PROJECT DESCRIPTION

- This is a modern, interactive personal portfolio website showcasing my skills, projects, and professional journey as a Computer Science student.
  The site serves as a digital resume and project showcase for potential employers, recruiters, and collaborators.

Key Features:
-3D Flip Card Gallery: Interactive project cards that reveal details on hover.
-Dark/Light Theme Toggle: User preference for viewing comfort.
-Responsive Design: Seamless experience across all devices.
-Multi-page Navigation: Organized content across home, projects, and blog pages.
-Contact Form: Direct communication channel with validation.

Technology Stack
-HTML5, CSS3, Vanilla JavaScript (ES6+) with module system

2. USER PERSONAS

Person 1 : TECH RECRUITER
The tech recruiter lands on the homepage and immediately sees that im a full stack developer.
Then she hovers through the projects I made and if she likes it she could contact me through various platforms like email/LinkedIn.

Person 2 : A Technical CLub President
The organization's president will first look at how the website looks.
The theme toggle function and 3D flip feature does amaze the technical students as they would want to recruit someone with cool features.

Person 3 : Professor
The professor immediately sees that I used ES6 modules correctly.
Checks that my HTML is valid (passes W3C checker).
Verify I added something creative.

3. USER STORIES

Story 1 : The Recruiter is browsing through the portfolios early in the morning. They first noticed the keyword "Full Stack Developer". They immediately just navigate to the
projects section using the navbar and tries to contact using the same. This saves time by not scrolling through the entire website and just getting the information they need.

Story 2: The president of the a technical club wants to develop a website for the the club. They go through my personal homepage and check out that modern creative ideas are used.
They immediately get impressed and tries to send me a message through contact section. I can then immediately get back to them.

Story 3: The professor checks if whatever has been taught in the class is used in practice.
He checks for what new ideas the students are bringing in. Also goes through what suggestions he can give it to me and drops it in the message section.

### 4. Design Mockups

**Desktop Layout (Above the fold):**
```text
+------------------------------------------------------------+
| [AP]         Home  About  Projects  Blog  Contact   [☀️/🌙] |
+------------------------------------------------------------+
|                                                            |
|                Hi, I'm Aarya Patil! 👋                     |
|            Full Stack Developer & UI/UX Fan                |
|                                                            |
|      I make websites that look good and work well          |
|                                                            |
|            [View Projects]    [Get In Touch]               |
|                                                            |
+------------------------------------------------------------+

Project Cards (The Cool Part):
Before you hover:
+------------------+
| [Project Photo] |
| |
| Project Name |
| Tech: JS, React |
+------------------+
When you hover (card flips!):
+------------------+
| What it does... |
| |
| ✓ Cool feature 1 |
| ✓ Cool feature 2 |
| |
| [View] [GitHub] |
+------------------+

On the Phone:
Everything stacks vertically, cards go full width, and you tap instead of hover!

COLOR CHOICES

Dark Mode:
Background: Dark blue-black (like coding at night)
Text: Light gray (easy to read)
Accent: Bright blue (makes buttons pop)
Cards: Slightly lighter dark color

Light Mode:
Background: White
Text: Dark gray
Accent: Same blue (consistent)
Cards: White with subtle shadow

HOMEPAGE FLOW:

NAVIGATION (Sticky)
↓
HERO SECTION (Full viewport)
↓
ABOUT SECTION (Grid: Image | Text)
↓
PROJECTS SECTION (3x2 Grid of flip cards)
↓
SKILLS SECTION (3 columns)
↓
CONTACT SECTION (Info | Form)
↓
FOOTER
