LIZZIE WURSTEN EPORTFOLIO - QUICK EDIT GUIDE
============================================

Folder Structure:
-----------------
lizzie-wursten-eportfolio/
  ├── index.html                        (Main home page with About Me + 4 clickable Section Divider cards)
  ├── disciples-of-jesus-christ.html    (Outcome 1 Section & Page)
  ├── sound-thinkers.html               (Outcome 2 Section & Page)
  ├── effective-communicators.html      (Outcome 3 Section & Page)
  ├── skilled-collaborators.html        (Outcome 4 Section & Page)
  ├── styles.css                        (Minimalist Modern black/white/gray stylesheet)
  ├── images/                           (Put your .jpg or .png photos here)
  └── documents/                        (Put your .pdf, .docx, or .pptx files here)

How to Add Your Pictures:
-------------------------
1. Resize each photo to about 800px wide (saves load time), then copy it into the `images/` folder.
2. Open any `.html` file in a text editor (like VS Code, TextEdit, or Notepad).
3. Find `<div class="image-placeholder">...</div>` and replace that block with:
   <img src="images/your-photo.jpg" alt="Description of photo" class="artifact-img" width="800" height="220" loading="lazy">
   (Don't use style="..." attributes - the site's security policy blocks inline styles.
   Put styling in styles.css instead.)

How to Add Your Documents:
--------------------------
1. Copy your PDF or Word files into the `documents/` folder.
2. In the `.html` file, change `href="documents/..."` to match your exact filename (e.g., `href="documents/my-essay.pdf"`).
